"use strict";

console.log("Let's get this party started!");

//API Key Global Variable
const GIPHY_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const GIF_SEARCH_INPUT = $("#gif-search").val();

/**Generate random number */
function generateRandomNumber(array){
  return Math.floor(Math.random()*array.length);
}

/**Uses axios to make a request to GIPHY to find gifs based on the search input */
async function getSearchedGif(){
  let searchResult = await axios.get(api.giphy.com/v1/clips/search, {params:
    {q:gifSearchInput, api_key: api}});
  console.log("got", searchResult);
  console.log(searchResult.data[0].url);
  return searchResult.data.data[generateRandomNumber()].url;
}

/**Add image to display area */
function addImageToDisplay(imgUrl){
  const newGif = $("<img>").attr("src", imgUrl);
  $(".display").append(newGif);
}


/**Create an event listener for submission of form that takes the search input,
 * invokes the getSearcheGif function that requests GIPHY for a gif url, and a
 * appends the image onto the display area.
 */
$("form").on("submit", function(e){
  e.preventDefault();

  const imgUrl = await getSearchedGif();
  addImageToDisplay(imgUrl);
})

/**emptyDisplay removes all child elements in the div with class display*/
function emptyDisplay(){
  $(".display").empty();
}

$(".remove").on("click", emptyDisplay);

