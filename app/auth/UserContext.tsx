'use client'
import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  isChecked: boolean;
  updateState: (field: string, newValue: string | boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface UserContextProps {
  children: ReactNode;
}

export const UserContext: React.FC<UserContextProps> = ({ children }) => {
  const [userState, setUserState] = useState<AuthContextType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isChecked: false,
    updateState: (field: string, newValue: string | boolean) => {
      setUserState((prev) => ({ ...prev, [field]: newValue }));
    },
  });

  return (
    <AuthContext.Provider value={userState}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
