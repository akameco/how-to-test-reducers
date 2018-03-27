// @flow
import reducer, { initialState } from '.'

test('init', () => {
  // $FlowFixMe
  expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('inc', () => {
  expect(reducer(initialState, { type: 'inc' })).toMatchObject({ count: 1 })
})

test('dec', () => {
  expect(reducer(initialState, { type: 'dec' })).toMatchObject({ count: -1 })
})

test('setText', () => {
  expect(
    reducer(initialState, { type: 'setText', payload: 'test' })
  ).toMatchObject({
    text: 'test'
  })
})
