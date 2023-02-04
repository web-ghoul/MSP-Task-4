const searchInput = document.getElementById("search")
const buttons = document.querySelectorAll('button')
const sliderOne = document.getElementById("1")
const sliderTwo = document.getElementById("2")
const sliderThree = document.getElementById("3")
const boxOne = document.getElementById("high")
const boxTwo = document.getElementById("normal")
const boxThree = document.getElementById("low")
const listIcon = document.getElementById("list-icon")
const closeIcon = document.getElementById("close-icon")
const headerList = document.getElementById("header-list")
const lists = document.querySelectorAll("header .contain .header .contain ul li")

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        Swal.fire({
            title: 'Sorry!',
            text: 'It is not Working',
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    })
})

const openSearch = (val) => {
    if (val) {
        searchInput.nextSibling.nextSibling.classList.add('hide')
        searchInput.previousSibling.previousSibling.classList.add('hide')
        searchInput.style.backgroundImage = "none"
        searchInput.style.backgroundColor = "#fff"
        searchInput.focus()
    } else {
        searchInput.nextSibling.nextSibling.classList.remove('hide')
        searchInput.previousSibling.previousSibling.classList.remove('hide')
        searchInput.style.backgroundImage = "url('./imgs/msp-back.png')"
        searchInput.style.backgroundColor = "transparent"
    }
}

window.addEventListener("click", (e) => {
    if (e.target.id === 'search' || e.target.id === "arrow-icon" || e.target.id === "search-icon") {
        openSearch(true)
    } else {
        openSearch(false)
    }
})

sliderOne.addEventListener('click', () => {
    boxOne.style.transform = "scale(1.1)"
    boxTwo.style.transform = "scale(1)"
    boxThree.style.transform = "scale(1)"
    sliderOne.classList.add("active")
    sliderTwo.classList.remove("active")
    sliderThree.classList.remove("active")
})

sliderTwo.addEventListener('click', () => {
    boxOne.style.transform = "scale(1)"
    boxTwo.style.transform = "scale(1.1)"
    boxThree.style.transform = "scale(1)"
    sliderOne.classList.remove("active")
    sliderTwo.classList.add("active")
    sliderThree.classList.remove("active")
})

sliderThree.addEventListener('click', () => {
    boxOne.style.transform = "scale(1)"
    boxTwo.style.transform = "scale(1)"
    boxThree.style.transform = "scale(1.1)"
    sliderOne.classList.remove("active")
    sliderTwo.classList.remove("active")
    sliderThree.classList.add("active")
})

listIcon.addEventListener("click", () => {
    headerList.classList.add('open')
})

closeIcon.addEventListener("click", () => {
    headerList.classList.remove('open')
})

lists.forEach((list) => {
    list.addEventListener('click', () => {
        headerList.classList.remove('open')
    })
})