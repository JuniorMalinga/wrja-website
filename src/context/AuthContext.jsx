import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getLocalSession, signInLocal, signOutLocal, signUpLocal } from "../lib/localAuth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => getLocalSession());

  useEffect(() => {
    const handleStorage = () => setSession(getLocalSession());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const value = useMemo(() => {
    const profile = session?.profile ?? null;
    return {
      session,
      user: session?.user ?? null,
      profile,
      displayName: profile?.firstName || session?.user?.user_metadata?.full_name?.split(" ")[0] || "there",
      loading: false,
      isAdmin: profile?.role === "admin",
      signIn: (email, password) => {
        const nextSession = signInLocal(email, password);
        setSession(nextSession);
        return nextSession;
      },
      signUp: (userDetails) => signUpLocal(userDetails),
      signOut: () => {
        signOutLocal();
        setSession(null);
      },
    };
  }, [session]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
