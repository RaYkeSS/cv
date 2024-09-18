"use client";

import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Button, Menu, MenuItem } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { langs } from "@/app/dictionaries/langs";

import RuFlagIcon from "@/app/dictionaries/RuFlagIcon";

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = React.useState("ru");
  const [selectedLang, setSelectedLang] = React.useState(<RuFlagIcon />);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => {
    const lang = pathname?.split("/").at(1);
    const currentLang = langs.find((l) => l.lang === lang);

    if (currentLang) {
      setCurrentLang(currentLang.lang);
      setSelectedLang(currentLang.fullName);
    }

    if (!currentLang) {
      setCurrentLang("en");
      setSelectedLang(<RuFlagIcon />);
    }
  });

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleLangChange({
    lang,
    fullName,
  }: {
    lang: string;
    fullName: React.SetStateAction<React.JSX.Element>;
  }) {
    const language = lang ? "/" + lang : "/en";

    router.push(`${language}`);

    setSelectedLang(fullName);
    handleClose();
  }

  return (
    <Toolbar disableGutters>
      <Button
        size="small"
        aria-label="change lang button"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        {selectedLang}
      </Button>
      <Menu
        disableScrollLock
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        aria-label="Languages list"
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {langs.map((lang) => (
          <MenuItem
            key={lang.lang}
            selected={currentLang === lang.lang}
            onClick={() => handleLangChange(lang)}
          >
            {lang.fullName}
          </MenuItem>
        ))}
      </Menu>
    </Toolbar>
  );
}
