// img = document.querySelector('img');
// images = ['asset/image/iphone6.jpg','asset/image/flower-buds.jpg','asset/image/search-girl.jpg', 'asset/image/welcome-guy.jpg'];
//  let i = 0;
//  function next(){
//     if(i ==  images.length - 1){
//         i = 0;
//     }else{
//         i++;
//     }
//     img.src = images[i];
//  }
// function prev(){
//     if (i == 0){
//         i = images.length -1;  
//     }else{
//         i--;
//     }
//     img.src= images[i];

// }

// btn = document.getElementById('btn');

// btn.addEventListener('click', addition)

// function addition(){
//     let first = document.getElementById('first').value
//     let second = document.getElementById('second').value

//     let total = parseInt(first) + parseInt(second)
//     if (total !== NaN){
//         document.querySelector('#answer').innerHTML = total
//     }
//     if(btn.classList.contains('styl2')){
//         btn.classList.remove('styl2')
//         btn.classList.add('styl1')
//     }else{
//         btn.classList.remove('styl1')
//         btn.classList.add('styl2')   
//     }

    
// }


btn = document.querySelector('.Heyo');
btn.addEventListener('mouseover', opener)
btn.addEventListener('click', clicker)
btn.addEventListener('mouseout', closer)




let p = document.querySelector('#sideOpener')
function opener(){
    p.innerHTML += "mouse overed<br>"
    
}

function clicker(){
    p.innerHTML += "clicked<br>"
    
}

function closer(){
    p.innerHTML += "closed<br>"   
}


window.addEventListener('scroll',  scroll)

function scroll (){
    document.getElementById('lorem').innerHTML += "scrolled<br>"
}

function calling(){
    h2.
}












