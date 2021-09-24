import cocktailService from "../services/cocktailService.js";

const cocktailController = {
    async getCocktail(req, res, next) {
        const { name } = req.query;
        
        try {
            const cocktailList = await cocktailService.getCocktail(name);
            res.json(cocktailList);
        } catch (error) {
            next(error)
        }
    }
}

export default cocktailController;