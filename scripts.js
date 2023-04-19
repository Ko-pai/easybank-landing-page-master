
const ulList = document.querySelector ("ul")
const slider = document.querySelector(".slider")
const iconContainer = document.querySelector(".iconTextContainer")

const LIST_ARRAY = ["Home","About","Contact","Blog","Careers"]


//This data is from second container
const data = [
    { 
        id : 1,
        icon : "images/icon-online.svg",
        text : "Online Booking",
        cartegories : "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    { 
        id : 2,
        icon : "images/icon-budgeting.svg",
        text : "Simple Budgeting",
        cartegories : "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
    },
    { 
        id : 3,
        icon : "images/icon-onboarding.svg",
        text : "Fast Onboarding",
        cartegories : "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    { 
        id : 1,
        icon : "images/icon-api.svg",
        text : "Open API",
        cartegories : " Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    },
]

// This loop is created to header list item
for(let i=0 ; i < LIST_ARRAY.length ; i++){
    let listTag = document.createElement("a")
    listTag.id = i 
    listTag.append(LIST_ARRAY[i])
    ulList.append(listTag)
    if(i == 0) {
        slider.style.width = listTag.offsetWidth + "px"
    }
    listTag.addEventListener("click",(e)=>{
        let idNum = e.target.id
        let aTag = document.getElementById(idNum)
        let width = e.target.offsetWidth
        let innerText = e.target.innerHTML
        
        let left = e.target.offsetLeft

        slider.style.width = width + "px"
        slider.style.transform = `translateX(${left}px)`
        


        if(innerText == "Home"){
            aTag.href = "#"
        }else if( innerText == "About"){
            aTag.href = "#About"
        }else if( innerText == "Blog"){
            aTag.href = "#Blog"
        }else if( innerText == "Contact"){
            aTag.href = "#Contact"
        }else if( innerText == "Career"){
            aTag.href = "#Career"
        }
        
    })
    
}

// This data is show item in second container
data.map((data) =>{
    return iconContainer.innerHTML +=`<div class="iconText">
    <div class="icon-color">
        <img src = "${data.icon}"/>
    </div>
    <h3>${data.text}</h3>
    <div class="cartegoriesText">
        
        <p>${data.cartegories}</p>
    </div>
</div>`
})

// humberger

const humburger = document.querySelector(".hamburger")
const lineOne = document.querySelector(".one")
const lineTwo = document.querySelector(".two")
const lineThree = document.querySelector(".three")
const appearDiv = document.querySelector(".appearDiv")
const test = document.querySelector(".good")
const indexButton = document.querySelector(".zIndexButton")

humburger.addEventListener("click",(e)=>{
    if(humburger.classList.contains("active")){
        humburger.classList.remove("active")
        lineOne.classList.remove("oneTransition")
        lineTwo.classList.remove("opacityLine")
        lineThree.classList.remove("twoTransition")
        appearDiv.classList.remove("appear")
        test.classList.remove("appear1")
        indexButton.style.zIndex = "1"
    }else{
        humburger.classList.add("active")
        lineOne.classList.add("oneTransition")
        lineTwo.classList.add("opacityLine")
        lineThree.classList.add("twoTransition")
        appearDiv.classList.add("appear")
        test.classList.add("appear1")
        indexButton.style.zIndex = "0"
    }
})

window.addEventListener("load",(e)=>{
    if(e.target.body.offsetWidth  < 550){
        change.src = "images/bg-intro-mobile.svg"
    }else{
        change.src = "images/bg-intro-desktop.svg"
    }
    indexButton.style.zIndex = "1"
})


//third container card insert

const travelData = [
    {
        id : 1,
        name : "By Claire Robinson",
        text : "Receive money in any currency with no fees",
        para : "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
        image : "./images/image-currency.jpg"
    },
    {
        id : 2,
        name : "By Wilson Hutton",
        text : "Treat yourself without worrying about mones",
        para : " Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
        image : "./images/image-confetti.jpg"
    },
    {
        id : 3,
        name : "By Wilson Hutton",
        text : "Take your Easybank card wherever you ",
        para : "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
        image : "./images/image-plane.jpg"
    },
    {
        id : 4,
        name : "By Claire Robinson",
        text : "Our invite-only Beta accounts are now live!",
        para : "After a lot of hard work by the whole team, we’re excited to launch our closed beta.It’s easy to request an invite through the site ...",
        image : "./images/image-restaurant.jpg"
    },
]

const travelCard = document.querySelector(".travel-card-container")

travelData.map((d)=>{
    return travelCard.innerHTML +=`
    <div class="card-con">
    <div class="imgCon">
        <img src=${d.image} alt="tag" class="scaleImage">
    </div>
    <div class="text-con">
        <h5>${d.name}</h5>
        <h3>${d.text}</h3>
        <p>${d.para}</p>
    </div>
</div>


    `
})


//for footer

const lol = document.querySelector("body")
const change = document.querySelector(".changeImage")

lol.addEventListener("click",(e)=>{
    if(e.target.offsetWidth < 550){
        change.src = "images/bg-intro-mobile.svg"
    }else{
        change.src = "images/bg-intro-desktop.svg"
    }
})




