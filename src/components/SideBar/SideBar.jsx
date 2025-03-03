import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../../assets/55555.jpg";

const SidebarContext = createContext();

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-full">
      <nav className="h-full flex flex-col bg-neutral-950 text-white">
        {/* Top Section */}
        <div className="p-4 pb-2 flex justify-center items-center">
          {/* Profile Image & Name */}
          <div className={`flex items-center gap-2 transition-all ${expanded ? "w-45" : "w-0"} overflow-hidden`}>
            <img src={profileImg} alt="Profile" className="w-12 h-12 rounded-full border-2 border-gray-600" />
            <span className="font-semibold text-lg">Jackson Ford</span>
          </div>

          {/* Collapse Button */}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700"
          >
            {expanded ? <ChevronFirst size={24} /> : <ChevronLast size={24} />}
          </button>
        </div>

        {/* Sidebar Context for Child Components */}
        <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3 space-y-2 pt-7">
                <SidebarItem to="/" text="Home" />
                <SidebarItem to="/about" text="About" />
                <SidebarItem to="/skills" text="Skills" />
                <SidebarItem to="/experience" text="Experience" />
                <SidebarItem to="/work" text="Work" />
            </ul>
        </SidebarContext.Provider>


        {/* Bottom User Section */}
        <div className="border-t flex p-3 items-center ">
          <img src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true" alt="" className="w-10 h-10 rounded-md" />
          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
            <div className="leading-4">
              <h4 className="font-semibold">Jackson Ford</h4>
              <span className="text-xs text-gray-400">jacksonford@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

// Sidebar Item Component
function SidebarItem({ to, text }) {
  const { expanded } = useContext(SidebarContext);
  
  return (
    <li className="relative group">
      <Link
        to={to}
        className="flex items-center gap-4 py-2 px-3 rounded-md transition-all text-gray-400 hover:text-white hover:bg-gray-700"
      >
        {/* Icon Placeholder (You can replace this with actual icons) */}
        {/* <div className="w-6 h-6 bg-gray-600 rounded-md"></div> */}
        
        {/* Text with Animation */}
        <span className={`transition-all ${expanded ? "opacity-100 w-40" : "opacity-0 w-0"} overflow-hidden`}>
          {text}
        </span>
      </Link>

      {/* Tooltip for Collapsed State */}
      {!expanded && (
        <div className="absolute left-full ml-2 px-3 py-1 bg-gray-700 text-white text-sm rounded-md shadow-md opacity-0 group-hover:opacity-100 transition">
          {text}
        </div>
      )}
    </li>
  );
}
