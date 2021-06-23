const RecipeResults = (props) => {
    
    return (
        <ul>
            {props.recipeObj.map(recipeObj => {
                return (
                    <li>
                        <div className="imgContainer">
                            <img src={recipeObj.recipe.image} alt={recipeObj.recipe.label}/>
                        </div>
                        <div>
                            <h2>{recipeObj.recipe.label}</h2>
                            <p>{recipeObj.recipe.yield}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
}

export default RecipeResults;