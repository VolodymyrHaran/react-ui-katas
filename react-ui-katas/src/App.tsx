import { Counter } from "./components/Counter";
import { Tabs } from "./components/Tabs";

function App() {
  const tabs = [
    {
      label: "Tab 1",
      content: <p>This is tab 1 content</p>,
    },
    {
      label: "Tab 2",
      content: <p>This is tab 2 content</p>,
    },
    {
      label: "Tab 3",
      content: <p>This is tab 3 content</p>,
    },
  ];

  return (
    <div>
      <h1>React UI Katas</h1>

      <Counter />

      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;