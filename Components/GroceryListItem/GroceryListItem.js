export default function App({ itemData }) {
  return (
    <li className="App">
      <span>
        {itemData.item} - {itemData.brand}
      </span>
      <span>{itemData.quantity}</span>
      <span>${itemData.price}</span>
    </li>
  );
}
