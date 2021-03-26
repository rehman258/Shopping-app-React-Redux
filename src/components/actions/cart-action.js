export const DEFAULTFILLCART = 'DEFAULTFILLCART';

export const UpdateCart = 'UpdateCart';
export const DeleteItemCart = 'DeleteItemCart';
export const CALCTYPESETED = 'CALCTYPESETED';

export function defaultFill(elem){
	let filterElem = elem.filter(item => item.isInCart)
	return{
		type:DEFAULTFILLCART,
		payload:filterElem
	}
}

export function updateCart(elem){
	return{
		type: UpdateCart,
		payload:elem
	}
}

export function DeleteItemCartAction(elem){
	return{
		type: DeleteItemCart,
		payload:elem
	}
}
export function CalcItemsCount(elem){
	return{
		type:CALCTYPESETED,
		payload:elem
	}
}


