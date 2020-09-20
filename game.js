for (var i = 25; i > 0; i--) {
    let slider = document.createElement("div")
    slider.setAttribute("class", "slider animate")
    slider.setAttribute("id", "slider" + i)
    document.getElementById("game").append(slider)

}
var sliderwidth = 250

var btn = document.getElementById("btn")
function stopslider(slider) {
    var slidercurrent = document.getElementById("slider".concat(slider))
    var sliderabove = document.getElementById("slider".concat(slider + 1))
    if (slider == 1) {
        var sliderbelow = slidercurrent
    } else {
        var sliderbelow = document.getElementById("slider".concat(slider - 1))
    }
    var left = window.getComputedStyle(slidercurrent).getPropertyValue("left")
    slidercurrent.classList.remove("animate")
    slidercurrent.style.left = left
    var width = parseInt(window.getComputedStyle(slidercurrent).getPropertyValue("width"))
    var leftbelow = parseInt(window.getComputedStyle(sliderbelow).getPropertyValue("left"))
    left = parseInt(left)
    var difference = left - leftbelow
    var absdifference = Math.abs(difference)
    if(absdifference>width || difference<-width){
        var score="score:".concat(slider-1)
        alert(score)
        location.reload()
    }
    if (difference >0) {
        left = left + absdifference
    } else {
        left = left - difference
        slidercurrent.style.left = left.toString().concat("px")
    }    var offset = (width - absdifference).toString().concat("px")
    slidercurrent.style.width = offset
    slidercurrent.style.width = offset
    sliderabove.style.visibility = "visible"
    sliderwidth = sliderwidth + absdifference
    var onclick = "stopslider(" + (slider + 1) + ")"
    document.getElementById("btn").setAttribute("onclick", onclick)

}
