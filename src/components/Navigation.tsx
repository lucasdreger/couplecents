
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChartPieIcon, CalendarIcon, Settings2Icon } from "lucide-react";

const tabs = [
  { name: "Overview", path: "/", icon: ChartPieIcon },
  { name: "Monthly Details", path: "/monthly", icon: CalendarIcon },
  { name: "Administration", path: "/admin", icon: Settings2Icon },
];

export default function Navigation() {
  const location = useLocation();
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-lg font-semibold text-gray-900">Budget Buddy</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {tabs.map((tab) => {
                const isActive = location.pathname === tab.path;
                const Icon = tab.icon;
                
                return (
                  <Link
                    key={tab.name}
                    to={tab.path}
                    className={`inline-flex items-center px-1 pt-1 relative ${
                      isActive ? "text-finance-primary" : "text-gray-500 hover:text-gray-700"
                    }`}
                    onMouseEnter={() => setHoveredTab(tab.name)}
                    onMouseLeave={() => setHoveredTab(null)}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    <span className="font-medium">{tab.name}</span>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-finance-primary"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {hoveredTab === tab.name && !isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-200"
                        layoutId="hoverTab"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
