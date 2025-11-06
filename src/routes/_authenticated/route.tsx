import AppSidebar from "@/components/organisms/AppSideBar/AppSidebar";
import Navbar from "@/components/organisms/Navbar/Navbar";

import { authAtom } from "@/store/auth";
import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";
import { useAtom } from "jotai";

export const Route = createFileRoute("/_authenticated")({
  component: RouteComponent,
});

function RouteComponent() {
  const [auth] = useAtom(authAtom);
  if (auth === null || !auth?.token) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="h-screen w-full relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {auth !== null && (
        <>
          <Navbar
            user={auth.username}
            type={true}
            avatar={auth.username.slice(0, 2)}
          />
          <div className="h-full flex">
            <aside className="w-90 backdrop-blur-xl bg-white/5 border-r border-white/10 ">
              <AppSidebar />
            </aside>
            <main className="flex-1">
              <Outlet />
            </main>
          </div>
        </>
      )}
    </div>
  );
}
