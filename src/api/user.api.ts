import api from "@/lib/api";
import { queryOptions } from "@tanstack/react-query";

export function getUserlist({ search }: { search: string }) {
  return queryOptions({
    queryKey: ["users", search],
    queryFn: async () => {
      const response = await api.get("users/userlist", {
        params: {
          ...(search ? { search } : {}),
        },
      });
      return response.data;
    },
  });
}
