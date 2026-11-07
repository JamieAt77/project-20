export default function ItemList({ items }) {
  if (!items.length) return <p className="empty">No items yet.</p>;
  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
