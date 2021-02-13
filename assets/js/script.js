window.addEventListener("load",function() {
    const header = document.getElementById("header");
    const backToTopBtn = document.getElementById("back-to-top");
    document.getElementById('loading').style.display = "none";


    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 0);
    });


    window.addEventListener("scroll", function(){
        
        if(window.scrollY > 200){
            backToTopBtn.style.display = "block";
        }
        else{
            backToTopBtn.style.display = "none";
        }
    });

    window.addEventListener("scroll", function(){
        if($(window).scrollTop()+$(window).height() - 40 - $(document).height() + 100 >= 0){
            backToTopBtn.style.backgroundColor = "#fa6238";
        }
        else{
            backToTopBtn.style.removeProperty("background-color");
        }
    })

    backToTopBtn.addEventListener("click", function(){
        window.scrollTo(0, 0);
    });
});


function togglenav(){

    var navbar = document.getElementById("navigation")
    if(navbar.style.display == "flex"){
        navbar.style.display = "none";
        console.log("flex!")
    }
    else{
        navbar.style.display = "flex";
        console.log("none!")
    }
}

// Count-down timer
var countDownDate = new Date("Mar 5, 2021 11:59:59").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("count-down").innerHTML = `<span class="big">${days}<span class="small">D</span></span>
  <span class="big">${hours}<span class="small">H</span></span>
  <span class="big">${minutes}<span class="small">M</span></span>
  <span class="big">${seconds}<span class="small">S</span></span>`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count-down").innerHTML = "EXPIRED";
  }
}, 1000);
