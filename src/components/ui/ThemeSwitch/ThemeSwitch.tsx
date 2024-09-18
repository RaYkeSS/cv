"use client";

import { useColorScheme } from "@mui/material";
import { useEffect, useState } from "react";
import MaterialUISwitch from "./MaterialUISwitch";

export default function ThemeSwitch() {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const { mode, setMode } = useColorScheme();
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
      setMode("dark");
      setIsChecked(false);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setMode("light");
      setIsChecked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      setMode("dark");
      return;
    }
    document.documentElement.setAttribute("data-theme", "light");
    setMode("light");
  };

  if (!mode) {
    return null;
  }
  return (
    <>
      {isChecked ? (
        <MaterialUISwitch onChange={handleChange} />
      ) : (
        <MaterialUISwitch defaultChecked onChange={handleChange} />
      )}
    </>
  );
}
