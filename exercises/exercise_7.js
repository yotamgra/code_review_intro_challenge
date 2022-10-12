const characters = require("../data/characters.json");
const planets = require("../data/planets.json");
// return all characters,
// but keep only the following fields:
/*
 * name
 * homeworld
 */

// instead of the link inside "homeworld"
// find the relevant object of the planet
// inside the planets array (see above)

/*
  The result should be of the following structure:
  [
    { name: 'Kit Fisto', homeworld: 'Glee Anselm' },
    { name: 'Eeth Koth', homeworld: 'Iridonia' },
    ...
  ]
*/

const charactersWithHomeWorld = () => {
  //  YOUR CODE HERE
  return characters.map((character) => {
    const { name } = character;
    const homeworldLink = character.homeworld;
    let homeworld = () => {
      planets.forEach(planet => {
        if (planet.url === homeworldLink) {
          return planet.name;
        }

      })
    }();
    return { name, homeworld };
  });
};

console.log(charactersWithHomeWorld());;

module.exports = charactersWithHomeWorld;
