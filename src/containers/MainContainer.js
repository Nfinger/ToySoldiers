import React from 'react';
import { Link } from 'react-router'
import { Image, NavItem, Navbar, Nav, Col, Row, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'
import {observable} from 'mobx'

var config = {
    apiKey: "AIzaSyB5PtihyTGkaozgUZDue7IUTOXeiK2tQFY",
    authDomain: "fingersoldiers.firebaseapp.com",
    databaseURL: "https://fingersoldiers.firebaseio.com",
    storageBucket: "fingersoldiers.appspot.com",
  };
  firebase.initializeApp(config);


const cart = {
  items : [],
  subtotal : 0
}

const style={
    logo:{
        position: "relative",
    },
    conainter:{
        width:"100%",
        maxWidth:"1036px",
        padding: "10px",
        margin: "auto",
        backgroundColor: "white"
    },
    header:{
        borderBottom: "0.5px solid black",
        padding: "1%"
    },
    navContainer:{
        position:"relative",
        top: "75px",
        borderRadius: "10px",

    },
    nav:{
        borderRadius: "10px",
        background: "#39819d", /* Old browsers */
        background: "-moz-linear-gradient(top, #39819d 0%, #132e4d 100%)", /* FF3.6-15 */
        background: "-webkit-linear-gradient(top, #39819d 0%,#132e4d 100%)", /* Chrome10-25,Safari5.1-6 */
        background: "linear-gradient(to bottom, #39819d 0%,#132e4d 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#39819d', endColorstr='#132e4d',GradientType=0 )"                         
    },
    navItem:{
        color: "white"     
    },
    cart:{
        height: "5px"
    }

}


class MainContainer extends React.Component {
    constructor(props) {
        super(props),
        this.displayName = 'MainContainer';
        
    }
    render() {
        let children = null;
        if (this.props.children) {
          children = React.cloneElement(this.props.children)
        }
        return (
        	<div style={style.conainter} className="container">
                <header style={style.header}>
                    <Row style={{marginBottom: "0"}}>
                        <Col xs={4} md={4}>
                            <Link to="/"><Image style={style.logo} src="../styles/finger-site-logo.png" /></Link>
                        </Col>
                        <Col xs={8} md={8}>
                            <nav style={style.navContainer}>
                                <div style={style.nav} className="nav-wrapper">
                                  <ul id="nav-mobile ">
                                    <Col style={{paddingLeft:"10px", textAlign:"center", width:"13%"}} xs={2} md={2}>
                                        <li><Link to="/" style={style.navItem}>Home</Link></li>
                                    </Col>
                                    <Col style={{padding:"0", textAlign:"center", width:"16%"}} xs={3} md={3}>
                                        <li><Link to="about" style={style.navItem}>About Us</Link></li>
                                    </Col>
                                    <Col style={{padding:"0", textAlign:"center", width:"16%"}} xs={2} md={2}>
                                        <li><Link to="soldiers/All/All" style={style.navItem}>Products</Link></li>
                                    </Col>
                                    <Col style={{paddingLeft:"10px", width:"40%"}} xs={3} md={3}>
                                        <li><Link to="policy" style={style.navItem}>Shipping & Refund Policy</Link></li>
                                    </Col>
                                    <Col style={{padding:"0", textAlign:"center", width:"15%"}} xs={2} md={2}>
                                        <li><Link to="/cart" style={style.navItem}>Cart</Link></li>
                                    </Col>
                                  </ul>
                                </div>
                              </nav>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: "0",marginTop:"0.4%"}}>
                        <span style={{fontSize: "0.8em", paddingLeft:"2%"}}>Selection, Quality, Integrity</span>
                    </Row>
                </header>
        		{children}
        	</div>
        	);
    }
}

export default MainContainer;
