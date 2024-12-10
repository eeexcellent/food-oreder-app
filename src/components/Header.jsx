import logoImg from "../../public/logo.jpg";
import CartButton from "./CartButton";

export default function Header() {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logoImg} alt="Plate with vine and spoons" />
        <h1>ReactFood</h1>
      </div>

      <CartButton />
    </div>
  );
}
