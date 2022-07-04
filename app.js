const handleNextPage = () => {
    history.pushState(null, "./download.html")
}
const buttonElement = document.getElementById("banner-button")
buttonElement.addEventListener("click", handleNextPage)