let p = document.getElementById("text");
let btn = document.getElementById("btn");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

btn.onclick=()=>{
 fetch(url).then(data => data.json()).then(item => p.innerHTML=item.joke);
};