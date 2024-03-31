import { ReactNode, createContext, useContext, useState, FC } from "react";

// Define a type for your context
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Define a type for the props of the ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

// Create a context with initial values
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// Custom hook to consume the context
export const useTheme = () => useContext(ThemeContext);

// Provider component to wrap your app
export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
