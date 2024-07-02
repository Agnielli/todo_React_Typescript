import { useReducer } from "react"
import { Sub } from "../types"

interface FormState {
  inputValues: Sub
}

const INITIAL_STATE = {
  nick: '',
  subMonths: 0,
  avatar: '',
  description: ''
}

type FormReducerAction = {
  type: 'changeValue',
  payload: { 
    inputName: string,
    inputValue: string
  } 
} | { 
  type: 'clear' 
}

const formReducer = (state: FormState['inputValues'], action: FormReducerAction) => {
  switch (action.type) {
    case 'changeValue':
      const {inputName, inputValue} = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
    case 'clear':
      return INITIAL_STATE
      
    default:
      return state  // En este caso el default no sería necesario
    }
  }

  const useNewSubForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
  }

  export default useNewSubForm