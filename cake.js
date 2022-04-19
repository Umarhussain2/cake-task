var num1=300 ,num2=100, num3=200, num4=250, num5=350;
var total = 0
let i=0


document.getElementById("myBtn").onclick = displayCoco; 
function displayCoco() {
total +=num1
  document.getElementById("demo").innerHTML = "CHOCLATE-----300";  
  var  box = document.getElementById("box")
  var layer = document.createElement('div')
  layer.id
  layer.style.backgroundColor = 'brown'
  layer.innerHTML = ''

  if(i==0)
  {
  layer.style.width= '150px'
  }
  else if(i==1)
  {
  layer.style.width= '130px'    
  }
  else if(i==2)
  {
  layer.style.width= '110px'    
  }
  else if(i==3)
  {
  layer.style.width= '90px'    
  }
  else if(i==4)
  {
  layer.style.width= '70px'}
  i++
  layer.style.height = " 10px";
  layer.style.border = " 1px solid blue";
  layer.style.margin = 'auto'

  box.prepend(layer)
}




document.getElementById("myBtn1").onclick = displaystaw;

function displaystaw() {
total += num2
  document.getElementById("demo1").innerHTML = "Stawberry-----100";
  var  box = document.getElementById("box")
  var layer = document.createElement('div')
  layer.style.backgroundColor = 'pink'
  layer.innerHTML = ''

  if(i==0)
  {
  layer.style.width= '150px'
  }
  else if(i==1)
  {
  layer.style.width= '130px'    
  }
  else if(i==2)
  {
  layer.style.width= '110px'    
  }
  else if(i==3)
  {
  layer.style.width= '90px'    
  }
  else if(i==4)
  {
  layer.style.width= '70px'}
  i++
  layer.style.height = " 10px";
  layer.style.border = " 1px solid blue";
  layer.style.margin = "auto"

  box.prepend(layer) 
}


document.getElementById("myBtn2").onclick = displaybutter;

function displaybutter() {
  total += num3
  document.getElementById("demo2").innerHTML = "butter-----200";
  var  box = document.getElementById("box")
  var layer = document.createElement('div')
  layer.style.backgroundColor = 'gold'
  layer.innerHTML = ''
 
  if(i==0)
  {
  layer.style.width= '150px'
  }
  else if(i==1)
  {
  layer.style.width= '130px'    
  }
  else if(i==2)
  {
  layer.style.width= '110px'    
  }
  else if(i==3)
  {
  layer.style.width= '90px'    
  }
  else if(i==4)
  {
  layer.style.width= '70px'}
  i++
  layer.style.height = " 10px";
  layer.style.border = " 1px solid blue";
  layer.style.alignItems = "center";
  layer.style.center = " center";
  layer.style.margin = "auto"



  box.prepend(layer) 
}

document.getElementById("myBtn3").onclick = displayvan;
function displayvan() {
total += num4
  document.getElementById("demo3").innerHTML = "vanila-----250";
    var  box = document.getElementById("box")
  var layer = document.createElement('div')
  layer.style.backgroundColor = 'white'
  layer.innerHTML = ''

  if(i==0)
  {
  layer.style.width= '150px'
  }
  else if(i==1)
  {
  layer.style.width= '130px'    
  }
  else if(i==2)
  {
  layer.style.width= '110px'    
  }
  else if(i==3)
  {
  layer.style.width= '90px'    
  }
  else if(i==4)
  {
  layer.style.width= '70px'}
  i++
  layer.style.height = " 10px";
  layer.style.border = " 1px solid blue";
  layer.style.margin ="auto"

  box.prepend(layer) 
}
  


  document.getElementById("myBtn4").onclick = displayred;
function displayred() {
  total  += num5
  document.getElementById("demo4").innerHTML = "redvelvet-----250";
    var  box = document.getElementById("box")
  var layer = document.createElement('div')
  layer.style.backgroundColor = 'red'
  layer.innerHTML = ''
  if(i==0)
  {
  layer.style.width= '150px'
  }
  else if(i==1)
  {
  layer.style.width= '130px'    
  }
  else if(i==2)
  {
  layer.style.width= '110px'    
  }
  else if(i==3)
  {
  layer.style.width= '90px'    
  }
  else if(i==4)
  {
  layer.style.width= '70px'}
  i++
 
  layer.style.height = " 10px";
  layer.style.border = " 1px solid blue";
layer.style.margin = "auto"
  box.prepend(layer) 
}

document.getElementById("myBtn5").onclick = displayimg;
function displayimg() {
    document.getElementById("demo5").innerHTML = "TOTAL AMOUNT" + total;
    var img=new Image()
    img.src="https://images.vexels.com/media/users/3/194267/isolated/lists/231a81e767b5455c37cd7e1a2968a0d4-birthday-candles-set.png"
  var layer = document.createElement('div')

  layer.style.margin = "auto"
 layer.style.width = " 50px";
  layer.style.height = " 10px";
  layer.style.padding = "5px";
  layer.style.border = " 1px solid blue";
    img.style.width="50px";
    img.style.margin="auto";
    img.style.position="absolute";
    img.style.top="160px";
    img.style.left="623px"
    img.style.po
 
  box.prepend(img) 
}