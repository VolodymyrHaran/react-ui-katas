import { useState } from "react";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

export function Tabs({ tabs }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => setActiveIndex(index)}>
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