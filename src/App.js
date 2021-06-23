import {useEffect, useState} from 'react';
import RecipeResults from './RecipeResults';
import SearchForm from './SearchForm';
import axios from 'axios';
import './App.css';


function App() {


  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <div className="logo">
            <h2>Eat This</h2>
          </div>
          <section className="headerContent">
            <div className="headerText">
              <h1>Has finding meal ideas become a chore?</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar turpis in mi porttitor, eu dictum felis semper. Nullam finibus volutpat volutpat. Nam ut risus non libero condimentum rhoncus. Curabitur sed ante tristique, elementum purus et, venenatis libero. Nam at imperdiet dui. Nulla lacinia ipsum sed orci sollicitudin, maximus vulputate lorem lobortis.</p>
            </div>
            <div className="formBackground">
              <SearchForm/>
            </div>
          </section>
          <div class="headerIcon">
            <i className="fas fa-arrow-circle-down fa-3x"></i>
          </div>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <ul id="recipeResults">
            <RecipeResults/>
          </ul>
        </div>
      </main>

      <footer>
        <p>Created by <a href="https://tiffanyfust.com/" title="Tiffany Fust's Portfolio Site" target="_blank">Tiffany Fust</a> at <a href="https://junocollege.com/" title="The Juno College Website" target="_blank">Juno College</a></p>
      </footer>
    </div>
  );
}

export default App;
