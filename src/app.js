import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// las variables tienen nombres claros//
// se aplico la indentacion//
//El codigo es legible//
window.onload = function() {
let first= "Ooh no!!!";

  let who = ['The cat ', 'My grandma  ', 'The mailman  ', 'My bird  '];
  let action = ['ate  ', 'peed  ', 'crushed  ', 'broke  '];
  let what = ['my homework  ', 'my pc  ', 'the car  '];
  let when = ['before the class  ', 'when I was sleeping  ', 'while I was exercising  ', 'during my lunch  ', 'while I was praying  ']; 

  let rdm1 = Math.floor(Math.random() * who.length);
  let rdm2 = Math.floor(Math.random() * action.length);
  let rdm3 = Math.floor(Math.random() * what.length);
  let rdm4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML = first + who[rdm1] + action[rdm2] + what[rdm3] + when[rdm4];
  
}
