//creates dictionary with one entry
function my_Dictionary() {
    var Pokemon = {
        Name:"Blubasaur",
        Pokedex_Num:1,
        Type_One:"Grass",
        Type_Two:"Poison",
        Region:"Kanto",
    };
    // replaces the dictionary element with the name of the pokemon
    document.getElementById("Dictionary").innerHTML = Pokemon.Name
}
// creates dictionary with one entry 
function del_fav() {
    var Pokemon = {
        Name:"Blubasaur",
        Pokedex_Num:1,
        Type_One:"Grass",
        Type_Two:"Poison",
        Region:"Kanto",
    };
    // deletes the name of the pokemon varable 
    delete Pokemon.Name 
    //trys to find the name of the pokemon variable, since it's been deleted it shows as undefined
    document.getElementById("delete").innerHTML = Pokemon.Name
}
