import { Bell, Menu, Moon, RotateCcw, Search, Star, Sun } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Topbar({
  theme,
  onThemeToggle,
}: {
  theme: "light" | "dark";
  onThemeToggle: () => void;
}) {
  const location = useLocation();

  // Get current page info for breadcrumb
  const getCurrentPageInfo = () => {
    const path = location.pathname;
    if (path === "/") return { section: "Dashboards", page: "Default" };
    if (path.startsWith("/ecommerce"))
      return { section: "Dashboards", page: "eCommerce" };
    if (path.startsWith("/projects"))
      return { section: "Dashboards", page: "Projects" };
    if (path.startsWith("/courses"))
      return { section: "Dashboards", page: "Online Courses" };
    if (path.startsWith("/profile"))
      return { section: "Pages", page: "User Profile" };
    if (path.startsWith("/account"))
      return { section: "Pages", page: "Account" };
    if (path.startsWith("/corporate"))
      return { section: "Pages", page: "Corporate" };
    if (path.startsWith("/blog")) return { section: "Pages", page: "Blog" };
    if (path.startsWith("/social")) return { section: "Pages", page: "Social" };
    return { section: "Dashboards", page: "Default" };
  };

  const { section, page } = getCurrentPageInfo();

  return (
    <header className="h-14 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 col-span-2">
      {/* Left side: Menu + Breadcrumb */}
      <div className="flex items-center gap-4">
        <button className="btn btn-ghost" aria-label="Menu">
          <Menu size={18} />
        </button>
        <div className="flex items-center gap-2 text-sm">
          <Star size={16} className="text-slate-400" />
          <span className="text-slate-500">{section}</span>
          <span className="text-slate-400">/</span>
          <span className="text-slate-900 dark:text-slate-100 font-medium">
            {page}
          </span>
        </div>
      </div>

      {/* Right side: Search + Icons + Avatar */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            className="w-80 rounded-full pl-9 pr-4 py-2 bg-slate-100 dark:bg-slate-800 focus:outline-none text-sm"
            placeholder="Search"
          />
        </div>
        <button
          className="btn btn-ghost"
          onClick={onThemeToggle}
          aria-label="Theme toggle"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="btn btn-ghost" aria-label="History">
          <RotateCcw size={18} />
        </button>
        <button className="btn btn-ghost" aria-label="Notifications">
          <Bell size={18} />
        </button>
        <button className="btn btn-ghost" aria-label="Grid view">
          <Menu size={18} />
        </button>
        <img alt="avatar" className="h-8 w-8 rounded-full" src="https://i.pravatar.cc/100?img=32" />
      </div>
    </header>
  );
}
