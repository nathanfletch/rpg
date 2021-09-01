export default class Combat {
  constructor(hero, enemy) {
    this.hero = hero;
    this.enemy = enemy;
  }

  calcEnemyDamage() {
    return this.enemy.ap - this.hero.dp;
  }

  calcPlayerDamage() {
    return this.hero.ap - this.enemy.dp;
  }
}