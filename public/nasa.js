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
const carouselContainer = document.querySelector("#carouselEpic");

const getEpic = async () => {
    let response = await fetch(epicLink);
    let epicJSON = await response.json();

    for(i = 1; i < epicJSON.length; i++) {

        let dateTime = epicJSON[1].date.split(' ');
        let date = dateTime[0].split('-')
        let year = date[0];
        let month = date[1];
        let day = date[2];
        let img = epicJSON[i].image;
        let firstImg = epicJSON[0].image;
        const dateAndTime = document.querySelector("#dateTime");
        dateAndTime.innerText = epicJSON[i].date;

        let carouselItem = document.createElement('div');
        let carouselFirstItem = document.querySelector('#firstItem');
        carouselFirstItem.src = `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${firstImg}.png?api_key=${apiKey}`;
        carouselItem.className = "carousel-item";
        let carouselImage = document.createElement('img');
        carouselImage.className = "img-fluid";
        carouselImage.id = "earthImage";
        carouselImage.src = `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${img}.png?api_key=${apiKey}`;

        carouselContainer.appendChild(carouselItem);
        carouselItem.appendChild(carouselImage);
    }
}

getEpic();

//Mars Rover
const marsLink = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=&api_key=${apiKey}`;
const carouselContainer2 = document.querySelector("#carouselMars");

const getMars = async () => {
    let response = await fetch(marsLink);
    let marsJSON = await response.json();
    console.log(marsJSON.photos[0].img_src);
    console.log( marsJSON.photos[0].img_src);

    for(i = 1; i < marsJSON.photos.length; i++) {
 
        let carouselItem2 = document.createElement('div');
        let carouselFirstItem2 = document.querySelector('#firstItem2');
        carouselFirstItem2.src = marsJSON.photos[0].img_src;

        console.log(carouselFirstItem2);
        console.log(marsJSON.photos[0].img_src)

        carouselItem2.className = "carousel-item";
        let carouselImage2 = document.createElement('img');
        carouselImage2.className = "img-fluid";
        carouselImage2.id = "marsImage";
        carouselImage2.src = marsJSON.photos[i].img_src;

        carouselContainer2.appendChild(carouselItem2);
        carouselItem2.appendChild(carouselImage2);

    }

}

getMars();

