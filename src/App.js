import "./App.css";
import React from "react";
import "./index.css";

const pizzaData  = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];




// function Pizza(props) {
//   console.log(props)
//   return (
//     <>
//       <img src={props.pizzaObj.photoName} alt ={props.pizzaObj.name}/>
//       <h2>{props.pizzaObj.name}</h2>
//       <p>{props.pizzaObj.ingredients}</p>
//       <p>{props.pizzaObj.price}</p>
//     </>
//   );
// }

// function Menu() {
//   return (
//     <main className="menu">
//       <h2>Our Menu</h2>
//       <ul className="pizzas">
//         {pizzaData.map((pizza) => (
//           <Pizza key={pizza.name} pizzaObj={pizza} />
//         ))}
//       </ul>
//     </main>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello React</h1>
//       <Menu />
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div className="container">
      <h1>Hello React</h1>
      <Menu />
      <Footer />
    </div>
  );
  function Menu() {
    return (
      <main className="menu">
        <h2>Our Menu</h2>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza key={pizza.name} pizzaObj={pizza} />
          ))}
        </ul>
      </main>
    );
  }
  
  function Pizza({pizzaObj}) {
    
   if(pizzaObj.soldOut) return null

    return (
      <li>
        <img src={pizzaObj.photoName} alt ={pizzaObj.name}/>
        <h2>${pizzaObj.name}</h2>
        <p>${pizzaObj.ingredients}</p>
        <p>${pizzaObj.price}</p>

      </li>
    );
  }
  
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
    
      {
        isOpen ? (
          <Order  closeHours = {closeHour} openHours = {openHour}/>
        ) : ( 
          <p>We are closed. Please visit us between 11am and 10pm.</p>  
        ) 
      }
  
  </footer>
  );
}

function Order ({closeHours, openHours }){
  return (
    <div className="order">
            <p>We're open between {openHours}:00 Am and {closeHours}:00 pm. Come visit us or order online!</p>
            <p>{new Date().toLocaleTimeString()}</p>
          </div>
  )
}



export default App;
