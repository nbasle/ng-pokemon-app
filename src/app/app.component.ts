import { Component, OnInit } from "@angular/core";
import { Pokemon } from "./pokemon/pokemon";
import { POKEMONS } from "./pokemon/mock-pokemon-list";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  title = "application de pokémons";

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  seletPokemon(selectPokemonId: string) {
    const pokemon = this.pokemonList.find(
      (pokemon) => pokemon.id === +selectPokemonId
    );

    if (pokemon) {
      console.log("Vous avez demander le pokemon: ", pokemon.name);
    } else {
      console.log("Vous avez demander un pokemon qui n'existe pas ");
    }
    this.pokemonSelected = pokemon;
  }
}
