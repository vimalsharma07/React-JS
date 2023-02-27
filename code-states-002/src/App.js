import "./styles.css";
import { useState } from "react";
export default function App() {
  const [change, setChange] = useState(false);
  const handleChange = () => {
    setChange(!change);
  };
  const heading1 = "Markdown Preview";
  const heading2 = ["This is header 1", "#This is header 1"];

  const heading3 = ["This is header 2", "## This is header 2"];

  const heading4 = ["This is header 3", "### This is header 3"];
  const image =
    "data:image/jpeg;base64,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";
  return (
    <div className="container">
      <div className="subcontainer">
        <h1 className={change ? "nochangechange" : "change"}>{heading1}</h1>
        <h2 className={change ? "h2firstchange" : "h2firstnochange"}>
          {" "}
          {heading2[0]}{" "}
        </h2>
        <h2 className={change ? "h2secondchange" : "h2secondnochange"}>
          {" "}
          {heading2[1]}{" "}
        </h2>
        <h3 className={change ? "h2firstchange" : "h2firstnochange"}>
          {" "}
          {heading3[0]}
        </h3>
        <h3 className={change ? "h2secondchange" : "h2secondnochange"}>
          {heading3[1]}{" "}
        </h3>
        <h4 className={change ? "h2firstchange" : "h2firstnochange"}>
          {" "}
          {heading4[0]}{" "}
        </h4>
        <h4 className={change ? "h2secondchange" : "h2secondnochange"}>
          {" "}
          {heading4[1]}{" "}
        </h4>
        <button
          onClick={handleChange}
          className={change ? "nobtnchange" : "btnchange"}
        >
          this is some code{" "}
        </button>{" "}
        <br />
        <img
          src={image}
          alt=" some error occured its cant visible please press the button agagin"
          className={change ? "h2firstchange" : "h2firstnochange"}
        />
        <p className={change ? "h2secondchange" : "h2secondnochange"}>
          {" "}
          there is some error occured please press button againg{" "}
        </p>
        <p> This is some image </p>
        <p>list 1 </p>
        <p> list 2</p>
        <p> list 3</p>
      </div>
    </div>
  );
}
