const backendURL = process.env.REACT_APP_BACKEND_BASE_URL;

const cocktailEndpoint = `${backendURL}/api/cocktail`;

//If we had more endpoint, could exported all endpoint from one file
export { cocktailEndpoint }