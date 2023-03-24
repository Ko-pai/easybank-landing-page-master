
const ulList = document.querySelector ("ul")
const slider = document.querySelector(".slider")
const iconContainer = document.querySelector(".iconTextContainer")

const LIST_ARRAY = ["Home","About","Contact","Blog","Careers"]

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
        console.log(e);
        let left = e.target.offsetLeft

        slider.style.width = width + "px"
        slider.style.transform = `translateX(${left}px)`
        


        if(innerText == "Home"){
            aTag.href = "#Home"
        }else if( innerText == "About"){
            aTag.href = "#"
        }else if( innerText == "About"){
            aTag.href = "#"
        }else if( innerText == "About"){
            aTag.href = "#"
        }else if( innerText == "About"){
            aTag.href = "#"
        }
        
    })
    
}


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