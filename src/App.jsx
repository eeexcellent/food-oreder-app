import logoImg from "../public/logo.jpg";

function App() {
  return (
    <>
      <div id="main-header">
        <div id="title">
          <img src={logoImg} alt="Plate with vine and spoons" />
          <h1>ReactFood</h1>
        </div>

        <button className="text-button">Cart</button>
      </div>
    </>
  );
}

export default App;
