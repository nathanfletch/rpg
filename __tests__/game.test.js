import Game from "./../src/game.js";

describe("Game", () => {
  test("should create a game with a monsters list and empty items list", () => {
    let myGame = new Game();
    expect(myGame.monsters).toEqual(["Aardvark", "Dino", "Monkey"]);
    expect(myGame.items).toEqual({});
  });

  // test('should call the Unit constructor')
});
