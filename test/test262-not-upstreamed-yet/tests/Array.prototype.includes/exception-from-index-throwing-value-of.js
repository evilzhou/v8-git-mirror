// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes should terminate if an exception occurs converting the fromIndex to a number
negative: Test262Error
includes: [Test262Error.js]
---*/

var fromIndex = {
    valueOf: function () {
        throw new Test262Error('This error should be re-thrown');
    }
};

var trappedZero = {
    length: 1,
    get 0() {
        $ERROR('Should not try to get the zeroth element');
    }
};

Array.prototype.includes.call(trappedZero, 'a', fromIndex);
