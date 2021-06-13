// alertbox popout hunxa
// function what(){
// var a= 12;
// var b=13;
// var c= a/b;
// alert(c)
// }
// what()

// Click ma change hune wala
// function changeHeading() {
//     var h1element = document.getElementById('mh');
//    h1element.firstChild.nodeValue = 'New heading';

//    var hm=document.getElementById('hm');
//    hm.firstChild.nodeValue='Fake page'; 
// }
// function myload() {
//     var element = document.getElementById('mh');
//     element.addEventListener('click', changeHeading);
// }
// document.addEventListener('DOMContentLoaded',myload);
// Name alert ma display hunxa
// function showName(){
//     var name = document.getElementById('txt');
//     alert(text.value);
// }
// function formDisplay(){
//     var sub= document.getElementById('submit');
//     sub.addEventListener('click', showName);
// }
// document.addEventListener('DOMContentLoaded', formDisplay);
// function myload(){
//     var ja = document.getElementById('ja')
//     ja.addEventListener
//     ja.style.backgroundColor = 'red';
//     ja.style.borderRadius = '50px';
//     ja.style.color='white';
//     ja.style.fontFamily = 'Verdana, Helvetica, Sans-serif';
//     // document.addEventListener('click',myload);
// }   
// document.addEventListener('DOMContentLoaded',myload);
// ----------------button move garna----------------------
// var circle; 

// function key(){
//     console.log(event.keyCode);
//     circle= document.getElementById('golo');
//     upvalue = parseInt(circle.offsetLeft);
//     run = parseInt(circle.offsetTop);
//     if(event.keyCode == 37)
//     {
//         circle.style.left = upvalue - 10 +'px';    
//     } 
//     if(event.keyCode==39)
//     {
//         console.log(upvalue)
//         circle.style.left = upvalue + 10 +'px';  
//     }
//     if(event.keyCode==38)
//     {
//         console.log(run)
//         circle.style.top = run - 10 +'px';  
//     }
//     if(event.keyCode==40)
//     {
//         console.log(run)
//         circle.style.top = run + 10 +'px';  
//     }

// }



// function myLoadEvent(){
//     var circle = document.getElementById('golo');
    
//     document.addEventListener('keydown', key);
// }
// document.addEventListener('DOMContentLoaded',myLoadEvent);
//  ------------css wala js bata + click ma alert  -------------
function changeColor(){
    var one=document.getElementsByClassName('circle');
    
    one[0].style.backgroundColor='green';
    one[0].style.height='400px';
    one[0].style.width='50%';
    one[0].style.fontSize='9cm';
    //one[0].style.float='left';
    one[0].addEventListener('click', clickHead);

    one[1].style.backgroundColor='yellow';
    one[1].style.height='400px';
    one[1].style.width='50%';
    one[1].style.fontSize='9cm';
    one[1].style.float='right';
    one[1].addEventListener('click', clickHead);

    one[2].style.backgroundColor='blue';
    one[2].style.height='300px';
    one[2].style.width='50%';
    one[2].style.fontSize='6cm';

    one[2].addEventListener('click', clickHead);
}
function clickHead(){
        
        alert(this.id);
        
}
document.addEventListener('DOMContentLoaded', changeColor);
