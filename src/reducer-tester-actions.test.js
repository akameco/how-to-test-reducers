// @flow
import reducerTester from 'reducer-tester'
import reducer, { initialState, actions } from '.'

reducerTester({
  reducer,
  state: initialState,
  tests: [
    { type: '@@INIT' },
    actions.inc(),
    actions.dec(),
    actions.setText('test')
  ]
})
