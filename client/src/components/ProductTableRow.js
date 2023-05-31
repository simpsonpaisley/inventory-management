import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ProductTableRow({ product }) {
	const [countColour, setCountColour] = useState();
	const [onOrder, setOnOrder] = useState({});

	useEffect(() => {
		if (product.count <= product.lowStock) {
			setCountColour({ backgroundColor: '#c0392b' });
			setOnOrder(product.onOrder);
		} else if (product.count > product.lowStock) {
			setCountColour({ backgroundColor: '#14daff' });
			setOnOrder(product.onOrder);
		}
	}, []);

	return (
		<Link to={'/products/' + product._id}>
			<div className="productRow">
				<div className="productRowLeft">
					<h3 className="productRowTitle">{product.name}</h3>
					<div className="shortProductInfo">
						<h4>SKU:</h4>
						<p>{product.sku}</p>
					</div>
					<div className="shortProductInfo">
						<h4>Manufacturer:</h4>
						<p>{product.manufacturer}</p>
					</div>
					<div className="shortProductInfo">
						<h4>Date Ordered:</h4>
						<p>{onOrder.date}</p>
					</div>
					<div className="shortProductInfo">
						<h4>Quantity Ordered:</h4>
						<p style={{ fontWeight: 'bold' }}>{onOrder.qtyOrdered}</p>
					</div>
				</div>
				<div className="productRowRight">
					<div
						className="countDisplay"
						style={countColour}>
						<h4>Count</h4>
						<p>{product.count}</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default ProductTableRow;
