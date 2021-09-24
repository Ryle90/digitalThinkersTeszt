export default function Cocktail({
    cocktailId,
    name,
    ingredientsList,
    meausermentList,
    prepare,
    picture
}) {
    return (
        <div className="cocktail">
            <img src={picture} alt="cocktail" />
            <p className="cocktail-name">{name}</p>
            <div className="ingredients-and-measurements">
                <div className="ingredient-container">
                    <p className="ingredient-label">Ingredients:</p>
                    {ingredientsList.map((ingredient, index) => (
                        <p 
                            key={`${cocktailId}${index}i`}
                            className="ingredient-list" 
                        >
                            {ingredient}
                        </p>
                    ))
                    }
                </div>
                <div className="measurement-container">
                    <p className="measurement-label">Measurments:</p>
                    {meausermentList.map((meauserment, index) => (
                        <p 
                            key={`${cocktailId}${index}m`}
                            className="measurement-list"
                        >
                            {meauserment}
                        </p>
                    ))
                    }
                </div>
            </div>
            <p className="prepare-label">Prepare:</p>
            <p className="prepare-description">{prepare}</p>
        </div>
    )
}