import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";

const MainSection = ({ theme, setTheme }: any) => {
  const location = useLocation();
  return (
    <div>
      <Topbar
        theme={theme}
        onThemeToggle={() =>
          setTheme((t: "light" | "dark") => (t === "dark" ? "light" : "dark"))
        }
      />
      <div className="p-4 lg:p-6 overflow-auto bg-gray-50 dark:bg-slate-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {location.pathname === '/' || location.pathname.startsWith('/ecommerce') ? (
              <Dashboard />
            ) : (
              <Outlet />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MainSection;
