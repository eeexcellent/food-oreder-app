import MealItem from "./MealItem";

export default function Menu({ isLoading, loadingText, meals, onAdd }) {
  if (isLoading) {
    return <h1>{loadingText}</h1>;
  }

  return (
    <div id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </div>
  );
}
