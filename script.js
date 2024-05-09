let clickCounter = 0;

function changeColor(){
  clickCounter++;
  const button = document.getElementById("buttonChanger");
  console.log(button.innerText);

  let color = Math.round(Math.random() * 4);
  console.log(color);

  switch (color){
    case 0:
      button.style.backgroundColor = "lightcoral";
      break;

    case 1:
      button.style.backgroundColor = "lightgreen";
      break;

    case 2:
      button.style.backgroundColor = "fuchsia";
      break;

    case 3:
      button.style.backgroundColor = "orangered";
      break;

    case 4:
      button.style.backgroundColor = "lightseagreen";
      break;

    default:
      alert('Not this time');
  }

  console.log(`Contador de Clicks: ${clickCounter}`);
}

function clicks(){
  const button = document.getElementById("buttonChanger");
  const text = document.getElementById("reward");
  button.innerText = "Nice!!";
  text.innerHTML = "Now that you learned how to change the colors, choose the color you want"
  setTimeout(reward, 4000);
}

function reward(){
  const text = document.getElementById("reward");
  text.innerHTML = "<input id = 'colorInput' placeholder = 'Choose your color' >";

  const colorInput = document.getElementById('colorInput');

  colorInput.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
      const button = document.getElementById("buttonChanger");
      button.style.backgroundColor = colorInput.value;
    }
  })
}