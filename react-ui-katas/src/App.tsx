import { useState } from "react";
import { Counter } from "./components/Counter";
import { Tabs } from "./components/Tabs";
import { Modal } from "./components/Modal";
import { Accordion } from "./components/Accordion";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accordionItems = [
  {
    title: "Section 1",
    content: <p>This is section 1 content</p>,
  },
  {
    title: "Section 2",
    content: <p>This is section 2 content</p>,
  },
  {
    title: "Section 3",
    content: <p>This is section 3 content</p>,
  },];

  const tabs = [
    {
      label: "Tab 1",
      content: <p>This is tab 1 content</p>,
    },
    {
      label: "Tab 2",
      content: <p>This is tab 2 content</p>,
      disabled: true,
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

      <Tabs tabs={tabs} defaultIndex={0} />

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setIsModalOpen(true)}>
          Open modal
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <h2>My modal</h2>
        <p>Hello from modal</p>
      </Modal>

      <Accordion items={accordionItems} defaultOpenIndexes={[1]} multiple={false} />
    </div>
  );
}

export default App;