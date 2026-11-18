import React from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🏝️Far Away!🧳</h1>;
}
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
function Form() {
  const [Description, setDescription] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    initialItems.push({
      id: Date.now(),
      description: e.target[1].value,
      quantity: e.target[0].value,
      packed: false,
    });
    e.target.reset();
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 🤩</h3>
      <select>
        {numbers.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function Item({ description, quantity, packed }) {
  return (
    <li className="item">
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {description} ({quantity})
      </span>
      <button>❌</button>
    </li>
  );
}
function PackingList() {
  return (
    <ul className="list">
      <h3>
        {initialItems.map((item) => (
          <Item
            key={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
          />
        ))}
      </h3>
    </ul>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>
        <h3>you have X items in your list, and you already packed X(X%) ✅ </h3>
      </em>
    </footer>
  );
}
