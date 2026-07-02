"use client";

import { useCallback } from "react";

export default function useLocalStorage(key) {
  const readValue = useCallback(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const item = window.localStorage.getItem(key);

    if (!item) {
      return null;
    }

    try {
      return JSON.parse(item);
    } catch {
      return null;
    }
  }, [key]);

  const writeValue = useCallback(
    (value) => {
      if (typeof window === "undefined") {
        return;
      }

      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  const removeValue = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.removeItem(key);
  }, [key]);

  return {
    readValue,
    writeValue,
    removeValue,
  };
}
