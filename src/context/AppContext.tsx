import React, { createContext, useContext, useEffect, useState } from "react";
import { User, Wholesaler } from "../types";
import { wholesalers } from "../data/mockData";
import { useToast } from "@/hooks/use-toast";

type AppContextType = {
  user: User | null;
  isAuthenticated: boolean;
  favorites: string[];
  toggleFavorite: (wholesalerId: string) => void;
  login: () => void;
  logout: () => void;
  purchasePremium: () => void;
  getFavoriteWholesalers: () => Wholesaler[];
};

const initialUser: User = {
  id: "user-1",
  name: "Guest User",
  email: "guest@example.com",
  hasPaidAccess: false,
  favorites: [],
};

const AppContext = createContext<AppContextType>({
  user: null,
  isAuthenticated: false,
  favorites: [],
  toggleFavorite: () => {},
  login: () => {},
  logout: () => {},
  purchasePremium: () => {},
  getFavoriteWholesalers: () => [],
});

export const useApp = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const { toast } = useToast();

  // Check local storage for user data on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("gikombaUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
      setFavorites(parsedUser.favorites || []);
    }
  }, []);

  const toggleFavorite = (wholesalerId: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to save favorites",
        variant: "destructive",
      });
      return;
    }

    let newFavorites: string[];
    if (favorites.includes(wholesalerId)) {
      newFavorites = favorites.filter((id) => id !== wholesalerId);
      toast({
        title: "Removed from favorites",
        description: "Wholesaler removed from your favorites",
      });
    } else {
      newFavorites = [...favorites, wholesalerId];
      toast({
        title: "Added to favorites",
        description: "Wholesaler added to your favorites",
      });
    }

    setFavorites(newFavorites);

    // Update user in state and localStorage
    if (user) {
      const updatedUser = { ...user, favorites: newFavorites };
      setUser(updatedUser);
      localStorage.setItem("gikombaUser", JSON.stringify(updatedUser));
    }
  };

  const login = () => {
    // For demo purposes, we're using a mock user
    const loggedInUser = { ...initialUser, favorites };
    setUser(loggedInUser);
    setIsAuthenticated(true);
    localStorage.setItem("gikombaUser", JSON.stringify(loggedInUser));
    toast({
      title: "Login Successful",
      description: "Welcome to Gikomba Connect!",
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    // Keep favorites in state but remove from localStorage
    localStorage.removeItem("gikombaUser");
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
    });
  };

  const purchasePremium = () => {
    if (!user) return;
    
    const updatedUser = { ...user, hasPaidAccess: true };
    setUser(updatedUser);
    localStorage.setItem("gikombaUser", JSON.stringify(updatedUser));
    toast({
      title: "Premium Access Activated",
      description: "You now have access to all premium features!",
    });
  };

  const getFavoriteWholesalers = () => {
    return wholesalers.filter((wholesaler) => favorites.includes(wholesaler.id));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        isAuthenticated,
        favorites,
        toggleFavorite,
        login,
        logout,
        purchasePremium,
        getFavoriteWholesalers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
