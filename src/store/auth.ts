import { atomWithStorage } from "jotai/utils";

export type Auth = {
  token: string;
  id: number;
  email: string;
  username: string;
};

export const authAtom = atomWithStorage<Auth | null>(
  "authentication",
  null,
  undefined,
  {
    getOnInit: true,
  }
);
