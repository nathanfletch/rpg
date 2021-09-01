/*
utility fns

Combat 
  properties
    turn counter
    this.player hero
    this.enemy slime
  methods
    calcEnemyDamage modify player.hp
    calPlayerDamage
    displayCombat

Game
  properties
    history
    combat counter
    next combat
    move north
    explore

Item
  props
    name
    effect
    cost 
  methods

Shop
  props
  inv = {items}
  gold = 
  methods

Combat unit
  properties
    hp
    ap
    dp
    inv = {}
  methods
    Attack return this.str
    modifyHealth
    calcDmgReceived enemydmg - armor
    
hero
  properties
    gold
    exp 100 (later)
    level +1
    hasSpecial = false;
    
  methods
    levelUp - lvl++ str++ def++ if(this.lvl === 3) hasSpecial = true;
    defend

Offensive Fighter
  properties - higher attack, lower str
  methods
    special ability
Defensive Fighter
  properties
  methods
    special ability

Enemy
  Slime

Action points **** 3ish points attacks cost 2 our something along this line
	

Methods:
Special attack 
	magic attack (fireball!)
	heavy swing type for fighter
defend

*/

import Unit from './../src/unit.js'

describe('Unit', () => {

  test('should correctly build combat unit with appropriate properties', () =>{
    let newUnit = new Unit(5, 2, 1);
    expect(newUnit.hp).toEqual(5);
    expect(newUnit.ap).toEqual(2);
    expect(newUnit.dp).toEqual(1);
  })

  test('should corecttly modify health positively or negatively', () => {
    let newUnit = new Unit (5,2,1);
    newUnit.reduceHp(1);
    expect(newUnit.hp).toEqual(4);
  })

  test('should return calculated attack value', () =>{
    let newUnit = new Unit (5,2,1);
    expect(newUnit.attack()).toEqual(2);
  })
})