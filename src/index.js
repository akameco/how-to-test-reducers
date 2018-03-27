// @flow
type Exact<T> = T & $Shape<T>

type State = {
  count: number,
  text: string
}

type Action = { type: 'inc' | 'dec' } | { type: 'setText', payload: string }

export const inc = (): Action => ({ type: 'inc' })
export const dec = (): Action => ({ type: 'dec' })
export const setText = (payload: string): Action => ({
  type: 'setText',
  payload
})

export const actions = { inc, dec, setText }

export const initialState = {
  count: 0,
  text: ''
}

export default (state: State = initialState, action: Action): Exact<State> => {
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + 1 }
    case 'dec':
      return { ...state, count: state.count - 1 }
    case 'setText':
      return { ...state, text: action.payload }
    default:
      return state
  }
}
