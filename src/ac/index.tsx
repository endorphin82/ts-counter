import {INCREMENT, DECREMENT} from "./types"

export const increment = (p: number) => ({type: INCREMENT, payload: p} as const)

export const decrement = (p: number) => ({type: DECREMENT, payload: p} as const)

// export type ActionsTypes = any
// Type GetStateType = () => AppStateType

// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>