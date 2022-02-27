// function Clicked(){
//     console.log ('The button was clicked')
// }

// 2nd function

function togglehide(){
    let btn = document.getElementById("btn");
    let para = document.getElementById("para");
    if (para.style.display != 'none') {
        para.style.display ='none'
    }
 else (para.style.display = 'block')
       para.style.color ="blue"
       para.style.fontSize = "26px"

}

// third function

function myFunction(p1,p2){
    return (p1*p2)
}
  document.getElementById("demo").innerHTML = myFunction(20, 3);