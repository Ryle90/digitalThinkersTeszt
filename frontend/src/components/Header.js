import { useState } from 'react';
import { useHistory } from 'react-router';
import { Button, FormControl } from 'react-bootstrap';

export default function Header() {
    const history = useHistory();
    const [ cocktailToSearch, setCocktailToSearch ] = useState('');

    function handleChange(event) {
        setCocktailToSearch(event.target.value)
    }

    function searchCocktail() {
        if(cocktailToSearch !== '') {
            history.push(`/cocktail?name=${cocktailToSearch}`);
            window.location.reload();
        }
    }

    function getRandomCocktail() {
        history.push(`/cocktail`);
        window.location.reload();
    }

    return (
        <header>
            <Button 
                variant="success"
                onClick={getRandomCocktail}
            >
                Get an other random cocktail
            </Button>
            <FormControl
                placeholder="Search cocktail by name"
                name="cocktailName"
                value={cocktailToSearch}
                onChange={handleChange}
            />
            <Button 
                variant="success"
                onClick={searchCocktail}
            >
                Search cocktail by name
            </Button>
        </header>
    )
}