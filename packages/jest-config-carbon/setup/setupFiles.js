/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

global.__DEV__ = true;

global.requestAnimationFrame = function requestAnimationFrame(callback) {
  // TODO: replace with async version
  // setTimeout(callback);
  callback();
};

if (global.HTMLElement) {
  // This is a quirk that we need to bring in due to how our `tabbable` dependency
  // determines what nodes are focusable. Without this override, it's unable to
  // determine whether or not things are visible in JSDOM. With it, we get
  // expected tab order from the document.
  Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
    get() {
      return this.parentNode;
    },
  });
}
