
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const divOne = document.querySelector(".one");
const divTwo = document.querySelector(".two");
const divThree = document.querySelector(".three");

btn1.addEventListener("mouseover", function() {
  divOne.style.display = "block";
  divOne.style.backgroundColor = "white";
  divTwo.style.display = "none";
  divThree.style.display = "none";
});

btn2.addEventListener("mouseover", function() {
  divOne.style.display = "none";
  divTwo.style.display = "block";
  divTwo.style.backgroundColor = "white";
  divThree.style.display = "none";
});

btn3.addEventListener("mouseover", function() {
  divOne.style.display = "none";
  divTwo.style.display = "none";
  divThree.style.display = "block";
  divThree.style.backgroundColor = "white";
});
btn1.addEventListener("dblclick", function() {
  divOne.style.display = "block";
  divOne.style.backgroundColor = "black";
  divTwo.style.display = "none";
  divThree.style.display = "none";
});

btn2.addEventListener("dblclick", function() {
  divOne.style.display = "none";
  divTwo.style.display = "block";
  divTwo.style.backgroundColor = "black";
  divThree.style.display = "none";
});

btn3.addEventListener("dblclick", function() {
  divOne.style.display = "none";
  divTwo.style.display = "none";
  divThree.style.display = "block";
  divThree.style.backgroundColor = "black";
});