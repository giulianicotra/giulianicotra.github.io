"use client";
import { useEffect } from "react";

export default function FirefoxClassWrapper({ children }) {
  useEffect(() => {
    if (navigator.userAgent.toLowerCase().includes("firefox")) {
      document.documentElement.classList.add("is-firefox");
    }
  }, []);

  return children;
}
