const h1 = document.querySelector(".hello:first-child h1");


const handleMouse = () =>{
  change = h1.style.color;
  h1.innerText = "hello world";
  h1.style.color = "red";

}

const handlebackground = () => {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor == "yellow"){
    h1.innerText = "hello javascript";
    newColor = "tomato";
  }
  else{
    newColor = "yellow";
  }
  h1.style.color = newColor;
}




h1.addEventListener("mouseenter", handleMouse);
h1.addEventListener("click", handlebackground);
h1.addEventListener("mouseenter", handleMouseEnter);
