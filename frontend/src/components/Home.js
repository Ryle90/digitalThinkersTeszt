import { useEffect } from "react";
import { useHistory } from "react-router"

//This component is empty, because this only represents home page
export default function Home () {
    const history = useHistory();

    /*eslint-disable*/
    useEffect(() => {
        history.push('/cocktail')
    }, [])
    /*eslint-enable*/

    return (
        <></>
    )
}