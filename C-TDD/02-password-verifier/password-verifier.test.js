
let verify = require("./password-verifier");

test("verifies a password", function () {
  // Arrange
  const password = "nagehan37";
  const expectedResult = "Password rejected";
  // Act
  const receivedResult = verify(password);
  // Assert
  expect(receivedResult).toEqual(expectedResult);
})
;
