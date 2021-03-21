export const UpdateCart = 'UpdateCart';

export const IncCount = 'IncCartCount';
export const DicrCount = 'DicrCartCount';

export const DeleteItemCart = 'DeleteItemCart';

export function updateCart(elem){
	return{
		type: UpdateCart,
		payload:elem
	}
}

export function CalcCount(elem,calcType){
	if(calcType === "inc"){
		return{
			type: IncCount,
			payload:elem
		}
	}else if(calcType === "dicr"){
		return{
			type: DicrCount,
			payload:elem
		}
	}
	
}


export function DeleteItemCartAction(elem){
	return{
		type: DeleteItemCart,
		payload:elem

	}
}