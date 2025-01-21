"use client";
import { useTheme } from "@/app/context/theme";

import { useEffect, useState } from "react";

export default function Toggle() {
  const { theme, toggleTheme } = useTheme();
  // state
  const { mounted, setMounted } = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <button className="nav-link" onClick={Toggle}>
        {theme === "light" ? "light" : "dark"}
      </button>
    )
  );
}
