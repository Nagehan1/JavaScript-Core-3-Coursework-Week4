let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  let arr = ["irina", "etza", "daniel"];

  // Act
  let result = removeVowelsFromWords(arr);
  // Assert
  let expectedResult = ["rn", "tz", "dnl"];
  expect(result).toEqual(expectedResult);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
