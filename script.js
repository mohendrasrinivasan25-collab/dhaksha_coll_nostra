// Mobile menu
var menubox = document.getElementById("menubox")
var sideebar = document.getElementById("sideebar")
var closebar = document.getElementById("closebar")

function openMenu() {
    sideebar.classList.add("is-open")
    menubox.setAttribute("aria-expanded", "true")
}

function closeMenu() {
    sideebar.classList.remove("is-open")
    menubox.setAttribute("aria-expanded", "false")
}

menubox.addEventListener("click", openMenu)
menubox.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        openMenu()
    }
})

closebar.addEventListener("click", closeMenu)
closebar.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        closeMenu()
    }
})

sideebar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu)
})

// Search Box
var product_container = document.getElementById("product_container")
var search = document.getElementById("search")
var productlist = product_container.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("h2").textContent
        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})


// check list js

var check=document.querySelectorAll('input[name="check"]')
dress=[]
var product_container=document.getElementById("product_container")

for(var count=0; count<=check.length; count=count+1) {
    check[count].addEventListener("click",function(){
        if(event.target.checked){
            console.log("checked")
            dress.push(event.target.className)
        }
        else{
            console.log("unchecked")
            var m =dress.indexOf(event.target.className)
            dress.splice(m, 1)
            
        }

        var items =product_container.children
        for (var i=0; i<items.length; i++){
            if(dress.length==0){
                items[i].style.display="block"
            }
            else{
                items[i].style.display="none"
                for(var j=0; j<dress.length; j++){
                    if(items[i].classList.contains(dress[j])){
                        items[i].style.display="block"
                    }
                }
            }
        }

    })
}



// head nodge


var close= document.querySelector(".close")
var nodge=document.getElementById("nodge")

close.addEventListener("click",function(){
   nodge.style.display="none"
})
