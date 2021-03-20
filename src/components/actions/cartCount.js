export const CART_COUNT = 'CART_COUNT';

export const cartCount = function(count){

	return{
		type:CART_COUNT,
		payload:count
	}

}