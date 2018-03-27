// @flow
import reducer, { initialState } from '.'

test('init', () => {
  // $FlowFixMe
  expect(reducer(initialState, { type: '@@INIT' })).toEqual(initialState)
})

test('inc', () => {
  expect(reducer(initialState, { type: 'inc' })).toEqual({ count: 1, text: '' })
})

test('dec', () => {
  expect(reducer(initialState, { type: 'dec' })).toEqual({
    count: -1,
    text: ''
  })
})

test('setText', () => {
  expect(reducer(initialState, { type: 'setText', payload: 'test' })).toEqual({
    count: 0,
    text: 'test'
  })
})
