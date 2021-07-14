const RecipeResults = (props) => {

// displaying API results
    return (
        <ul>
            {props.recipeObj.map((recipeObj) => {
                return (
                    <li>
                        <div className="imgContainer">
                            <img src={recipeObj.recipe.image} alt={recipeObj.recipe.label}/>
                        </div>
                        <div className="recipeText">
                            <h2>{recipeObj.recipe.label}</h2>
                            <div className="recipeDetails">
                                <p>Serving Size: {recipeObj.recipe.yield}</p>
                                <p>Prep Time: {recipeObj.recipe.totalTime === 0 ? 'n/a' : `${recipeObj.recipe.totalTime} mins`}</p>
                            </div>
                        </div>
                        <a href={recipeObj.recipe.url} target="_blank" rel="noreferrer">Find Recipe Here <span>→</span></a>
                    </li>
                )
            })}
        </ul>
    );
}

export default RecipeResults;