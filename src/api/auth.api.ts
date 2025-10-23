import api from "@/lib/api";

import { authAtom } from "@/store/auth";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai/react";
import { RESET } from "jotai/utils";
import { toast } from "sonner";

type LoginResponse = {
  success: boolean;
  message: string;
  result: {
    access_token: string;
    email: string;
    username: string;
    id: number;
  };
};
export type LoginForm = {
  username: string;
  password: string;
};

type AxiosErrorResponse = {
  message: string;
};
export function useLogin() {
  const [, setAuth] = useAtom(authAtom);
  return useMutation<
    LoginResponse,
    AxiosErrorResponse,
    LoginForm,
    { toastId: number | string }
  >({
    mutationFn: async (data) => {
      const response = await api.post("users/login", data);
      return response.data;
    },
    onMutate: () => {
      const toastId = toast.loading("logging in..");
      return { toastId };
    },
    onSuccess: (data, _, context) => {
      toast.success("Logged in", { id: context?.toastId });
      setAuth({
        id: data.result.id,
        email: data.result.email,
        username: data.result.username,
        token: data.result.access_token,
      });
    },
    onError(error, _, context) {
      toast.error(error.message || "Login failed", { id: context?.toastId });
    },
  });
}

export function useLogout() {
  const [, setAuth] = useAtom(authAtom);
  return useMutation({
    mutationFn: async () => {
      await api.post("/logout");
    },
    onMutate: () => {
      setAuth(RESET);
      toast.success("logged out");
    },
    onError: () => {
      toast.error("logout failed");
    },
  });
}
