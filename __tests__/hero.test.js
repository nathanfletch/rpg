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
import Item from "./../src/item.js";

describe("Hero", () => {
  let newHero;
  beforeEach(() => {
    newHero = new Hero("hero", 5, 2, 1);
  });

  test("should correctly create a hero object by calling the parent constructor", () => {
    expect(newHero.hp).toEqual(5);
    expect(newHero.ap).toEqual(2);
    expect(newHero.dp).toEqual(1);
  });

  test("should correctly create a hero object by calling the parent constructor and ", () => {
    expect(newHero.level).toEqual(1);
    expect(newHero.gold).toEqual(10);
    expect(newHero.inv).toEqual([]);
  });
  
  test('should increment the hp, ap, level and dp properties by one', () => {
    newHero.levelUp();
    expect(newHero.level).toEqual(2);
    expect(newHero.hp).toEqual(6);
    expect(newHero.ap).toEqual(3);
    expect(newHero.dp).toEqual(2);
  });

  //name
  //apply effects
  test('should add the item name to the inv propery', () => {
    const itemToAdd = new Item("Ring");
    newHero.addItem(itemToAdd);
    expect(newHero.inv[0]).toEqual("Ring");
  });

  test('should add the item hp, ap, and dp values to the hero properties', () => {
    const itemToAdd = new Item("Ring", 0, 1, 1);
    newHero.addItem(itemToAdd);
    expect(newHero.hp).toEqual(5);
    expect(newHero.ap).toEqual(3);
    expect(newHero.dp).toEqual(2);
  });

  test('should add the item hp, ap, and dp values to the hero properties', () => {
    const itemToAdd = new Item("Ring", 1, 0, 0);
    newHero.addItem(itemToAdd);
    expect(newHero.hp).toEqual(6);
    expect(newHero.ap).toEqual(2);
    expect(newHero.dp).toEqual(1);
  });
  
  // test('should subtract 20 gold from the hero', () => {
  //   const itemToAdd = new Item("Ring", 1, 0, 0);
  //   newHero.addItem(itemToAdd);
  //   expect(newHero.gold).toEqual(6);
  //   expect(newHero.ap).toEqual(2);
  //   expect(newHero.dp).toEqual(1);
  // });

  test('should add 10 gold to the hero', () => {
    newHero.getGold();
    expect(newHero.gold).toEqual(20);
  });  
});
