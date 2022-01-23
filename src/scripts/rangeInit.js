function rangeInit () {
	const rangeWrap = document.querySelectorAll ( '.range-wrap' );

	if ( rangeWrap.length === 0 ) {
		return false;
	}

	rangeWrap.forEach ( wrap => {
		rangeHandler ( wrap );
	} )
}

function rangeHandler ( wrap ) {
	const range = wrap.querySelector ( '.range__input' );
	const fill = wrap.querySelector ( '.range__fill' );

	if ( !range || !fill ) {
		return false;
	}

	range.addEventListener ( 'input', () => {
		const value = range.value;

		fill.style.width = `${ value }%`;
	} );
}


export default rangeInit;
