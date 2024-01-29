let model_box = document.getElementById("model_box");
document.onmouseleave = function(){
    model_box.style.display = "block";
}

var close = document.getElementsByClassName("close_icon")[0].addEventListener("click", ()=>{
    model_box.style.display = "none";
})