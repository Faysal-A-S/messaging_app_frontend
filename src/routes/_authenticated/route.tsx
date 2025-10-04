import { authAtom } from "@/store/auth";
import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";
import { useAtom } from "jotai";
import { MoreVertical } from "lucide-react";
export const Route = createFileRoute("/_authenticated")({
  component: RouteComponent,
});

function RouteComponent() {
  const [auth] = useAtom(authAtom);
  if (!auth || !auth?.token) {
    return <Navigate to="/login" reloadDocument />;
  }
  return (
    <div>
      <nav className="backdrop-blur-xl bg-white/5 border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-700 to-teal-700 flex items-center justify-center text-white font-semibold">
              {/* {loggedInUser.avatar} */}
            </div>
            <div>
              <h3 className="text-white font-semibold">{auth.username}</h3>
            </div>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <MoreVertical className="text-gray-400" size={20} />
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
