
function getRecipes() {
    const resPromise = fetch(
        "https://dummyjson.com/recipes?limit=4&skip=0&select=name,image"
    );

    resPromise
        .then((data) => data.json())
        .then((actualData) => {
            console.log(actualData.recipes);
        })
        .catch((error) => console.log(error));
}

getRecipes();
