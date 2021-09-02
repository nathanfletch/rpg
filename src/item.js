export default class Item {

  constructor(name, hp, ap, dp) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
    this.dp = dp;
    // let description = "This item adds";
    // if(hp != 0) description += ` ${hp} to health`;
    // if(ap != 0) description += ` ${ap} to attack`;
    // if(dp != 0) description += ` ${dp} to defense`;
    // this.desc = description;
  }

}