import "./styles.css";
import { useState } from "react";
import States from "./Components/States";
export default function App() {
  const [color, setColor] = useState(false);
  const handle = () => {
    setColor(!color);
  };
  return (
    <div className={color ? "dark" : "light"}>
      <div className="container">
        <div className="sub">
          <div className="header">
            <h1 className={color ? "h1black" : "h1white"}> Overreacted</h1>
            <button onClick={handle}>Toggle </button>
          </div>

          <div className="lower">
            <States
              hfirst="The Wet Codebase"
              pfirst="Sunday 4th, 2020 11 min read "
              psecond="Come waste your time with me"
              h2color={color}
              pcolor={color}
            />
            <States
              hfirst="Goodby Clean code"
              pfirst="Friday 22th, 2019 5 min read "
              psecond="Let clean code guide you then let it go"
              h2color={color}
              pcolor={color}
            />
            <States
              hfirst="My Decade in review"
              pfirst="Sunday 11th, 2018 5 min read "
              psecond="A personal refelaction"
              h2color={color}
              pcolor={color}
            />
            <States
              hfirst="Why Are The React Team Principles"
              pfirst="Thursday 4th, 2015 5 min read "
              psecond=""
              h2color={color}
              pcolor={color}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
