export const Fetch_Products = 'Fetch_Products';

export function pushingProducts(elem){
	return{
		type: Fetch_Products,
		payload: elem

	}
}