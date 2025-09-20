import {
  ChevronDown,
  ChevronRight as ChevronRightSm
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  navigationData,
  type NavItem,
  type NavSection,
} from "../data/navigation";

export default function Sidebar({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <aside
      className={`sticky top-0 row-span-2 h-svh bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-[width] duration-300 flex flex-col ${
        open ? "w-64" : "w-16"
      }`}
    >
      <div className="h-14 flex items-center gap-3 px-4 border-b border-slate-200 dark:border-slate-800 flex-shrink-0">
        <img
          alt="avatar"
          className="h-8 w-8 rounded-full"
          src="https://i.pravatar.cc/100?img=32"
        />
        {open && <span className="font-semibold text-slate-900 dark:text-slate-100">ByeWind</span>}
      </div>
      <nav className="p-3 space-y-5 overflow-y-auto flex-1 min-h-0">
        {navigationData.map((section) => (
          <NavSection key={section.id} section={section} sidebarOpen={open} />
        ))}
      </nav>
    </aside>
  );
}

function NavSection({
  section,
  sidebarOpen,
}: {
  section: NavSection;
  sidebarOpen: boolean;
}) {
  if (section.isHorizontal && sidebarOpen) {
    return (
      <div className="px-2">
        <div className="flex gap-2">
          {section.items.map((item) => (
            <button
              key={item.id}
              className="flex-1 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {section.label && sidebarOpen && (
        <div className="px-2 py-1 text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
          {section.label}
        </div>
      )}
      {section.items.map((item) => (
        <NavItemComponent key={item.id} item={item} sidebarOpen={sidebarOpen} />
      ))}
    </div>
  );
}

function NavItemComponent({
  item,
  sidebarOpen,
}: {
  item: NavItem;
  sidebarOpen: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const Icon = item.icon;

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {sidebarOpen && (
            <>
              {expanded ? (
                <ChevronDown size={14} />
              ) : (
                <ChevronRightSm size={14} />
              )}
              {Icon && <Icon size={18} />}
              <span className="truncate flex-1 text-left">{item.label}</span>
            </>
          )}
        </button>
        {expanded && sidebarOpen && (
          <div className="ml-7 mt-1 space-y-1">
            {item.children?.map((child) => (
              <SideLink key={child.id} to={child.path!} label={child.label} />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (item.path) {
    return (
      <SideLink
        to={item.path}
        label={item.label}
        icon={Icon}
        sidebarOpen={sidebarOpen}
      />
    );
  }

  return (
    <div className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-slate-700 dark:text-slate-300">
      {Icon && <Icon size={18} />}
      {sidebarOpen && <span className="truncate">{item.label}</span>}
    </div>
  );
}

function SideLink({
  to,
  label,
  icon: Icon,
  sidebarOpen = true,
}: {
  to: string;
  label: string;
  icon?: any;
  sidebarOpen?: boolean;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium transition-colors ${
          isActive
            ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100"
            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
        }`
      }
      end
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-900 dark:bg-slate-100 rounded-r-full" />
          )}
          {Icon && <Icon size={18} />}
          {sidebarOpen && <span className="truncate">{label}</span>}
        </>
      )}
    </NavLink>
  );
}
