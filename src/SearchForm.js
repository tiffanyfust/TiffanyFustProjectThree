function SearchForm() {
    return (
        <form>
                <div className="inputFields">
                  <div className="inputField">
                    <label htmlFor="mealType">Meal Type:</label>
                    <select id="mealType" name="mealType">
                      <option value="placeholder">Select option</option>
                      <option value="Breakfast">Breakfast</option>
                      <option value="Lunch">Lunch</option>
                      <option value="Dinner">Dinner</option>
                      <option value="Snack">Snack</option>
                      <option value="Teatime">Teatime</option>
                    </select>
                  </div>
                  <div className="inputField">
                    <label htmlFor="cuisineType">Cuisine Type:</label>
                    <select name="cuisineType">
                      <option value="placeholder">Select option</option>
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