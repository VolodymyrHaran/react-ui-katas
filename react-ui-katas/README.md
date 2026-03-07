# react-ui-katas

Small React + TypeScript exercises to practice building reusable UI components.

This repository contains small UI component implementations used to practice core React concepts such as state management, component composition, keyboard accessibility, and controlled/uncontrolled patterns.

## Tech stack

- React
- TypeScript
- Vite
- SWC

## Components

### Counter

Simple counter component used to practice React state.

Features:
- `useState`
- event handling
- component re-rendering

---

### Tabs

Reusable Tabs component with multiple features implemented to simulate real-world UI behavior.

Features:

- switch tabs by clicking
- active tab styling
- disabled tabs support
- default active tab
- keyboard navigation
- skip disabled tabs when navigating
- controlled and uncontrolled modes

Keyboard navigation:

- ArrowRight → next tab
- ArrowLeft → previous tab

Example usage:

```tsx
<Tabs
  tabs={[
    { label: "Profile", content: <p>Profile content</p> },
    { label: "Settings", content: <p>Settings content</p> },
    { label: "Billing", content: <p>Billing content</p>, disabled: true }
  ]}
/>

const [activeTab, setActiveTab] = useState(0);

<Tabs
  tabs={tabs}
  activeIndex={activeTab}
  onChange={setActiveTab}
/>
```
### Modal

Reusable modal component.

Features:
- controlled open/close state
- children support
- close button
- close on overlay click
- close on Escape key

```tsx
const [isModalOpen, setIsModalOpen] = useState(false);
<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}>
    <h2>My modal</h2>
    <p>Hello from modal</p>
</Modal>
```
### Accordion

Expandable sections component used to practice dynamic UI state.

Features:

- toggle sections open / closed
- support multiple open sections
- optional single mode
- default open sections
- state-driven UI

Example usage:

```tsx
<Accordion
  items={[
    {
      title: "Section 1",
      content: <p>Section 1 content</p>
    },
    {
      title: "Section 2",
      content: <p>Section 2 content</p>
    },
    {
      title: "Section 3",
      content: <p>Section 3 content</p>
    }
  ]}
/>
```
Single mode:
```tsx
<Accordion
  items={items}
  multiple={false}
/>
```

## Getting started
Install dependencies:
```bash
npm install
```
Start development server:
```bash
npm run dev
```
Open in browser:
```bash
http://localhost:5173
```

## Learning goals
This repository is used to practice:
- React component architecture
- TypeScript typing
- state management
- reusable UI components
- keyboard accessibility
- controlled vs uncontrolled components
Future components planned:
- Dropdown
- Tooltip

### Autor
Volodymyr Haran