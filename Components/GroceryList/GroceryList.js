import GroceryListItem from "../GroceryListItem/GroceryListItem";
import "./GroceryList.css";

export default function App({ data }) {
  const totalCost = data.reduce((acc, el) => {
    if (el.isPurchased) {
      return acc + parseInt(el.price);
    } else {
      return acc;
    }
  }, 0);

  return (
    <div className="grocery-list">
      <ul>
        {data.map((item, i) => {
          if (item.isPurchased) {
            return <GroceryListItem key={i} itemData={item} />;
          }
        })}
      </ul>

      <div>
        <span>Total: </span>
        <span>${totalCost}</span>
      </div>
    </div>
  );
}
