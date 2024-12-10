import { useEffect, useState } from "react";
import Cart from "./components/Cart.jsx";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import { fetchMeals } from "./http.js";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";

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
    <UserProgressContextProvider>
      <CartContextProvider>
        <Cart />
        <Header />
        <Menu
          isLoading={isFetching}
          loadingText="Preparing the menu..."
          meals={meals}
        />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
