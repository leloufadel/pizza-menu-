import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Pizza />
      <Menu />
    </div>
  );
  function Menu() {
    return (
      <main className="menu">
        <h2> Our Menu</h2>
        <Pizza
          name="Pizza Spinaci"
          ingredient="Tomatto, mozorela, spinish"
          photoName="pizzas/spinaci.jpg"
          price="10.00"
        />
           <Pizza
          name="Pizza Salamino "
          ingredient="Tomatto, mozorela, spinish"
          photoName="pizzas/salamino.jpg"
          price="15.00"
        />
      </main>
    );
  }
  function Pizza(props) {
    return (
      <>
        {" "}
        <img src={props.photoName} alt ={props.name}/>
        <h2>${props.name}</h2>
        <p>${props.ingredient}</p>
        <p>${props.price}</p>

      </>
    );
  }
}

export default App;
