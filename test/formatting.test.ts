import { expect } from "chai";
import * as formatting from "../dst/formatting";

describe("#formatStringKey()", () => {
  it("should prefix the string with 0x, capitalize letters, and be 8 digits", () => {
    expect(formatting.formatStringKey(0x12ab)).to.equal("0x000012AB");
  });

  it("should throw if the value is > 32 bit", () => {
    expect(() => formatting.formatStringKey(0x123456780)).to.throw();
  });

  it("should throw if the value is negative", () => {
    expect(() => formatting.formatStringKey(-1)).to.throw();
  });
});

describe("#formatResourceType()", () => {
  it("should capitalize letters and and be 8 digits", () => {
    expect(formatting.formatResourceType(0x12ab)).to.equal("000012AB");
  });

  it("should throw if the value is > 32 bit", () => {
    expect(() => formatting.formatResourceType(0x123456780)).to.throw();
  });

  it("should throw if the value is negative", () => {
    expect(() => formatting.formatResourceType(-1)).to.throw();
  });
});

describe("#formatResourceGroup()", () => {
  it("should capitalize letters and and be 8 digits", () => {
    expect(formatting.formatResourceGroup(0x12ab)).to.equal("000012AB");
  });

  it("should throw if the value is > 32 bit", () => {
    expect(() => formatting.formatResourceGroup(0x123456780)).to.throw();
  });

  it("should throw if the value is negative", () => {
    expect(() => formatting.formatResourceGroup(-1)).to.throw();
  });
});

describe("#formatResourceInstance()", () => {
  it("should capitalize letters and and be 16 digits", () => {
    expect(formatting.formatResourceInstance(0x12abn)).to.equal("00000000000012AB");
  });

  it("should throw if the value is > 64 bit", () => {
    expect(() => formatting.formatResourceInstance(0xFFFFFFFFFFFFFFFFFFFFn)).to.throw();
  });

  it("should throw if the value is negative", () => {
    expect(() => formatting.formatResourceInstance(-1n)).to.throw();
  });
});

describe("#formatResourceKey()", () => {
  it("should format given values with : delimeter", () => {
    expect(formatting.formatResourceKey(0x12345678, 0x87654321, 0x1234n)).to.equal("12345678:87654321:0000000000001234");
  });

  it("should format given values with the given delimeter", () => {
    expect(formatting.formatResourceKey(0x12345678, 0x87654321, 0x1234n, '-')).to.equal("12345678-87654321-0000000000001234");
  });
});

// all code paths for formatAsHexString() are used by the other functions,
// so if they pass, this is working as intended
