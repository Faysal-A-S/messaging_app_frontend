import { useLogin } from "@/api/auth.api";
import Login from "@/components/templates/Login";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const login =useLogin()
  return (
    <>
      <Login />
    </>
  );
}
