# getElementById is Findout one single element by id . its very fast 
 getElementsByClassName Findout much element by class name .
querySelector is Findout first matching eliment 
querySelectorAll  Findout all matching eliment 


# How do you create and insert a new element into the DOM?
const div = document.createElement("div");
div.innerText = "Hello World";
const container = document.getElementById("container");
container.appendChild(div);


# What is Event Bubbling? And how does it work?
Event bubbling is the default behavior for most DOM events and is the foundation of techniques like event delegation.
Button (target)
   ↑
Div (parent)
   ↑
Body
   ↑
Document 
This is how it works.

# What is Event Delegation in JavaScript? Why is it useful?
add one listener to a parent.
dynamically added elements new li later will also work automatically


# What is the difference between preventDefault() and stopPropagation() methods?
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();   // stops page reload
  console.log("Form handled with JavaScript");
});


document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation();  // parent won't get the click
  console.log("Child clicked");
});








