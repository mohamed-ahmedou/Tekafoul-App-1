import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import $ from 'jquery';


import "./assets/css/main.css"
import "./assets/css/flaticon.css"

import "./assets/css/magnific-popup.css"
import "./assets/css/jquery-ui.min.css"

import "./assets/css/bootstrap.min.css"
import "./assets/css/all.min.css"
import "./assets/css/animate.css"
import "./assets/css/nice-select.css"
import "./assets/css/owl.min.css"

// js 
import "./assets/js/jquery-3.3.1.min.js"
import "./assets/js/jquery-ui.min.js"
import "./assets/js/modernizr-3.6.0.min.js"
import "./assets/js/plugins.js"
import "./assets/js/bootstrap.min.js"
import "./assets/js/magnific-popup.min.js"
// import "./assets/js/wow.min.js"
import "./assets/js/waypoints.js"
import "./assets/js/nice-select.js"
import "./assets/js/owl.min.js"
import "./assets/js/counterup.min.js"
import "./assets/js/paroller.js"
import "./assets/js/main.js"
document.addEventListener('DOMContentLoaded', function () {
  const wow = new WOW();
  wow.init();
});
// Initialize WOW.js
// import $ from 'jquery';
import WOW from 'wow.js';
import Test from './views/Test.jsx';
import SpinnerComponent from './views/spinner.jsx';
import Home from './views/Home.jsx';
import { BrowserRouter } from 'react-router-dom';
// const wow = new WOW();
// wow.init();
const LazyApp = lazy(() => import("./App"));
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
<BrowserRouter>
  <Suspense fallback={<SpinnerComponent/>}>
    {/* <LazyApp />  */}
<Home/>
    </Suspense>
    </BrowserRouter>
  


)
