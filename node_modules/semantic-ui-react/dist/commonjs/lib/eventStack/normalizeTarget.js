'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Normalizes `target` for EventStack, because `target` can be passed as `boolean` or `string`.
 *
 * @param {boolean|string|HTMLElement|Window} target Value for normalization.
 * @return {HTMLElement|Window} A DOM node.
 */
var normalizeTarget = function normalizeTarget(target) {
  if (target === 'document') return document;
  if (target === 'window') return window;
  return target || document;
};

exports.default = normalizeTarget;