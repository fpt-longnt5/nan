const test     = require('tap').test
    , bindings = require('bindings');

test('news', function (t) {
  t.plan(30);
  t.type(bindings('news').newNumber, 'function');
  t.type(bindings('news').newPositiveInteger, 'function');
  t.type(bindings('news').newNegativeInteger, 'function');
  t.type(bindings('news').newInt32FromPositive, 'function');
  t.type(bindings('news').newInt32FromNegative, 'function');
  t.type(bindings('news').newUint32FromPositive, 'function');
  t.type(bindings('news').newUint32FromNegative, 'function');
  t.type(bindings('news').newUtf8String, 'function');
  t.type(bindings('news').newLatin1String, 'function');
  t.type(bindings('news').newUcs2String, 'function');
  t.type(bindings('news').newRegExp, 'function');
  t.type(bindings('news').newStringObject, 'function');
  t.type(bindings('news').newNumberObject, 'function');
  t.type(bindings('news').newBooleanObject, 'function');
  t.type(bindings('news').newExternal, 'function');

  t.equal(bindings('news').newNumber(), 0.5);
  t.equal(bindings('news').newPositiveInteger(), 1);
  t.equal(bindings('news').newNegativeInteger(), -1);
  t.equal(bindings('news').newInt32FromPositive(), -1);
  t.equal(bindings('news').newInt32FromNegative(), -1);
  t.equal(bindings('news').newUint32FromPositive(), 0xFFFFFFFF);
  t.equal(bindings('news').newUint32FromNegative(), 0xFFFFFFFF);
  t.equal(bindings('news').newUtf8String(), 'strïng');
  t.equal(bindings('news').newLatin1String(), 'strïng');
  t.equal(bindings('news').newUcs2String(), 'strïng');
  t.deepEquals(bindings('news').newRegExp(), /foo/g);
  t.deepEquals(bindings('news').newStringObject(), new String("foo"));
  t.deepEquals(bindings('news').newNumberObject(), new Number(0.5));
  t.deepEquals(bindings('news').newBooleanObject(), new Boolean(true));
  t.equals(bindings('news').newExternal(), 'passed');
});

