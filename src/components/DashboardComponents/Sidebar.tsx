import { useState } from "react";

import homeIcon from "../../assets/home.png";
import swapsIcon from "../../assets/swaps.svg";
import browseIcon from "../../assets/search.svg";
import chatIcon from "../../assets/chat.svg";
import settingsIcon from "../../assets/settings.svg";

const navItems = [
  { name: "Home", imgSrc: homeIcon, path: "/home" },
  { name: "Swaps", imgSrc: swapsIcon, path: "/swaps" },
  { name: "Browse", imgSrc: browseIcon, path: "/browse" },
  { name: "Chat", imgSrc: chatIcon, path: "/chat" },
];

const Sidebar = () => {
  const [active, setActive] = useState("Home");

  const handleClick = (name: string) => {
    setActive(name);
    // Add navigation logic here if needed
  };

  return (
    <div className="h-full w-56 bg-white shadow-md flex flex-col justify-between p-4">
      {/* Main Navigation */}
      <div className="flex flex-col space-y-4">
        {navItems.map((item) => {
          const isActive = active === item.name;
          return (
            <button
              key={item.name}
              onClick={() => handleClick(item.name)}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors duration-200 ${
                isActive
                  ? "bg-primary-50 text-primary-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <img
                src={item.imgSrc}
                alt={`${item.name} icon`}
                className="w-5 h-5 object-contain"
              />
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Settings Navigation */}
      <div>
        <button
          onClick={() => handleClick("Settings")}
          className={`flex items-center gap-3 px-4 py-3 rounded-md w-full transition-colors duration-200 ${
            active === "Settings"
              ? "bg-primary-50 text-primary-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <img
            src={settingsIcon}
            alt="Settings icon"
            className="w-5 h-5 object-contain"
          />
          <span className="text-sm font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
