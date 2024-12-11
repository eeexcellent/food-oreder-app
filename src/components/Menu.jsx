import { useEffect, useState } from "react";
import { fetchMeals } from "../http.js";

import Error from "./Error.jsx";
import MenuItem from "./MenuItem";

export default function Menu() {
  const [meals, setMeals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchMealsAsync() {
      setIsFetching(true);

      try {
        const meals = await fetchMeals();
        setMeals(meals);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch meals from menu.",
        });
      }

      setIsFetching(false);
    }

    fetchMealsAsync();
  }, []);

  if (isFetching) {
    return (
      <div id="meals">
        <h2>Preparing the menu...</h2>
      </div>
    );
  }

  console.log(error, isFetching);

  return (
    <div id="meals">
      {error && <Error error={error} description="Please try again later." />}
      {meals.map((meal) => (
        <MenuItem key={meal.id} item={meal} />
      ))}
    </div>
  );
}
