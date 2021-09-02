import Shop from './../src/shop';
import Item from './../src/item';
// Shop
//   props
//   inv = {items}
//   gold = 
//   methods
//      add item
// add gold value?

describe("Shop", () => {

  let newShop;
  let newItem;

  beforeEach(() => {
    newShop = new Shop();
    newItem = new Item("sword");
  });

  test("should create shop object with array for items", () => {
    expect(newShop.inv).toEqual({});
    expect(newShop.gold).toEqual(20);
    expect(newShop.currentId).toEqual(1);
  });

  test("should add item to shop inv and assign id number to it", () => {
    newShop.addItem(newItem);
    expect(newShop.currentId).toEqual(2);
    expect(newShop.inv[1]).toEqual(newItem);
  });

  test("should be able to find item in shop inv", () => {
    newShop.addItem(newItem);
    expect(newShop.findItem(1)).toEqual(newItem);
    expect(newShop.findItem(2)).toEqual(false);
  });
  
  test('should be able to delete item in shop inv', () => {
    newShop.addItem(newItem);
    expect(newShop.deleteItem(1)).toEqual(true);
    expect(newShop.deleteItem(3)).toEqual(false);
  });
});