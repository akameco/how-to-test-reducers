// @flow
import reducerTester from 'reducer-tester'
import reducer, { initialState, actions } from '.'

reducerTester({
  reducer,
  state: initialState,
  tests: [
    { type: 'inc' },
    { type: 'dec' },
    { type: 'setText', payload: 'test' }
  ]
})
