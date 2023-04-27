/* globals describe it expect */
const Ship = require("../src/Ship");
const ShipClass = require("../src/Ship");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});
describe("Ship", () => {
  it("can be instantiated", () => {
    const ship = new ShipClass("Dover");
    expect(ship).toBeInstanceOf(ShipClass);
  });
  
  it("has a starting port", () => {
    const ship = new ShipClass("Dover");
    expect(ship.startingPort).toBe("Dover");
  });
  it("can set sail", () => {
    const ship = new ShipClass("Dover");
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
});