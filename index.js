let next = document.getElementById("next-btn");
let prev = document.getElementById("prev-btn");


next.addEventListener("click",nextbtn);
prev.addEventListener('click',prevbtn);

let start = 0;
let end = -200;
// console.log(slider_items)
function nextbtn(){
    let slider_items = document.querySelectorAll(".slider-banners")
    if(start > end){
        start -= 100;
        slider_items.forEach(element => {
            element.style.transform = `translateX(${start}%)`
        })
    }
    else{
        start = 0;
        slider_items.forEach(element => {
            element.style.transform = `translateX(${start}%)`
        })
    }
    
}

function prevbtn(){
    let slider_items = document.querySelectorAll(".slider-banners")
    if(start < 0)
        start += 100;
        slider_items.forEach(element => {
            element.style.transform = `translateX(${start}%)`
        })
}
// function nextbtn(){
//     alert("next")
// }

setInterval(() => {
    let slider_items = document.querySelectorAll(".slider-banners")
    if(start > end){
        start -= 100;
        slider_items.forEach(element => {
            element.style.transform = `translateX(${start}%)`
        })
    }
    else{
        start = 0;
        slider_items.forEach(element => {
            element.style.transform = `translateX(${start}%)`
        })
    }
}, 5000);

// Slider btn
let slPrevbtn = document.getElementById("sl-prev-btn");
let slnextbtn = document.getElementById("sl-next-btn");
slPrevbtn.addEventListener("click", sliderPrevBtn)
slnextbtn.addEventListener("click", slidernextBtn)
let slstart = 0;
let slend = -25; 
let p_slider = document.getElementById("p-slider-products")
function slidernextBtn(){
    if(slstart > slend){
        slstart -= 25;
        p_slider.style.transform = `translateX(${slstart}%)`
        slnextbtn.style.display = "none";
        slPrevbtn.style.display = "flex"
    }    

}

function sliderPrevBtn(){

    if(slstart < 0){
        slstart += 25
        p_slider.style.transform = `translateX(${slstart}%)`
        slPrevbtn.style.display = "none";
        slnextbtn.style.display = "flex";
    }

}

// log-in Section

let login_section = document.getElementById("login-section");
let login_btn = document.getElementById("login")
let cross_btn = document.getElementById("cross-btn")
login_btn.addEventListener("click", ()=>{
    login_section.style.display = "flex";
})

cross_btn.addEventListener("click", ()=>{
    login_section.style.display = "none";
})