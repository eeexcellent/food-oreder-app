import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Cart />
        <Header />
        <Menu />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
