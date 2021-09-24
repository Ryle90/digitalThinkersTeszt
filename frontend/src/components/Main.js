import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Alert } from 'react-bootstrap';

import { cocktailEndpoint } from '../utils/endpoint';

import Header from './Header';
import Cocktail from './Cocktail';

export default function Main() {
    const [cocktailList, setCocktailList] = useState([]);
    const [errorMessageFromBackend, setErrorMessageFromBackend] = useState('');

    const { search } = useLocation()

    /*eslint-disable*/
    useEffect(() => {
        getCocktailList()
    }, [])
    /*eslint-enable*/

    async function getCocktailList() {


        const result = await fetch(`${cocktailEndpoint}${search}`, {
            method: 'GET'
        })

        const response = await result.json();

        if (result.ok) {
            setCocktailList(response)
        } else {
            setErrorMessageFromBackend(response.message)
        }

    }

    return (
        <>
            <Header
                getCocktailList={getCocktailList}
            ></Header>
            <main>
                {errorMessageFromBackend !== '' &&
                    <Alert
                        variant="danger"
                    >
                        {errorMessageFromBackend}
                    </Alert>
                }
                <div className="cocktail-container">
                    {cocktailList.map((cocktail) => (
                        <Cocktail
                            key={cocktail.id}
                            name={cocktail.name}
                            cocktailId={cocktail.id}
                            ingredientsList={cocktail.ingredientsList}
                            meausermentList={cocktail.meausermentList}
                            prepare={cocktail.prepare}
                            picture={cocktail.picture}
                        />
                    ))
                    }                    
                </div>
            </main>
        </>
    )
}