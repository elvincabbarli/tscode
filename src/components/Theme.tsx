import { useTheme } from "../context/ThemeContext";
import { FC } from "react";

export const ThemedComponent: FC = () => {
    const { theme, toggleTheme } = useTheme();
  
    return (
      <div>
        <div>Current Theme: {theme}</div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  };