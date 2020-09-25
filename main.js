//OK 1. CREATE A "CLOSE" BUTTON and append it to each list item

// create a collection getting elements by tag <li>
var myCollectionList = document.getElementsByTagName("li");

// iterate trough those <li> using "length" property 
var i;
for (i = 0; i < myCollectionList.length; i++) {
  // create a node <span> using "createElement" DOM method
  var span = document.createElement("SPAN");
  
  // create some text node for the span using "createTextNode" DOM method
  var txt = document.createTextNode("\u00D7");

  // set the class of the node <span> using className property
  span.className = "close";

  // append the text node to the node <span> using the "appendChild" method
  // appendChild method appends a node as the LAST child of another node
  // insertBefore method inserts a node as the FIRST child
  span.appendChild(txt);

  // append the <span> to the items in the collection
  myCollectionList[i].appendChild(span);
}


//OK 2. CLICK ON (one of the recently created) close button to hide the current list item

// create a collection with the specified class name
var close = document.getElementsByClassName("close");

// iterate through that collection
var i;
for(i = 0; i < close.length; i++) {

  // for an event occurs when a user clicks on  
  close[i].onclick = function() {

    // the event is to create a parent <div> for "this" (elements of class "close")
    var div = this.parentElement;

    // set that <div> to not be displayed
    div.style.display = "none";
  }
}


// 3. ADD A "CHECKED" SYMBOL when clicking on a list item

// create the list by selecting the first element that matches <ul> in the document
// for selecting all of them we use querySelectorAll() method. 
var list = document.querySelector('ul');

// attach a event handler (a click) to the list
// addEventListener(event, function, useCApture)
list.addEventListener('click', function(ev) {
  
  // IF the tagname of the element that triggers the event is equal to "LI"..
  if (ev.target.tagName === "LI") {

    // THEN activate the class name to 'checked' (toggle) 
    // and add that class (classList) 
    // to the target element <li> (target)
    ev.target.classList.toggle('checked');
  }

  // useCapture (boolean for capturing or bubbling)
}, false);


// 4. CREATE A NEW LIST ITEM when clicking on the "Add button"

// create the function
function newElement() {

  // create an empty <li> element with createElement() method
  var li = document.createElement("LI");

  // take the value of the text field (tasks) and add it to a collection
  var inputValue = document.getElementById("myInput").value;

  // take that collection and make it a text node
  var t = document.createTextNode(inputValue);

  // append that text node to the empty <li> element
  li.appendChild(t);

  // if the inputvalue is empty (the user didn't feed some information)
  if (inputValue === '') {
    // then alert:
    alert("You must write something!");
    // BUT if the input value is not empty...
  } else {
    // append that <li> to <myUl>
    document.getElementById('myUl').appendChild(li);
  }

  // I DON'T KNOW WHAT THIS DOES
  document.getElementById('myInput').value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");

  // sets class of the span to "close"
  span.className = "close";

  // append txt to <span>
  span.appendChild(txt);

  // append span to <li>
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
};