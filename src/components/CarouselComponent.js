import React from 'react';
import { Link } from "react-router"
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
	},
	carousel:{
		height:"262px",
		width: "100%",
		marginBottom: "1%",
		border: "1px solid black"
	},
	carouselItem:{
		height: "240px",
		width:"95%",
		padding: "20px",
		paddingRight: "0"
	},
	carouselCaption:{
		color:"black",
		position:"absolute",
		width: "300px",
		right: "20%",
		top: "70%",
		zIndex: "1"
	}
}


class CarouselComponent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CarouselComponent';
    }
    render() {
        return(
        	<Carousel indicators={false} nextIcon={null} prevIcon={null} style={style.carousel}>
		      <Carousel.Item style={style.carouselItem}>
		      	<Link style={{color:"black"}} to="product/0"><img width={478} height={262} alt="900x500" src={this.props.soldiers[0]["image"]}/></Link>
			      <Carousel.Caption style={style.carouselCaption}>				        
			        <Link style={{color:"black"}} to="product/0"><p>{this.props.soldiers[0]["set"]}</p></Link>
			      </Carousel.Caption>
		      </Carousel.Item>    
		    <Carousel.Item style={style.carouselItem}>
		      <Link style={{color:"black"}} to="product/1"><img width={478} height={262} alt="900x500" src={this.props.soldiers[1]["image"]}/></Link>
		      <Carousel.Caption style={style.carouselCaption}>
		        <Link style={{color:"black"}} to="product/1"><p>{this.props.soldiers[1]["set"]}</p></Link>
		      </Carousel.Caption>
		    </Carousel.Item>
		    <Carousel.Item style={style.carouselItem}>
		      <Link style={{color:"black"}} to="product/2"><img width={478} height={262} alt="900x500" src={this.props.soldiers[2]["image"]}/></Link>
		      <Carousel.Caption style={style.carouselCaption}>				        
		        <Link style={{color:"black"}} to="product/2"><p>{this.props.soldiers[2]["set"].substring(0,50)}</p></Link>
		      </Carousel.Caption>
		    </Carousel.Item>
		  </Carousel>
        );
    }
}

export default CarouselComponent;
