import {registerApplication, start} from 'single-spa';

registerApplication('navbar', () => import('src/navbar/navbar.app.js').then(mod => mod.navbar), () => true);
registerApplication('home', () => import('src/home/home.app.js'), (location) => location.pathname === '' || location.pathname === '/' || location.pathname.startsWith('/home'));
registerApplication('angularJS', () => import('src/angularJS/angularJS.js'), (location) => location.pathname.startsWith('/angularJS'));


start();


