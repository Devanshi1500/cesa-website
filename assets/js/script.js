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
        if($(window).scrollTop()+$(window).height() - 40 - $(document).height() + 250 >= 0){
            // console.log("in footer")
            backToTopBtn.style.backgroundColor = "#fa6238";
        }
        else{
            // console.log("out of footer")
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
        // console.log("flex!")
    }
    else{
        navbar.style.display = "flex";
        // console.log("none!")
    }
}