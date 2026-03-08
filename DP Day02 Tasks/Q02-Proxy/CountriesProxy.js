import { CountiresService } from "./CountriesService.js";

export class countriesProxy {
    constructor() {
        this.service = new CountiresService();
        this.cashe = null;
    }

    GetCountires() {
        if (!this.cashe) {
            this.cashe = this.service.getCounties();

        }
        else {
            console.log("Return cashed countries");
        }

        return this.cashe;
    }
}