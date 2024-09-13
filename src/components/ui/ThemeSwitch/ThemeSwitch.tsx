import { ModeContext } from "@/app/page";
import { useColorScheme } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import MaterialUISwitch from "./MaterialUISwitch";

export default function ThemeSwitch() {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const { setIsDark } = useContext(ModeContext);
  const { mode, setMode } = useColorScheme();
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDark("dark");
      setMode("dark");
      setIsChecked(false);
    } else {
      setIsDark("light");
      setMode("light");
      setIsChecked(true);
    }
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setMode("dark");
      setIsDark("dark");
      return;
    }
    setMode("light");
    setIsDark("light");
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
