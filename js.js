// // let prop = document.getElementsByClassName("show")
// // console.log(prop)
// let botton = document.getElementById("but")

// botton.addEventListener('click', changeValue)

// function changeValue(){
//     let prop = document.querySelectorAll('.show')
//     for (let i = 0; i < prop.length; i++){
//         prop[i].innerHTML = "Bluescript Academy"
//         prop[i].style.color = "red"
//     }
// }

// // console.log(prop)
// // prop.innerHTML = "Bluescript"
// // document.getElementById
// // document.getElementsByClassName
// // document.querySelector()
// // document.querySelectorAll

// // names = ["sam", "stephen", "jumoke"]

// // console.log(names[0])


// prop = [ "<p>Hi</p>", "<span>Hello</span>"]


// prop[0].innerHTML = "Acadey"
// prop[1].innerHTML = "Ax"


// document.getElementby




// function grumpus(){
//     console.log("Stop playing");
//     console.log("Stop playing");
// }
// function name(firstName){
//     console.log('FirstName is: ${firstName}');

// } 

// How to Querydocument

// btn = document.querySelector('button')
// btn.addEventListener('click', jumoke)
// text1 = document.getElementById('click')
// img = document.querySelector('img')
// // let count = 1
// // function jumoke(){
// //     if (count % 2 === 0){
// //         text1.innerText = "I am a developer"
// //         text1.style.color = 'blue'
// //         img.src = "asset/image/desktop.jpg"
// //         btn.innerText = "clicked"
// //         btn.style.color = 'blue'
// //     }
// //     else{
// //         text1.innerText = "I am a Software engineer"
// //         text1.style.color = 'red'
// //         img.src = "https://media1.popsugar-assets.com/files/thumbor/WzoHIkBF3Rs60VYPFr2urGemAwU/0x224:2826x3050/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2020/02/11/894/n/1922398/87f6bb525e430e7bd44e40.22278576_/i/Drake.jpg"
// //         btn.innerText = "clicked"
// //         btn.style.color = 'yellow'
// //     }
// //     count++;
// // }
// function jumoke(){
//     if (text1.innerText == "I am a Software engineer"){
//         text1.innerText = "I am a developer"
//         text1.style.color = 'blue'
//         img.src = "asset/image/desktop.jpg"
//         btn.innerText = "clicked"
//         btn.style.color = 'blue'
//     }
//     else{
//         text1.innerText = "I am a Software engineer"
//         text1.style.color = 'red'
//         img.src = "https://media1.popsugar-assets.com/files/thumbor/WzoHIkBF3Rs60VYPFr2urGemAwU/0x224:2826x3050/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2020/02/11/894/n/1922398/87f6bb525e430e7bd44e40.22278576_/i/Drake.jpg"
//         btn.innerText = "clicked"
//         btn.style.color = 'yellow'
//     }
// }


var img= document.querySelector('img');
 var images =['asset/image/iphone6.jpg','asset/image/flower-buds.jpg','asset/image/search-girl.jpg', 'asset/image/welcome-guy.jpg'];
 let i=0;


//  function setImg(){
//     return img.setAttribute('src', 'images/' + images[i] );
//  }

//  function prev(){
//     if (i<=0) i= images.length;
//     i--;
//     return setImg();
//  }


//  function next(){
//     if (i >= images.length - 1) i = -1;
//     i++;
//     return setImg();
//  }