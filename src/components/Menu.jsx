import MenuItem from "./MenuItem";

export default function Menu({ isLoading, loadingText, meals }) {
  if (isLoading) {
    return (
      <div id="meals">
        <h2>{loadingText}</h2>
      </div>
    );
  }

  return (
    <div id="meals">
      {meals.map((meal) => (
        <MenuItem key={meal.id} item={meal} />
      ))}
    </div>
  );
}
