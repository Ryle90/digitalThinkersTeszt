import { Button, FormControl } from 'react-bootstrap';

export default function Header() {
    return (
        <header>
            <Button variant="success">Get an other random cocktail</Button>
            <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
            <Button variant="success">Search cocktail by name</Button>
        </header>
    )
}