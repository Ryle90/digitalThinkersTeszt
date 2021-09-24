import { useEffect } from 'react';
import { useLocation } from 'react-router';

import { cocktailEndpoint } from '../utils/endpoint';

import Header from './Header';

export default function Main() {

    const { search } = useLocation()

    useEffect(() => {
        getCocktailList()
    }, [])

    async function getCocktailList() {

        const result = await fetch(`${cocktailEndpoint}${search}`, {
            method: 'GET'
        })

        if (result.ok) {
            const response = await result.json();
            console.dir(response)
        }
    }

    return (
        <>
            <Header
                getCocktailList={getCocktailList}
            ></Header>
            <main>
                <h1>Hello</h1>      

            </main>
        </>
    )
}