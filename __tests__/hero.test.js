// hero
//   properties
//     gold
//     exp 100 (later)
//     level +1
//     hasSpecial = false;

//   methods
//     levelUp - lvl++ str++ def++ if(this.lvl === 3) hasSpecial = true;
//     defend

import Hero from "./../src/hero.js";

describe("Hero", () => {
  let newHero;
  beforeEach(() => {
    newHero = new Hero(5, 2, 1);
  });

  test("should correctly create a hero object by calling the parent constructor", () => {
    expect(newHero.hp).toEqual(5);
    expect(newHero.ap).toEqual(2);
    expect(newHero.dp).toEqual(1);
  });

  test("should correctly create a hero object by calling the parent constructor and ", () => {
    expect(newHero.level).toEqual(1);
    expect(newHero.gold).toEqual(10);
    expect(newHero.inv).toEqual({});
  });
  
  test('should increment the hp, ap, level and dp properties by one', () => {
    newHero.levelUp();
    expect(newHero.level).toEqual(2);
    expect(newHero.hp).toEqual(6);
    expect(newHero.ap).toEqual(3);
    expect(newHero.dp).toEqual(2);
  })

  
});
