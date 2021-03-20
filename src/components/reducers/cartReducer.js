import { UpdateCart , IncCount,DicrCount, DeleteItemCart } from '../actions/cart-action';


const initialState	= {
	fetching:true,
	fetched:false,
	cartItems:[],
	error:{}
}
export default function cartReducer(state = initialState, {type,payload}){
	switch(type){

		case UpdateCart:
			return{
				...state,
				cartItems:payload
			}

		case IncCount:
			let incResult = state.cartItems.map(item => {
				if(item._id === payload._id){
					item = {...item, count:item.count + 1}
				}
				return item
			})
			return{
				...state,
				cartItems:incResult
			}

		case DicrCount:
			let dicrResult = state.cartItems.map(item=>{
				if(item._id === payload._id){
					if(item.count > 1){
						item = {...item,count:item.count-1}
					}
				}
				return item
			})
			return{
				...state,
				cartItems:dicrResult

			}


		case DeleteItemCart:

			let filteredDeleteItem = state.cartItems.filter(item=>
				item._id !== payload._id
			)

			return{
				...state,
				cartItems:filteredDeleteItem
			}
			
		default:
		return state
	}
}