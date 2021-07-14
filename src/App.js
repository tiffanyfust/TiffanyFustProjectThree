import {useEffect, useState} from 'react';
import RecipeResults from './RecipeResults';
import SearchForm from './SearchForm';
import axios from 'axios';
import './App.css';


function App() {
// defining states
  const [allRecipes, setAllRecipes] = useState([]);
  const [mealType, setMealType] = useState("Lunch");
  const [cuisineType, setCuisineType] = useState("American");

// setting API params based on user selection
  const findRecipes = (e, mealSelection, cuisineSelection) => {
    e.preventDefault();
    setMealType(mealSelection);
    setCuisineType(cuisineSelection);
  }

// get recipes from API
  useEffect(() => {
    axios({
      url: "https://api.edamam.com/api/recipes/v2",
      method: "GET",
      dataResponse: "json",
      params: {
        app_id: "27934d8b",
        app_key: "4a9e2f43cc72130eed5795df71599e7c",
        type: "public",
        from: 1,
        "to": 30,
        mealType: mealType,
        cuisineType: cuisineType,
      },
    }).then((response) => {
      const hits = response.data.hits;
      setAllRecipes(hits);
    })
  }, [mealType, cuisineType])


// display content to page
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <div className="logo">
            <h2 className="logo">Mealspiration</h2>
          </div>
          <section className="headerContent">
            <div className="headerText">
              <h1>Has finding meal ideas become a chore?</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar turpis in mi porttitor, eu dictum felis semper. Nullam finibus volutpat volutpat. Nam ut risus non libero condimentum rhoncus. Curabitur sed ante tristique, elementum purus et, venenatis libero. Nam at imperdiet dui. Nulla lacinia ipsum sed orci sollicitudin, maximus vulputate lorem lobortis.</p>
            </div>
            <div className="formBackground">
              <SearchForm findRecipes={findRecipes}/>
            </div>
          </section>
          <div className="headerIcon">
            <i className="fas fa-arrow-circle-down fa-3x"></i>
          </div>
        </div>
      </header>
      <main>
        <section className="recipeResults">
          <div className="wrapper">
            <RecipeResults recipeObj={allRecipes}/>
          </div>
        </section>
      </main>

      <footer>
        <p>Created by<a href="https://tiffanyfust.com/" title="Tiffany Fust's Portfolio Site" target="_blank" rel="noreferrer">Tiffany Fust</a>at<a href="https://junocollege.com/" title="The Juno College Website" target="_blank" rel="noreferrer">Juno College</a></p>
      </footer>
    </div>
  );
}

export default App;
