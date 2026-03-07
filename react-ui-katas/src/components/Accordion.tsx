import { useState } from "react";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenIndexes?: number[];
  multiple?: boolean;
  onChange?: (indexes: number[]) => void;
};

export function Accordion({ items, defaultOpenIndexes, multiple = true, onChange }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>(defaultOpenIndexes || []);
  
  function toggleItem(currentIndex: number) {
    let newIndexes: number[];

    if (multiple) {
        newIndexes = openIndexes.includes(currentIndex)
        ? openIndexes.filter((i) => i !== currentIndex)
        : [...openIndexes, currentIndex];
    } else {
        newIndexes = openIndexes.includes(currentIndex) ? [] : [currentIndex];
    }
        setOpenIndexes(newIndexes);
        onChange?.(newIndexes);
  }
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggleItem(index)}>
            {openIndexes.includes(index) ? "[-]" : "[+]"}
            {item.title}
          </button>

          {openIndexes.includes(index) && (
            <div style={{background: "green"}}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}