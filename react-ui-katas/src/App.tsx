import { Counter } from "./components/Counter";
import { Tabs } from "./components/Tabs";
import { useState } from "react";
function App() {
  const tabs = [
    { label: "Profile", content: <p>Profile content</p> },
    { label: "Settings", content: <p>Settings content</p>, disabled: true },
    { label: "Billing", content: <p>Billing content</p> }
  ];
  const [tab, setTab] = useState(1);
  
  return (
    <div>
      <h1>React UI Katas</h1>

      <Counter />

      <Tabs tabs={tabs} defaultIndex={2} />

      <Tabs
        tabs={tabs}
        activeIndex={tab}
        onChange={setTab}
      />
    </div>
  );
}

export default App;