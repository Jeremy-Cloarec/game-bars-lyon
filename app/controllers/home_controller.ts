import { Request, Response, NextFunction } from "express";
import HomeService from "../services/home_service";

const homeService = new HomeService();

const homeController = {
    getHomeController : async (req: Request , res: Response, next: NextFunction) => {
        try {
            const getHomeService = homeService.getHomeService();
            res.send(`<h1>${getHomeService}</h1>`)
        } catch (err) {
            res.send("Une erreur est survenue.");
            console.error(`Errors: ${err}`);
        }
    }
};

export default homeController;
