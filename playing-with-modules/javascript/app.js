import {red as danger} from "./modules/red.js";
import {blue as primary} from "./modules/blue.js";
import {green as success} from "./modules/green.js";

const webApplication = {
    dan: danger,
    pri: primary,
    suc: success,
    initialize: function() {
        console.log(Object.keys(this.dan))
        this.dan.changeColor();
        this.pri.changeColor();
        this.suc.changeColor();
    } 
};

webApplication.initialize();