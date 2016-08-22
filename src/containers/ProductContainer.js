import React, { PropTypes as T } from 'react';
import Rebase from 're-base';
import { Row, Col, Modal, Button, Jumbotron, Glyphicon, FormControl } from 'react-bootstrap'

const base = Rebase.createClass("https://fingersoldiers.firebaseio.com")

const style={
	conainter:{
		marginTop: "1%"
	},
	image:{
		width: "100%",
		height: "200px"
	},
	bigImage:{
		width: "100%",
		height: "80%"
	}
}

class ProcuctContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ProcuctContainer';
        this.state = {
        	soldiers : [],
        	showModal: false,
        	quantity: 1
        }
    }
    componentDidMount(){
	    this.init()
	    Snipcart.api.cart.start()
	    .then(function(cart){
	    	console.log(cart)
	    })
		Snipcart.subscribe('cart.closed', this.move);
	}
    move(){
    	let url = "/product/" + this.props.params["item"]
        this.context.router.push(url)
    }

	componentWillUnmount(){
	  base.removeBinding(this.ref);
	}

	init(){
	    this.ref = base.syncState("soldiers/0", {
	      context: this,
	      asArray: true,
	      state: 'soldiers'
	    })
	}

	close(){
    	this.setState({ showModal: false });
  	}
	open(){
	    this.setState({ showModal: true });
	}
	handleClick(){
		const soldier = this.state.soldiers[this.props.params["item"]]
		soldier["purchaseQuantity"] = this.state.quantity
		this.props.cart.items.push(soldier)
		this.props.cart.subtotal += 15
		this.context.router.push('/')
	}
	handleChange(e){
		this.setState({quantity: e.target.value})
	}
    render() {
    	const soldier = this.state.soldiers[this.props.params["item"]]
    	const id = this.props.params['item'].toString()
    	let url = "/product/" + this.props.params["item"]
        return ( soldier != undefined ?
        	<div style={style.conainter}>
        		<Col md={8}>
	        		<Row>
	        			<Col md={12}>
	        				<img onClick={this.open.bind(this)} style={style.image} src={soldier["image"]} />
	        			</Col>
	        		</Row>
	        		<Row>
	        			<Col md={12}>
	        				<h3 style={{textDecoration:"underline"}} >{soldier["set"]}</h3>
	        			</Col>
	        		</Row>
	        		<Row>
	        			<Col md={12}>
	        				<p >{soldier["set_description"]}</p>
	        			</Col>
	        		</Row>

	        		<Modal style={{background:"none",width:"1000px",height:"800px"}} show={this.state.showModal} onHide={this.close}>
			          <Modal.Body closeButton onClick={this.close.bind(this)}>
	        				<img style={style.bigImage} src={soldier["image"]} />
			          </Modal.Body>
			        </Modal>
			    </Col>
			    <Col md={4}>
			    	<Jumbotron>
			    	  <p>Only {soldier["number_held_in_inventory"]} left in stock</p>
					  <p>Price: ${soldier["price"]}</p>
					  { soldier["number_held_in_inventory"] > 0 ?
						  <button
							    className="snipcart-add-item"
							    data-item-id={id}
							    data-item-name={soldier['set']}
							    data-item-price={soldier['price']}
							    data-item-weight="20"
							    data-item-url={url}
							    data-item-description={soldier['set_description']}>

								<Glyphicon glyph="shopping-cart" />     Add to Cart
						  </button>
						: 
						<button
								disabled
							    className="snipcart-add-item"
							    data-item-id={id}
							    data-item-name={soldier['set']}
							    data-item-price={soldier['price']}
							    data-item-weight="20"
							    data-item-url="/"
							    data-item-description={soldier['set_description']}>

								<Glyphicon glyph="shopping-cart" />     Out of Stock
						  </button>}
					</Jumbotron>
			    </Col>
			    
	        </div>
        	: <div className="progress">
			      <div className="indeterminate"></div>
			  </div> 
        );
    }
}

ProcuctContainer.contextTypes={
	router : T.object
}

export default ProcuctContainer;
