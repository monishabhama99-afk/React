import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import SubmitInput from "./Components/Task1.jsx";
import ButtonInput from "./Components/Task2.jsx";
import PassingValue from "./Components/Task3.jsx";
import MultipleEvents from "./Components/Task4.jsx";
import FocusInput from "./Components/Task5.jsx";
import Employee from "./Components/Task6.jsx";
import Product from "./Components/Task7.jsx";
import Customer from "./Components/Task8.jsx";


function App() {
  return (

    <div>

      <h1> React </h1>

      <hr />
      <SubmitInput />

      <hr />
      <ButtonInput />

      <hr />
      <PassingValue />

      <hr />
      <MultipleEvents />

      <hr />
      <FocusInput />

      <hr />
      <Employee />

      <hr />
      <Product />

      <hr />
      <Customer />
      
    </div>

  );
}

export default App;
