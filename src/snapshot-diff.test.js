// @flow
import snapshotDiff from 'snapshot-diff'
import reducer, { initialState } from '.'

test('init', () => {
  expect(
    // $FlowFixMe
    snapshotDiff(initialState, reducer(initialState, { type: '@@INIT' }))
  ).toMatchSnapshot()
})

test('inc', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, { type: 'inc' }))
  ).toMatchSnapshot()
})

test('dec', () => {
  expect(
    snapshotDiff(initialState, reducer(initialState, { type: 'dec' }))
  ).toMatchSnapshot()
})

test('setText', () => {
  expect(
    snapshotDiff(
      initialState,
      reducer(initialState, { type: 'setText', payload: 'test' })
    )
  ).toMatchSnapshot()
})
