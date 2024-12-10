import MenuItem from "./MenuItem";

export default function Menu({ isLoading, loadingText, meals }) {
  if (isLoading) {
    return <h1>{loadingText}</h1>;
  }

  return (
    <div id="meals">
      {meals.map((meal) => (
        <MenuItem key={meal.id} item={meal} />
      ))}
    </div>
  );
}
