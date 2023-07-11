console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const submitSearch = document.querySelector("#submitSearch");
const searchWord = document.getElementById("searchWord");
const img = document.querySelector("#imageContainer > img");
const feedback = document.getElementById("feedback");
const giphy = "kGV8UKHC9VMF7h5Hy9PnmMz1d61QRaBR";
const url = "https://api.giphy.com/v1/gifs/translate";
console.dir(searchWord);

submitSearch.addEventListener("click", (event) => {
    fetch(`${url}?api_key=${giphy}&s=${searchWord.value}`)
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((result) =>{
        console.log(result);
        img.src = result.data.images.original.url;
        searchWord.value = "";
        feedback.textContent = "";
    })
    .catch((err) =>{
        console.error(err);
        feedback.textContent = err.message;
    })
})