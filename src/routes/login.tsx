import { useLogin, type LoginForm } from "@/api/auth.api";

import Login from "@/components/templates/Login";
import { createFileRoute } from "@tanstack/react-router";
import { useCallback } from "react";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const login = useLogin();
  const navigate = Route.useNavigate();
  const handleSubmit = useCallback(
    (data: LoginForm) => {
      login.mutate(data, {
        onSuccess: () => {
          navigate({ to: "/", replace: true });
        },
      });
    },
    [login, navigate]
  );
  return (
    <>
      <Login handleSubmit={handleSubmit} />
    </>
  );
}
