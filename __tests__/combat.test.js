/*
Combat (Player)
  properties
    this.player hero
    this.enemy slime
    this.enemyIntent = unit.ap
  methods
    calcEnemyDamage modify player.hp
    calPlayerDamage
    getEnemyIntent 
  
  player enters combat (submit handler)
    call constructor: this. unit who the player is facing
    displayEnemyIntent


  player starts each turn (fight button)
    setTimeout - 1 second (...fighting)
    calcPlayerDamage = hero attack() - unit armor
    unit.reduceHp(calcPlayerDamage)
    calcEnemyDamge = unit attack() - player armor
    
    hero.reducehp(calcEnemyDamage());
    displayResult = the player took "Enemy calc"
    displayEnemyIntent
*/
import Unit from './../src/unit.js'
import Hero from './../src/hero.js'
import Combat from './../src/combat.js'

describe('Combat', () => {

  let newHero;
  let newEnemy;
  let newCombat;

  beforeEach(() => {
    newHero = new Hero("Hero", 5,2,1);
    newEnemy = new Unit ("Goblin", 3,2,1);
    newCombat = new Combat(newHero, newEnemy);
  });

  test('should correctly create combat env', () => {
    expect(newCombat.hero).toEqual(newHero);
    expect(newCombat.enemy).toEqual(newEnemy);
  });

  test('should calculate player damage to enemy', () =>{
    expect(newCombat.calcEnemyDamage()).toEqual(1);
  })

  test('should calculate enemy damage to player', () => {
    expect(newCombat.calcPlayerDamage()).toEqual(1);
  })
})