import {useState} from 'react';

function SearchForm(props) {
    const [mealSelect, setMealSelect] = useState("placeholder");
    const [cuisineSelect, setCuisineSelect] = useState("placeholder");

    const updateMealFilter = (e) => {
        setMealSelect(e.target.value);
    }

    const updateCuisineFilter = (e) => {
        setCuisineSelect(e.target.value);
    }

    return (
        <form onSubmit = {(e) => {props.findRecipes(mealSelect, cuisineSelect)}}>
                <div className="inputFields">
                  <div className="inputField">
                    <label htmlFor="mealType">Meal Type:</label>
                    <select id="mealType" name="mealType" value={mealSelect} onChange={updateMealFilter}>
                      <option value="placeholder" disabled>Select option</option>
                      <option value="Breakfast">Breakfast</option>
                      <option value="Lunch">Lunch</option>
                      <option value="Dinner">Dinner</option>
                      <option value="Snack">Snack</option>
                      <option value="Teatime">Teatime</option>
                    </select>
                  </div>
                  <div className="inputField">
                    <label htmlFor="cuisineType">Cuisine Type:</label>
                    <select id="cuisineType" name="cuisineType" value={cuisineSelect} onChange={updateCuisineFilter}>
                      <option value="placeholder" disabled>Select option</option>
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
                  </div>
                </div>

                <button type="submit" name="submit" value="submit">Find my next Meal</button>
              </form>
    )
}

export default SearchForm;