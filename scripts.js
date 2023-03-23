
const ulList = document.querySelector ("ul")
const slider = document.querySelector(".slider")

const LIST_ARRAY = ["Home","About","Contact","Blog","Careers"]



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