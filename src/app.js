/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateExcuse();
};

function generateExcuse() {
  const who = ["My dog", "My grandma", "My cat", "My spirit"];
  const action = ["ate", "sat on", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car", "my computer"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const getRandomIndex = array => Math.floor(Math.random() * array.length);

  const [randomWho, randomAction, randomWhat, randomWhen] = [
    getRandomIndex(who),
    getRandomIndex(action),
    getRandomIndex(what),
    getRandomIndex(when)
  ];

  return `${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;
}
