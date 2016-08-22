import React from 'react';
import { Link } from 'react-router'
import Rebase from 're-base';
import { Thumbnail, Col, Button } from "react-bootstrap"

const base = Rebase.createClass("https://fingersoldiers.firebaseio.com")

const style = {
	thumb:{
		padding : "3px",
		marginRight: "5px",
        marginBottom: "5px",
		width: "32.6%",
        height: "300px",
        border: "1px solid black",
        background: '#999999'
	},
    thumbEnd:{
        padding : "3px",
        marginRight: "0px",
        marginBottom: "5px",
        width: "32.6%",
        height: "300px",
        border: "1px solid black",
        background: '#999999'
    },
    image:{
        width: "100%",
        height: "50%"
    }
}

const Unpack = (props) =>{
    const url = "/product/" + props.index
	return(
        (props.index + 1) % 3 == 0 ?
          <Col style={style.thumbEnd} xs={6} md={4}>
            <Link style={{color:"black"}} to={url}><img style={style.image} src={props.data["image1"]} alt="242x200" /></Link>
            <h3></h3>
            <p style={{position:"absolute",top:"150px"}}><Link style={{color:"black"}} to={url}>{props.data["set"]}</Link></p>
          </Col>
        :
        <Col style={style.thumb} xs={6} md={4}>
          <Link style={{color:"black"}} to={url}><img style={style.image} src={props.data["image1"]} alt="242x200" /></Link>
          <h3></h3>
          <p style={{position:"absolute",top:"150px"}}><Link style={{color:"black"}} to={url}>{props.data["set"]}</Link></p>
        </Col>
   	)
}

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'HomeComponent';
    }
    render() {
    	const { soldiers } = this.props
        return (
        <div>
        	{soldiers != '' ? soldiers.map((soldier,index) =>(
        		<Unpack data={soldier} key={index} index={index} />)) : ''}     	 
        </div>
        );
    }
}

export default HomeComponent;
