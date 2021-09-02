export default class Item {

  constructor(name, hp, ap, dp) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
    this.dp = dp;
    // let description = "";
    // if(hp) description += `This item adds ${hp} to health.`;
    // if(ap) description += `This item adds ${ap} to attack.`;
    // if(dp) description += `This item adds ${dp} to defense.`;
    // this.desc = description;
  }

}