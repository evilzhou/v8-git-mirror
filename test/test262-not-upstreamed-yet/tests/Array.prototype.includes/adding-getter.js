// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes sees a new element added by a getter that is hit during iteration
author: Domenic Denicola
---*/

var arrayLike = {
    length: 5,
    0: 'a',
    get 1() {
        this[2] = 'c';
        return 'b';
    }
};

var result = Array.prototype.includes.call(arrayLike, 'c');

if (result !== true) {
    $ERROR('Expected array-like to contain "c", which was added by the getter for the 1st element');
}
