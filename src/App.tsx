import { useState } from "react";
import "./App.css";

interface MeroProps {
  children: string;
  collapsedNumWords?: number;
  expandButtonText?: string;
  collapsedButtonText?: string;
  buttonColor?: string;
  expanded?: boolean;
  className?: string;
}
function App() {
  return (
    <>
      <TextExpander
        collapsedNumWords={20}
        collapsedButtonText="Show Less"
        expandButtonText="Show More"
        buttonColor="#ff6622"
        expanded={false}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sit
        quidem exercitationem doloribus delectus aspernatur numquam voluptatem,
        fugit nemo veritatis incidunt nobis voluptates expedita eveniet? Saepe,
        error ducimus. Eaque, laboriosam?
      </TextExpander>
      <TextExpander
        collapsedNumWords={20}
        collapsedButtonText="Show Less"
        expandButtonText="Show More"
        buttonColor="#1f09cd"
        expanded={true}
      >
        Consectetur adipisicing elit. Ratione sit quidem exercitationem
        doloribus delectus aspernatur numquam voluptatem, fugit nemo ver Lorem
        ipsum dolor sit amet itatis incidunt nobis voluptates expedita eveniet?
        Saepe, error ducimus. Eaque, laboriosam?
      </TextExpander>
      <TextExpander expanded={false} className="box">
        67
      </TextExpander>
    </>
  );
}

function TextExpander({
  children,
  className,
  collapsedButtonText = "Show Less",
  expandButtonText = "Show More",
  buttonColor = "#ff6622",
  expanded = false,
}: MeroProps) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  console.log(children);
  const displayOkText = isExpanded
    ? children
    : children.split(" ").slice(0, 4).join(" ");
  // const displayOkText = isExpanded
  //   ? children
  //   : "Hello this is collapsed text...";

  const buttonStyle = {
    border: "none",
    background: "none",
    fontStyle: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };
  return (
    <div className={className}>
      <span>{displayOkText}</span>
      <button onClick={() => setIsExpanded(!isExpanded)} style={buttonStyle}>
        {isExpanded ? collapsedButtonText : expandButtonText}
      </button>
    </div>
  );
}
export default App;
