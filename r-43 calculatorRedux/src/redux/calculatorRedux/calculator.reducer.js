import {LOAD_ANSWER, LOAD_BUTTONS, LOAD_CLEAR, LOAD_BACKSPACE} from './calculator.actionTypes'

export const CALCULATOR_KEY = 'calculatorStore'

let initialState ={
    number:'',
    ans:'',
  
}
   



export const calculatorReducer = (state = initialState, action) =>{
    let {type, payload} = action
    
     switch(type){
        case LOAD_BUTTONS:
            return{
                ...state,
                ...payload,
                number:state.number.concat(action.payload)
           
                
            }

            case LOAD_ANSWER:
                 try{
                   return {
                    ...state,
                    ...payload,
                    ans:eval(state.number).toString()
                   }

                }catch(err){
                    return {
                        ...state,
                        ...payload,
                        ans:'Error'
                    }
                }
            //    return{
            //        ...state,
            //        ...payload,
            //        ans:eval(state.number).toString()
            //    }

               case LOAD_CLEAR:
                return{
                    ...state,
                    ...payload,
                    number:'',
                    ans:''
                }

                case LOAD_BACKSPACE:
                    return{
                        ...state,
                        ...payload,
                        number:(state.number).slice(0,-1),
                        ans:''
                    }

                default: return state
    }


}