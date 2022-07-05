const handleNextPage = () => {
    window.location.href = '/download.html';
};

const buttonElement = document.getElementById("banner-button");
buttonElement.addEventListener("click", handleNextPage);