import { MoreVertical } from "lucide-react";
import React from "react";

type NavbarProps = {
  user: string;
  type: boolean;
  avatar: string;
};

const Navbar: React.FC<NavbarProps> = ({ user, type, avatar }) => {
  return (
    <nav className="backdrop-blur-xl bg-white/5 border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-700 to-teal-700 flex items-center justify-center text-white font-semibold">
            {avatar}
          </div>
          <div>
            <h3 className="text-white font-semibold">{user}</h3>
          </div>
        </div>
        {type && (
          <>
            {" "}
            <div className="text-white font-bold text-lg">Message App</div>
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <MoreVertical className="text-gray-400" size={20} />
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
