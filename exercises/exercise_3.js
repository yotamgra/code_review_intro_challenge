const characters = require("../data/characters.json");

// TODO: return only characters that
// their height is between 180 and 200

const charactersWithMediumHeight = () => {
  // YOUR CODE HERE
  // YOU CAN CHANGE ANY CODE INSIDE THE FUNCTION
  const MIN_HEIGHT = 180;
  const MAX_HEIGHT = 200;

  const filtered = characters.filter((character) => {
    // console.log("character.height outside", character.height);
    if (character.height === "unknown") {
      return false;
    }
    // console.log("character.height after",character.height);
    return character.height > MIN_HEIGHT && character.height < MAX_HEIGHT;
  });
  // filtered.forEach(item => console.log(item.height))
  return filtered
};

//  charactersWithMediumHeight()

module.exports = charactersWithMediumHeight;
