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
- Modal
- Accordion
- Dropdown
- Tooltip

## Autor
Volodymyr Haran