const x = document.querySelector("#nextButton");
let num = 0;

x.addEventListener('click',()=>{
    console.clear();
    num++;

    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then(res => res.json())
    .then(json =>{
        console.log("Pokemon's name is: "+ json.name);
        console.log("Pokemon's weight in pounds is: "+json.weight*.22);
        console.log("Pokemon's base hp is: "+ json.stats[0].base_stat);

        if(json.stats[0].base_stat<50){
            console.log("This pokemon is weak!");
        }else{
            console.log("This pokemon is strong!");
        }
    })

})