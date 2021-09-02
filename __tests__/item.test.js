import Item from './../src/item.js';


describe("Item", () => {


  test("should crete item object", () => {
    let newItem = new Item("sword", 0, 1, 1);
    expect(newItem.name).toEqual("sword");
    expect(newItem.hp).toEqual(0);
    expect(newItem.ap).toEqual(1);
    expect(newItem.dp).toEqual(1);
  });
});