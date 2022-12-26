let allNavigation = document.querySelectorAll(".navigation__link");
let currentNavigation = document.querySelector(".navigation__link--is-active");

for(let item of allNavigation){
    item.onclick = function(){
        item.classList.add("navigation__link--is-active");
        currentNavigation.classList.remove("navigation__link--is-active");
        currentNavigation = item;
    }
}