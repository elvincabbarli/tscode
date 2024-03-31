import { FC } from "react";
import Person from "./components/Person";
import { ThemedComponent } from "./components/Theme";
import { useTheme } from "./context/ThemeContext";
import { HairColor } from "./enums/HairColor";

const App: FC = () => {
  const { theme } = useTheme();
  return (
    <body className={theme === "light" ? "light" : "dark"}>
      <div className="inner">
        <Person
          hairColor={HairColor.blonde}
          name="Elvin"
          age={17}
          email="fsfsdf@gmail.com"
          id={7}
        />
        <ThemedComponent />
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>

        <button className="btn-new">BTN New</button>
        <button className="btn-old">BTN Old</button>
      </div>
    </body>
  );
};

export default App;
