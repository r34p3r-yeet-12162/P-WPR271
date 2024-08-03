//
function handleSubmission() {
  /* JS has an API that allows us to interact with HTML elements on a page */
  //for the element with the ID username,
  //let usernameElem = document.getElementById('username');
  let usernameElem = document.querySelector("#username"); // selects a specific element

  //let formElem = document.getElementsByClassName('form')
  let formElem = document.querySelectorAll(".form"); // selects a bunch of elements

  //DOM allows us to control the behaviour of elements

  //suppose we want to retrieve a value
  let username = usernameElem.value;

  // if the password is empty, we want to change the border of the input
  if (username.length < 2) {
    // usernameElem.setAttribute("style", "border: 1px solid red");
    // usernameElem.setAttribute("class", "invalid");
    usernameElem.style.border = "1px solid red";
    // look at classList
  }
  // what if there is a valid value?

  //we will use a modal pop up to display the value
  alert(`The username is ${username}`);

  // SUppose we want to read from an element
  let paragraphElem = document.getElementById("output");
  alert(paragraphElem.innerHTML);

  // .. and to write to an element
  paragraphElem.innerHTML = "new text";

  // look into innerHTML vs innerText

  // SUppose we want to write to an element
}

/* What are the various ways of selecting elements
   // > getElementByID; getElelememtsByTagName, .... */
// > getElementByID; getElelememtsByTagName, .... */

/* Collections of Nodes: iteration, createing elements dynamically*/
