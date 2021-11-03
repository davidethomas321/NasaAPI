const apiKey = "8J52eSUshy5okigtkkBMlz5HQ69K1bwJjYHjoaU2";

//APOD
const apodLink = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
const imageDisplay = document.querySelector("#imageDisplay")
const titleDisplay = document.querySelector("#title")
const explanationDisplay = document.querySelector("#explanation")

const getAPOD = async () => {
    let response = await fetch(apodLink);
    let apodJSON = await response.json();
    imageDisplay.src = apodJSON.url;
    titleDisplay.innerText = apodJSON.title;
    explanationDisplay.innerText = apodJSON.explanation;
}

getAPOD();

//EPIC
const epicLink = `https://api.nasa.gov/EPIC/api/natural/?api_key=${apiKey}`;
const carouselContainer = document.querySelector(".carousel-inner")

const getEpic = async () => {
    let response = await fetch(epicLink);
    let epicJSON = await response.json();
    console.log(epicJSON);

    for(i = 0; i < epicJSON.length; i++) {

        //Prime creation of items

        let dateTime = epicJSON[1].date.split(' ');
        let date = dateTime[0].split('-')
        let year = date[0];
        let month = date[1];
        let day = date[2];
        let img = epicJSON[i].image;

        let carouselItem = document.createElement('div');
        carouselItem.className = "carousel-item active d-block w-100";
        let carouselImage = document.createElement('img');
        carouselImage.className = "img-fluid";
        carouselImage.id = "earthImage"

        //identify
        carouselImage.src = `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${img}.png?api_key=${apiKey}`;

        carouselContainer.appendChild(carouselItem);
        carouselItem.appendChild(carouselImage);

    }
}

getEpic();