// hero
//   properties
//     gold
//     exp 100 (later)
//     level +1
//     hasSpecial = false;
    
//   methods
//     levelUp - lvl++ str++ def++ if(this.lvl === 3) hasSpecial = true;
//     defend

import Hero from './../src/hero.js';

describe('Hero', () => {

  test('should correctly create a hero object by calling the parent constructor', () => {
    let newHero = new Hero(5,2,1); 
    expect(newHero.hp).toEqual(5);
    expect(newHero.ap).toEqual(2);
    expect(newHero.dp).toEqual(1);
  })
  
  test('should correctly create a hero object by calling the parent constructor and ', () => {
    let newHero = new Hero(5,2,1); 
    expect(newHero.level).toEqual(1);
    expect(newHero.gold).toEqual(10);
    expect(newHero.inv).toEqual({});

  })
})