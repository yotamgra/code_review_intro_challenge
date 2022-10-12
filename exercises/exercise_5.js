const characters = require("../data/characters.json");

// TODO: return all characters that :
// - birth_year is known
// - male
// - height is more than 200

// Only return the following fields
/*
 * name
 * height
 * mass
 * gender
 * birth_year
 */

const formatCharacters = () => {
  //  YOUR CODE HERE

  filtered = [];
  characters.forEach((character) => {
    const { birth_year, gender, height } = character;
    if (birth_year !== "unknown" && gender === "male" && height > 200) {
      // console.log(character);
      const { name, height, mass, gender, birth_year } = character;
      filtered.push({ name, height, mass, gender, birth_year });
    }
  });
  console.log(filtered);
  return filtered;
};

// const formatCharacters = () =>{
//   return characters.filter(character => {
//     const { birth_year, gender, height } = character;
//     return birth_year!== "unknown" && gender === "male" && height > 200;
//   }).map(character => {
//     const { name, height, mass, gender, birth_year } = character;
//     return {
//       name,
//       height,
//       mass,
//       gender,
//       birth_year,
//  }
//   })
// }

formatCharacters();

module.exports = formatCharacters;
