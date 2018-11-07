"use strict";

const sinon = require("sinon");
const chai = require("chai");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
chai.use(sinonChai);

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} = require("sequelize-test-helpers");

const Customer = require("../models/customer");
const order = require("../models/order");

describe("customer", () => {
  const Model = Customer(sequelize, dataTypes);
  const instance = new Model();

  checkModelName(Model)('Customer');

  describe("properties", () => {
    ;["cust_name", "phone_no"].forEach(checkPropertyExists(instance));
  })
  
  // describe("check associations", () => {
  //   beforeAll(() => {
  //     Model.associate({ order });
  //   });

  //   it("defined a hasMany association with Order", () => {
  //     expect(Model.hasMany).to.have.been.calledWith(order);
  //   });
  // });
});

