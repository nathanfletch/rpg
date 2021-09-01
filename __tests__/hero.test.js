import Hero from './../src/hero.js';

describe('Hero', () => {

  test('should correctly create a hero object by calling the parent constructor', () => {
    let newHero = new Hero(5,2,1); 
    expect(newHero.hp).toEqual(5);
    expect(newHero.ap).toEqual(2);
    expect(newHero.dp).toEqual(1);
  })
})