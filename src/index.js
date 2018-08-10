import React from "react";
import ReactDOM from "react-dom";

// include bootstrap 4 js files
import 'bootstrap';

// include bootstrap 4 cc files
import './styles.scss';
import 'bootstrap/scss/bootstrap.scss';

import Main from "./components/Main";

ReactDOM.render( <Main/> , document.getElementById('app'));
