import React from 'react';
import { Link } from 'react-router'
import { Carousel, ListGroup, ListGroupItem, Col, Thumbnail, Button } from 'react-bootstrap';

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

const Unpack = (props) =>{
	const url = "/product/" + props.index
	return(
	<ListGroupItem><Link style={{color:"black"}} to={url}><img style={{width:"100%"}} src={props.soldier["image"]} alt="242x200" /></Link>
	<Link style={{color:"black"}} to={url}><p>{props.soldier["set"]}</p></Link></ListGroupItem>)
}

class FavoritesColumnComponent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'FavoritesColumnComponent';
        this.state = {
        	loops : 10
        }
    }
    render() {
    	const array = []
    	for (var i=3; i<this.state.loops; i++){
		   	array.push(<Unpack key={i} soldier={this.props.soldiers[i]} index={i} />)
		}

        return(
        <ListGroup>
	      <Col sm={12} md={12} style={{padding: "0"}}>
	        <ListGroupItem style={style.listHeader}>Featured Products</ListGroupItem>
		   	{array}
		  </Col>
	    </ListGroup>
	    );
    }
}

export default FavoritesColumnComponent;
