import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import { fetchMeals } from "./http.js";

function App() {
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

  return (
    <>
      <Header />
      <Menu
        isLoading={isFetching}
        loadingText="Preparing the menu..."
        meals={meals}
        onAdd={null} // Todo
      />
    </>
  );
}

export default App;
