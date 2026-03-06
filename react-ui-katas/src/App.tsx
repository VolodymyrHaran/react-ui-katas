import { Counter } from "./components/Counter";
import { Tabs } from "./components/Tabs";

function App() {
  const tabs = [
    { label: "Profile", content: <p>Profile content</p> },
    { label: "Settings", content: <p>Settings content</p>, disabled: true },
    { label: "Billing", content: <p>Billing content</p> }
  ];

  return (
    <div>
      <h1>React UI Katas</h1>

      <Counter />

      <Tabs tabs={tabs} defaultIndex={2} />
    </div>
  );
}

export default App;