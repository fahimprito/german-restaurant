"use client";

import defaultMenu from "@/data/defaultMenu";
import {
  createFoodId,
  loadMenuFromStorage,
  MENU_STORAGE_EVENT,
  MENU_STORAGE_KEY,
  saveMenuToStorage,
} from "@/lib/storage";
import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

const RestaurantContext = createContext(null);

const cloneMenu = (menu) => menu.map((item) => ({ ...item }));
const defaultMenuSnapshot = cloneMenu(defaultMenu);
const defaultMenuSerialized = JSON.stringify(defaultMenuSnapshot);
const getServerSnapshot = () => defaultMenuSerialized;

function getMenuSnapshot() {
  if (typeof window === "undefined") {
    return getServerSnapshot();
  }

  return window.localStorage.getItem(MENU_STORAGE_KEY) ?? getServerSnapshot();
}

function parseMenuSnapshot(snapshot) {
  try {
    const parsedValue = JSON.parse(snapshot);
    return Array.isArray(parsedValue) ? parsedValue : defaultMenuSnapshot;
  } catch {
    return defaultMenuSnapshot;
  }
}

function subscribe(callback) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event) => {
    if (
      event.type === MENU_STORAGE_EVENT ||
      event.key === MENU_STORAGE_KEY
    ) {
      callback();
    }
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(MENU_STORAGE_EVENT, handleStorage);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(MENU_STORAGE_EVENT, handleStorage);
  };
}

export function RestaurantProvider({ children }) {
  const menuSnapshot = useSyncExternalStore(
    subscribe,
    getMenuSnapshot,
    getServerSnapshot
  );
  const isHydrated = useSyncExternalStore(subscribe, () => true, () => false);
  const menuItems = parseMenuSnapshot(menuSnapshot);

  useEffect(() => {
    if (!window.localStorage.getItem(MENU_STORAGE_KEY)) {
      saveMenuToStorage(defaultMenuSnapshot);
    }
  }, []);

  const syncMenu = (updater) => {
    const currentMenu = loadMenuFromStorage();
    const nextMenu =
      typeof updater === "function" ? updater(currentMenu) : updater;

    saveMenuToStorage(nextMenu);
  };

  const addFood = (food) => {
    syncMenu((currentMenu) => [
      {
        id: createFoodId(),
        ...food,
      },
      ...currentMenu,
    ]);
  };

  const updateFood = (id, updatedFood) => {
    syncMenu((currentMenu) =>
      currentMenu.map((item) =>
        item.id === id ? { ...item, ...updatedFood, id } : item
      )
    );
  };

  const deleteFood = (id) => {
    syncMenu((currentMenu) => currentMenu.filter((item) => item.id !== id));
  };

  const stats = {
    totalFoods: menuItems.length,
    featuredFoods: menuItems.filter((item) => item.featured).length,
    availableFoods: menuItems.filter((item) => item.available).length,
  };

  return (
    <RestaurantContext.Provider
      value={{
        menuItems,
        isHydrated,
        stats,
        addFood,
        updateFood,
        deleteFood,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}

export function useRestaurant() {
  const context = useContext(RestaurantContext);

  if (!context) {
    throw new Error("useRestaurant must be used within a RestaurantProvider.");
  }

  return context;
}
