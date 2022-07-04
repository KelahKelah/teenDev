const handleNextPage = () => {
    history.pushState(null, "" , "./download.html")
    location.reload()
    return false
}
const buttonElement = document.getElementById("banner-button")
console.log(buttonElement)
buttonElement.addEventListener("click", handleNextPage)