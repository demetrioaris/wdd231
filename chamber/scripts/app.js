import { initializeCommon } from "./modules/common.mjs";
//import { initializeDirectory } from "chamber/scripts/modules/directory.mjs";
//import { initializeWeather } from './weather.mjs';
//import { initializeHome } from './home.mjs';

initializeCommon();

//initializeHome();
//initializeDirectory();
//initializeWeather();
const currentPage = window.location.pathname;

if (currentPage.includes('directory')) {
    import('./modules/directory.mjs').then(module => {
        module.initializeDirectory();
    });
} else if (currentPage.includes('home')) {
    import('./modules/home.js').then(module => {
        module.initializeHome();
    });
}