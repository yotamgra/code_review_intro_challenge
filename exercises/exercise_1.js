const characters = require("../data/characters.json");

/* TODO: return one character with an "unknown" birth year  */

const findCharacterUnknownBirthDate = () => {
    return characters.find(character => character.birth_year === "unknown")
  // CODE HERE
};

module.exports = findCharacterUnknownBirthDate;
