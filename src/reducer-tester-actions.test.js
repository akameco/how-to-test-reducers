// @flow
import reducerTester from 'reducer-tester'
import reducer, { initialState, actions } from '.'

reducerTester({
  reducer,
  state: initialState,
  tests: [actions.inc(), actions.dec(), actions.setText('test')]
})
