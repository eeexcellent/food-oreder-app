export default function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "USD",
            }).format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
          <p className="meal-item-actions">
            <button className="button">Add to Cart</button>
          </p>
        </div>
      </article>
    </li>
  );
}