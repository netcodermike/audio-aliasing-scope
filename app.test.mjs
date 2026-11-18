import assert from 'node:assert/strict';
import { foldedFrequency } from './app.mjs';
assert.equal(foldedFrequency(210, 280), -70);
assert.equal(foldedFrequency(80, 280), 80);
assert.equal(foldedFrequency(560, 280), 0);
assert.equal(Math.abs(foldedFrequency(140, 280)), 140);
const phase = Math.PI / 6;
for (let n = 0; n < 10; n++) {
  assert.ok(Math.abs(Math.sin(2*Math.PI*210*n/280 + phase) - Math.sin(2*Math.PI*(-70)*n/280 + phase)) < 1e-12);
}
