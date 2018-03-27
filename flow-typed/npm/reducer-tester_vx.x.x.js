// @flow
declare module 'reducer-tester' {
  declare export default function reducerTester(_: {
    initialTest?: boolean,
    reducer: Function,
    state: Object,
    tests: Array<{ type: any, [key: any]: any }>,
    titlePrefix?: string
  }): void
}
