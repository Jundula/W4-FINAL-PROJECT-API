// http://www.omdbapi.com/?i=tt3896198&apikey=7c513fa5

const mediaListEl = document.querySelector(".media__list")
const searchEl = document.querySelector(".banner__search--result")

const userListEl = document.querySelector(".user-list")

async function main() {
  
  const media = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=7c513fa5&s=2022`)
  const mediaData = await media.json()
  mediaListEl.innerHTML = mediaData.Search.map((media)=>mediaHTML(media)).join("");
  
  
 
}

main();

function selectYear(event){
  var year = event.target.value;

  console.log(year)

  
}


async function onSearchChange(){
  const id = event.target.value;
  
  
  const media = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=7c513fa5&s=${id}&y=`)
  console.log(media)
  const mediaData = await media.json()
  console.log(mediaData.Error)

  if (mediaData.Error === "Too many results." || mediaData.Error === "Movie not found!" ){

    searchEl.innerHTML =  `<span class="search--result" >${mediaData.Error}</span>`
  }

 
  mediaListEl.innerHTML = mediaData.Search.map((media)=>mediaHTML(media)).join("");
  
  searchEl.innerHTML =  `<span class="search--result" >Search results for "${id}"</span>`
  console.log(mediaData)
  
  
} 
function selectYear(event){
  var year = event.target.value;

  console.log(year)

  
}



function mediaHTML(media){
  return `

  <li class="media">
    <div class="media__wrapper">
      <img class="media__img" src="${media.Poster}">
      <div class="media__description">
        <h3 class="media__description--title">${media.Title}</h3>
        <span class="media__description--type">${media.Type}</span>
        <span class="media__description--year">${media.Year}</span>
      </div>
    </div>
    
  </li>`
}



  

async function selectYear(event){
  
  var Year = event.target.value;

    
    const media = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=7c513fa5&s=&y=${Year}`)
    
    const mediaData = await media.json()
    console.log (media)
    mediaListEl.innerHTML = mediaData.Search.map((media)=>mediaHTML(media)).join("");
    
  
    
  } 


