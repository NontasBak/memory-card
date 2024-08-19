function getPokemon(difficulty) {
    switch (difficulty) {
        case "easy":
            return [
                "charizard",
                "pikachu",
                "jigglypuff",
                "mew",
                "eevee",
                "ditto",
            ];
        case "medium":
            return [
                "bulbasaur",
                "squirtle",
                "charmander",
                "pidgey",
                "rattata",
                "zubat",
                "meowth",
                "psyduck",
            ];
        case "hard":
            return [
                "snorlax",
                "dragonite",
                "mewtwo",
                "lapras",
                "gengar",
                "machamp",
                "alakazam",
                "golem",
                "onix",
                "scyther",
                "electabuzz",
                "magmar",
            ];
    }
}

export default getPokemon;
