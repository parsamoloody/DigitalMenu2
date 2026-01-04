"use client";

import { UserProps } from "@/packages/package-core/types";
import { createContext, ReactNode, useContext } from "react";

const UserContext = createContext<UserProps | null>(null);
interface UserProviderProps {
  currentUser: UserProps | null;
  children: ReactNode;
}
export function UserProvider({ currentUser, children }: UserProviderProps) {
  return (
    <UserContext.Provider value={currentUser}>
      {children}
    </UserContext.Provider>
  );
}

export function useCurrentUser() {
  return useContext(UserContext);
}
