import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getLocalSession, getLocalUsers, signInLocal, signOutLocal, signUpLocal, updateLocalUser, deleteLocalUser } from "../lib/localAuth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => getLocalSession());
  const [users, setUsers] = useState(() => getLocalUsers());

  useEffect(() => {
    const handleStorage = () => {
      setSession(getLocalSession());
      setUsers(getLocalUsers());
    };
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
      users,
      updateUser: (id, changes) => {
        const updatedUser = updateLocalUser(id, changes);
        setUsers(getLocalUsers());
        if (session?.user?.id === id) {
          const nextSession = { user: { ...session.user, ...{ user_metadata: { ...session.user.user_metadata, first_name: updatedUser.firstName, last_name: updatedUser.lastName, full_name: `${updatedUser.firstName} ${updatedUser.lastName}`, profile_role: updatedUser.role } } }, profile: updatedUser };
          localStorage.setItem("wrja.local.session", JSON.stringify(nextSession));
          setSession(nextSession);
        }
        return updatedUser;
      },
      deleteUser: (id) => {
        deleteLocalUser(id);
        setUsers(getLocalUsers());
      },
      signIn: (email, password) => {
        const nextSession = signInLocal(email, password);
        setSession(nextSession);
        return nextSession;
      },
      signUp: (userDetails) => signUpLocal(userDetails),
      createUser: (userDetails) => {
        signUpLocal(userDetails);
        setUsers(getLocalUsers());
      },
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
