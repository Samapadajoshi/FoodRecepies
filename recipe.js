const qString = window.location.search; // ?id=4

// www.youtube.com/route?key=value

// http://127.0.0.1:5500/recipe.html?id=4 ==> 4

const urlParams = new URLSearchParams(qString);

const id = urlParams.get("id"); // 2

const repcipeImg = document.getElementById("recipe-img");

getRecipeData();

async function getRecipeData() {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await res.json();

    console.log(data.image);

    repcipeImg.setAttribute("src", data.image);

    // todo : Complete remaining part
}