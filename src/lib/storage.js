export const MENU_STORAGE_KEY = "restaurant-menu";
export const MENU_STORAGE_EVENT = "restaurant-menu-updated";

export function loadMenuFromStorage() {
  if (typeof window === "undefined") {
    return [];
  }

  const storedValue = window.localStorage.getItem(MENU_STORAGE_KEY);

  if (!storedValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch {
    return [];
  }
}

export function saveMenuToStorage(menu) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(menu));
  window.dispatchEvent(new Event(MENU_STORAGE_EVENT));
}

export function createFoodId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}
