
const stickyHeader = document.querySelector(".sticky-header");
const menuIcon = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-ul");
const navLinks = document.querySelectorAll(".nav-link-item");
const sections = document.querySelectorAll(".hidden");
const abtMeBtn = document.querySelector(".abt-me");

const viewList = [];


//listerns to the position of the document and highlights the corresponding nav item
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.isIntersecting)
        console.log(entry.intersectionRect.y)
        console.log(entry.target.id)
        if (entry.isIntersecting) {
            viewList.push(entry.target.id);
            entry.target.classList.add("active-nav")
        } else {
            entry.target.classList.remove("inactive-nav")
        }
    });

    const last = viewList[viewList.length - 1];
    if (viewList.length >= 2) viewList.shift();
    navLinks.forEach((e)=>{
        if(e.innerHTML.toLowerCase() == last.toLowerCase()){
            e.classList.remove("inactive-nav")
            e.classList.add("active-nav")
        }else{
            e.classList.add("inactive-nav")
            e.classList.remove("active-nav")
        }
    });
});


//select each progress bar and changes its percentage accordingly
document.querySelectorAll(".progress-fill").forEach((element, index) => {
    var width;
    //for flutter and dart
    if (index == 0) 
        width = "80%";
    //html and css
     else  if (index == 1)width = "70%";
     //javascript
     else  if (index == 2)width = "60%";
     //python
     else  if (index == 3)width = "60%";
     //bootstrap, jQuery
     else  if (index == 4)width = "60%";
     // databases and sql
     else width = "35%";
    
    document.querySelectorAll(".progress-fill")[index].style.width = width;
});


//applying the document position listerner
sections.forEach((el) => observer.observe(el));


//listerner for toggling the visibility of the navbar when it is scrolled
window.addEventListener("scroll", () => {
    stickyHeader.classList.toggle("opaque-header", window.scrollY > 50);
});


//function to toggle the navbar on/off when in small screens
menuIcon.addEventListener(("click"), () => {
    navList.classList.toggle("nav-expanded");
});

//function for the about me button
abtMeBtn.addEventListener(("click"),()=>{
    const offset = document.getElementById("About").getBoundingClientRect();
    window.scrollTo({
        top: offset.top + window.pageYOffset,
        behavior: "smooth",
    })
})
//function for the about download cv button
document.querySelector(".cv").addEventListener(("click"),()=>{
    alert("Document unavailable");
})



