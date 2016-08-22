import React from 'react';
import Rebase from 're-base';
import { Link } from "react-router"
import { Carousel, ListGroup, ListGroupItem, Col, Thumbnail, Button } from 'react-bootstrap';
import HomeComponent from "../components/HomeComponent"
import LinksComponent from "../components/LinksComponent"
import FavoritesColumnComponent from "../components/FavoritesColumnComponent"
import CarouselComponent from "../components/CarouselComponent"

const base = Rebase.createClass("https://fingersoldiers.firebaseio.com")

const style={
	conainter:{
		marginTop: "1%"
	},
	listHeader:{
		color: "white",
		background: "#39819d", /* Old browsers */
        background: "-moz-linear-gradient(top, #39819d 0%, #132e4d 100%)", /* FF3.6-15 */
        background: "-webkit-linear-gradient(top, #39819d 0%,#132e4d 100%)", /* Chrome10-25,Safari5.1-6 */
        background: "linear-gradient(to bottom, #39819d 0%,#132e4d 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#39819d', endColorstr='#132e4d',GradientType=0 )"
	},
	listItem:{
		borderTop: "0",
		borderBottom: "0",
		paddingBottom: "0"
	}
}


class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'HomeContainer';
        this.state = {
        	soldiers : [],
        	cart : [],
        	total : 0,
        	working: false
        }
        // this.handleCart = this.handleCart.bind(this)
        this.handleStart = this.handleStart.bind(this)
    }
    componentDidMount(){
    	Snipcart.execute('bind', 'app.ready', this.handleStart)
	    this.init()
	}
	componentWillMount(){
		Snipcart.execute('bind', 'app.ready', this.handleStart);
	}
	componentWillUnmount(){
	  base.removeBinding(this.ref);
	}

	init(){
	    this.ref = base.syncState("soldiers/0", {
	      context: this,
	      asArray: true,
	      state: 'soldiers',
	      queries: {
	      	limitToFirst: 12
	      }
	    })
	}
	handleStart(){
		var cart = Snipcart.api.cart.get()
		var items = Snipcart.api.items.all();
		this.setState({
			total : cart.total,
			cart : items,
			working: true
			})
	}
	
    render() {
    	const { cart } = this.state
    	console.log(cart)
        return(
        	this.state.soldiers[0] != undefined ?
	        	<div style={style.conainter}>
	        		<Col xs={3} md={3}>
	        			<LinksComponent />
					</Col>
					<Col style={{paddingLeft : "0", paddingRight:"10px", width: "50%" }} xs={6} md={6}>
		    		  <CarouselComponent soldiers={this.state.soldiers} />
					  <HomeComponent soldiers={this.state.soldiers} />
					</Col>
					<Col md={3} sm={3}>
						<ListGroup style={{padding: "0",width: "100%"}}>
					      <Col sm={12} md={12} style={{padding: "0", paddingBottom: "5px"}}>
					        <ListGroupItem style={style.listHeader}>Shopping Cart</ListGroupItem>
					        {cart.length == 0 ? 
						    <ListGroupItem>No items in cart</ListGroupItem>
						    :
						    <ListGroupItem>{cart.map((item) => (<li>{item.name} x {item.quantity} : {item.unitPrice}</li>))}</ListGroupItem>}
						    <ListGroupItem>Subtotal : {this.state.total}</ListGroupItem>
						  </Col>
					      </ListGroup>
						<FavoritesColumnComponent soldiers={this.state.soldiers} />
					</Col>
				</div>
			: <div className="progress">
			      <div className="indeterminate"></div>
			  </div>
        );
    }
}


export default HomeContainer;
