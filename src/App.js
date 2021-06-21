import {useEffect, useState} from 'react';
import './App.css';
import RecipeResults from './RecipeResults';


function App() {


  return (
    <div className="App">
      <header>
        <div>
          <h2>Eat This</h2>
        </div>
        <h1>Has finding meal ideas become a chore?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar turpis in mi porttitor, eu dictum felis semper. Nullam finibus volutpat volutpat. Nam ut risus non libero condimentum rhoncus. Curabitur sed ante tristique, elementum purus et, venenatis libero. Nam at imperdiet dui. Nulla lacinia ipsum sed orci sollicitudin, maximus vulputate lorem lobortis.</p>

        <form>
          <label for="mealType">Meal Type:</label>
          <select id="mealType" name="mealType">
            <option value="selE">Select option</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Teatime">Teatime</option>
          </select>

          <label for="cuisineType">Cuisine Type:</label>
          <select name="cuisineType">
            <option value="selectOption">Select option</option>
            <option value="American">American</option>
            <option value="Asian">Asian</option>
            <option value="British">British</option>
            <option value="Caribbean">Caribbean</option>
            <option value="Central Europe">Central Europe</option>
            <option value="Chinese">Chinese</option>
            <option value="Eastern Europe">Eastern Europe</option>
            <option value="French">French</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Kosher">Kosher</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Mexican">Mexican</option>
            <option value="Middle Eastern">Middle Eastern</option>
            <option value="Nordic">Nordic</option>
            <option value="South American">South American</option>
            <option value="South East Asian">South East Asian</option>
          </select>

          <button type="submit" name="submit" value="submit">Find my next Meal</button>
        </form>
      </header>
      <main>
        <ul id="recipeResults">
          <RecipeResults/>
        </ul>
      </main>

      <footer>
        <p>Created by <a href="https://tiffanyfust.com/" title="Tiffany Fust's Portfolio Site" target="_blank">Tiffany Fust</a> at <a href="https://junocollege.com/" title="The Juno College Website" target="_blank">Juno College</a></p>
      </footer>
    </div>
  );
}

export default App;
