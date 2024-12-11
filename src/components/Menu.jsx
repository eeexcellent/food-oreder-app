import useHttp from "../hooks/useHttp.js";

import Error from "./Error.jsx";
import MenuItem from "./MenuItem";

const requestUrl = "http://localhost:3000/meals";
const requestConfig = {};

export default function Menu() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp(requestUrl, requestConfig, []);

  if (isLoading) {
    return <h2 className="text-center">Preparing the menu...</h2>;
  }

  if (error) {
    return (
      <Error
        error={error}
        description="Failed to fetch meals. Please try again later."
      />
    );
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MenuItem key={meal.id} item={meal} />
      ))}
    </ul>
  );
}
