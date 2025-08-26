import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { updateThemeMode } from "@/lib/theme-utils";
import { usePreferencesStore } from "@/stores/preferences/preferences-provider";
import { useEffect } from "react";

export function ThemeSwitcher({
  defaultMode,
}: {
  defaultMode?: "light" | "dark";
}) {
  const themeMode = usePreferencesStore((s) => s.themeMode);
  const setThemeMode = usePreferencesStore((s) => s.setThemeMode);

  useEffect(() => {
    if (defaultMode) {
      updateThemeMode(defaultMode);
      setThemeMode(defaultMode);
    }
  }, [defaultMode, setThemeMode]);

  const handleValueChange = () => {
    const newTheme = themeMode === "dark" ? "light" : "dark";
    updateThemeMode(newTheme);
    setThemeMode(newTheme);
  };

  return (
    <Button size="icon" onClick={handleValueChange} className="cursor-pointer">
      {themeMode === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
