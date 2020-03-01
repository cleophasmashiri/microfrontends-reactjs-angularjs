import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './root.component.js'

const reactLifeCycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Home,
    domElementGetter
}); 

function domElementGetter() {
    return document.getElementById('home');
}

export const bootstrap = [reactLifeCycles.bootstrap];

export const mount = [reactLifeCycles.mount];

export const unmount = [reactLifeCycles.unmount];

