import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import MainSection from "./MainSection";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useLocalStorage("sidebar-open", true);
  const [theme, setTheme] = useLocalStorage<"light" | "dark">(
    "theme",
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  return (
    <div className="min-h-full grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr]">
      <Sidebar
        open={sidebarOpen}
        onToggle={() => setSidebarOpen((v: boolean) => !v)}
      />
      <MainSection theme={theme} setTheme={setTheme} />

      <Rightbar />
    </div>
  );
}
