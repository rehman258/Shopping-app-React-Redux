export const UpdateCart = 'UpdateCart';

export function updateCart(elem){
	return{
		type: UpdateCart,
		payload:elem

	}
}