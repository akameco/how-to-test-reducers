// @flow
import reducer, { initialState } from '.'

test('init', () => {
  // $FlowFixMe
  expect(reducer(undefined, { type: '@@INIT' })).toMatchSnapshot()
})

test('inc', () => {
  expect(reducer(initialState, { type: 'inc' })).toMatchSnapshot()
})

test('dec', () => {
  expect(reducer(initialState, { type: 'dec' })).toMatchSnapshot()
})

test('setText', () => {
  expect(
    reducer(initialState, { type: 'setText', payload: 'test' })
  ).toMatchSnapshot()
})
