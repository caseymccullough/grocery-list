import "./styles.css";
import GroceryList from "../Components/GroceryList/GroceryList";

const groceries = [
  {
    item: "Flour",
    brand: "Golden Start",
    price: "12",
    quantity: "1lb",
    isPurchased: true
  },
  {
    item: "Salt",
    brand: "Diamond",
    price: "2",
    quantity: "1lb",
    isPurchased: true
  },
  {
    item: "Eggs",
    brand: "Maple Orchards",
    price: "3",
    quantity: "1 dz",
    isPurchased: true
  },
  {
    item: "Milk",
    brand: "Horizon Organic",
    price: "4",
    quantity: "1 gal",
    isPurchased: false
  },
  {
    item: "Chocolate Chips",
    brand: "Hershey's",
    price: "6",
    quantity: ".5 lb",
    isPurchased: true
  }
];

export default function App() {
  return (
    <div className="App">
      <h1>MY GROCERIES</h1>
      <GroceryList data={groceries} />
    </div>
  );
}
