import plantList from "../data/plantList.js";
import "../styles/ShoppingList.css";
import Plantitem from "./Plantitem.js";

export default function ShoppingList() {

  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );
  const data = true;
  return (
    <div>
      <h1 className= {data ? "title-green" : "title-red"} >Liste des plantes</h1>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({id, name, cover, light, water}) => (
          <Plantitem
            key={id}
            id={id}
            name={name}
            cover={cover}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  );
}
