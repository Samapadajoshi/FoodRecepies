const recipesWrapper = document.getElementById("reicepes");

async function getRecipes() {
    // await make js waits till the promise is resolved

    const res = await fetch("https://dummyjson.com/recipes");

    const data = await res.json();

    // data.recipes means we only want recipes array
    const recipesArray = data.recipes;

    recipesArray.forEach((recipe) => {
        const aTag = document.createElement("a");

        aTag.innerHTML = `<img src="${recipe.image}" alt="" />
    <p>${recipe.name}</p>`;

        aTag.classList.add("recipe-card");

        aTag.setAttribute("href", `./recipe.html?id=${recipe.id}`);

        // TODO : add href attribute

        recipesWrapper.append(aTag);
    });

    // for (let i = 0; i < recipesArray.length; i++) {
    //   console.log(recipesArray[i].name);

    //   const aTag = document.createElement("a");

    //   aTag.innerHTML = `<img src="${recipesArray[i].image}" alt="" />
    //   <p>${recipesArray[i].name}</p>`;

    //   aTag.classList.add("recipe-card");

    //   recipesWrapper.append(aTag);
    // }
}

getRecipes();