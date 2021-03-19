export const Fetch_Products = 'Fetch_Products';

export function pushingProducts(actionitems){
	return{
		type: Fetch_Products,
		payload: actionitems

	}
}