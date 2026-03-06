import { useState } from "react";

type Tab = {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
};

type TabsProps = {
  tabs: Tab[];
  defaultIndex?: number;
};

function getNextEnabledIndex(tabs: Tab[], currentIndex: number, direction: 1 | -1) {
    let nextIndex = currentIndex;
    do {
        nextIndex = (nextIndex + direction + tabs.length) % tabs.length;
    } while (tabs[nextIndex].disabled);
    return nextIndex;
}


export function Tabs({ tabs, defaultIndex = 0 }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
        setActiveIndex((prev) => getNextEnabledIndex(tabs, prev, 1)); // Move right
    }

    if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => getNextEnabledIndex(tabs, prev, -1)); // Move left
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }} 
        onKeyDown={handleKeyDown} tabIndex={defaultIndex}>
        {tabs.map((tab, index) => (
          <button 
            key={index} 
            onClick={() => setActiveIndex(index)} 
            disabled={tab.disabled}
            style={{fontWeight: activeIndex === index ? "bold" : "normal", 
            borderBottom: activeIndex === index ? "2px solid black" : "none",
            background: activeIndex === index ? "lightgray" : "none"
          }}>
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}