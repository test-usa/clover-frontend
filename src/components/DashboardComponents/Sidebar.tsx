import { useLocation, useNavigate } from "react-router-dom";
import homeIcon from "../../assets/home.png";
import swapsIcon from "../../assets/swaps.svg";
import browseIcon from "../../assets/search.svg";
import chatIcon from "../../assets/chat.svg";
import settingsIcon from "../../assets/settings.svg";

const navItems = [
  { name: "Home", imgSrc: homeIcon, path: "/dashboard" },
  { name: "Swaps", imgSrc: swapsIcon, path: "/dashboard/swaps" },
  { name: "Browse", imgSrc: browseIcon, path: "/dashboard/browse" },
  { name: "Chat", imgSrc: chatIcon, path: "/dashboard/chat" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="h-full w-56 bg-white shadow-md flex flex-col justify-between p-4">
      {/* Main Navigation */}
      <div className="flex flex-col space-y-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.name}
              onClick={() => handleClick(item.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors duration-200 w-full ${
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
          onClick={() => handleClick("/dashboard/settings")}
          className={`flex items-center gap-3 px-4 py-3 rounded-md w-full transition-colors duration-200 ${
            location.pathname === "/dashboard/settings"
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
