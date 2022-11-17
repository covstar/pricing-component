let slider = document.getElementById("myRange");
let toggle = document.getElementById("switch");
let cost1 = document.getElementById("desktopPrice");
let cost2 = document.getElementById("mobilePrice");
let view = document.getElementById("views");
let pageViews = ["10K PAGEVIEWS", "50K PAGEVIEWS", "100K PAGEVIEWS", "500K PAGEVIEWS", "1M PAGEVIEWS"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;


// slider progress background

    slider.oninput = function(){

        updateValue();

    let value = this.value * 25;
    this.style.background = `linear-gradient(to right,
                hsl(174, 77%, 80%) 0%,
                hsl(174, 77%, 80%) ${value}%,
                hsl(224, 65%, 95%) 0%,
                hsl(224, 65%, 95%) 100%)`

                // page views changing
    view.innerHTML = pageViews[slider.value];
};

toggle.onchange = function(){
    if(isYearly == false){
        isYearly = true;
    }
    else{
        isYearly = false;
    }
    updateValue()
};

function updateValue(){
    if(isYearly){
        cost1.innerHTML = perMonth[slider.value] * .75;
        cost2.innerHTML = perMonth[slider.value] * .75;

    }
    else{
        cost1.innerHTML = perMonth[slider.value];
        cost2.innerHTML = perMonth[slider.value];
    }
}