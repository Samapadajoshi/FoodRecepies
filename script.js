const recipesWrapper = document.getElementById("reicepes");
const searchRecipeInput = document.getElementById("search-recipe");
const recipesLinksWrapper = document.getElementById("recipes-links-wrapper");

async function getRecipes() {
    // await make js waits till the promise is resolved

    const res = await fetch(
        "https://dummyjson.com/recipes?limit=4&skip=0&select=name,image,rating"
    );

    const data = await res.json();

    // data.recipes means we only want recipes array
    const recipesArray = data.recipes;

    recipesArray.forEach((recipe) => {
        // {name : "", image : "URL", id : 1}
        const aTag = document.createElement("a");

        aTag.innerHTML = `<img src="${recipe.image}" alt="" />
    <p>${recipe.name}</p>`;

        aTag.classList.add("recipe-card");

        aTag.setAttribute("href", `./recipe.html?id=${recipe.id}`);

        recipesWrapper.append(aTag);
    });
}

getRecipes();

async function searchRecipe() {
    console.log(searchRecipeInput.value);
    console.log("Trying to search recipe");

    const res = await fetch(
        `https://dummyjson.com/recipes/search?q=${searchRecipeInput.value}`
    );
    const data = await res.json();

    const recipes = data.recipes; // []

    for (let i = 0; i < recipes.length; i++) {
        const aTag = document.createElement("a"); // <a></a>
        aTag.setAttribute("href", `./recipe.html?id=${recipes[i].id}`); // <a href=""></a>
        aTag.innerText = recipes[i].name;

        recipesLinksWrapper.append(aTag);
    }
}