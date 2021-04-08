
interface IState {
    value: any[],
    total: number,
    cart: number
}
const initialState: IState = {
    value: [],
    total: 0,
    cart: 0
}
const reducerState = (state = initialState, action: any) => {
    switch (action.type) {

        case "addToCart":
            // const aa = state.value.push('sss')

            return { ...state, cart: state.cart + 1, value: [...state.value, { value: action.payload }],total:state.total+action.payload.amount }


        case "DeleteFromCart":
            const name = state.value.filter(value => {
                console.log(value.value.name)
                return value.value.name !== action.payload.name
            })
            console.log(name)
            return {
                ...state, cart: state.cart - 1, value: name,total:state.total-action.payload.amount
            }
         
        case "totalamount":
            return {...state,total:state.total +action.payload.totalAmount}    

        default:
            return state
    }
}


export default reducerState;

