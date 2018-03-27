# How to test reducers?

> Of course, Test with Jest.

## toEqual

[src/toEqual.test.js](src/toEqual.test.js)

```js
test('inc', () => {
  expect(reducer(initialState, { type: 'inc' })).toEqual({ count: 1, text: '' })
})
```

## toMatchObject

[src/toMatchObject.test.js](src/toMatchObject.test.js)

```js
test('inc', () => {
  expect(reducer(initialState, { type: 'inc' })).toMatchObject({ count: 1 })
})
```

## snapshot

[src/toMatchObject.test.js](src/toMatchObject.test.js)

```js
test('inc', () => {
  expect(reducer(initialState, { type: 'inc' })).toMatchSnapshot()
})
```

snapshot:

```
exports[`inc 1`] = `
Object {
  "count": 1,
  "text": "",
}
`;
```

## snapshot-diff

[src/snapshot-diff.test.js](src/snapshot-diff.test.js)

```js
test('inc', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, { type: 'inc' }))
  ).toMatchSnapshot()
})
```

snapshot:

```diff
exports[`inc 1`] = `
"Snapshot Diff:
- First value
+ Second value

  Object {
-   \\"count\\": 0,
+   \\"count\\": 1,
    \\"text\\": \\"\\",
  }"
`;
```

## reducer-tester

[src/reducer-tester.test.js](src/reducer-tester.test.js)

```js
reducerTester({
  reducer,
  state: initialState,
  tests: [{ type: 'inc' }, { type: 'dec' }] // Jest add any action...
})
```

snapshot:

```diff
exports[`inc 1`] = `
"Snapshot Diff:
- Before
+ After

  Object {
-   \\"count\\": 0,
+   \\"count\\": 1,
    \\"text\\": \\"\\",
  }"
`;
```

## License

MIT © [akameco](http://akameco.github.io)
