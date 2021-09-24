import fetch from 'node-fetch';

import ValidationError from '../utils/ValidationError.js';

const cocktailService = {
    apiUrl: `https://www.thecocktaildb.com/api/json/v1/${process.env.API_KEY}`,

    async getCocktail(cocktailName) {
        let endpoint;

        if (!cocktailName) {
            endpoint = `${this.apiUrl}/random.php`
        } else {
            endpoint = `${this.apiUrl}/search.php?s=${cocktailName}`
        }        
        
        const resultFromApi = await fetch(endpoint, {
            method: 'GET'
        })
        
        const responseFromApi = await resultFromApi.json();

        if (responseFromApi.drinks === null) {
            throw new ValidationError('This cocktail is not found')
        } else {
            const drinkList = this.processResponseFromApi(responseFromApi);
            return drinkList
        }
    },

    processResponseFromApi(responseFromApi) {
        const drinkList = [];

        responseFromApi.drinks.forEach((drink) => {
            const id = drink.idDrink;
            const name = drink.strDrink;
            const ingredientsList = [];
            const meausermentList = [];
            const prepare = drink.strInstructions; 
            const picture = drink.strDrinkThumb
    
            Object.entries(drink).forEach(([key, value]) => {
                if (key.includes('Ingredient') && value !== null) {
                    ingredientsList.push(value)
                }
    
                if (key.includes('Measure') && value !== null) {
                    meausermentList.push(value)
                }
            })

            drinkList.push({
                id,
                name,
                ingredientsList,
                meausermentList,
                prepare,
                picture
            })

        })

        return drinkList
    }
}

export default cocktailService;