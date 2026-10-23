
const test = require("node:test");
const assert = require("node:assert");
const add = require("../app");

test("Addition test", () => {
    assert.strictEqual(add(10, 20), 30);
});

