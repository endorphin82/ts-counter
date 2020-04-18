import { Dispatch } from "redux"
import { ActionsTypes } from "../store"

export const increment = () => ({
    type: "INCREMENT",
    payload: 1
}as const)

export const decrement = () => ({
    type: "DECREMENT",
    payload: 2
}as const)

// export type ActionsTypes = any
// Type GetStateType = () => AppStateType

// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>