import React from 'react';
import Rebase from 're-base';
import { Link } from "react-router"
import { Carousel, ListGroup, ListGroupItem, Col } from 'react-bootstrap';


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

const BrandLinks = (props) => {
	Array.prototype.contains = function(v) {
	    for(var i = 0; i < this.length; i++) {
	        if(this[i] === v) return true;
	    }
	    return false;
	};

	Array.prototype.unique = function() {
	    var arr = [];
	    for(var i = 0; i < this.length; i++) {
	        if(!arr.contains(this[i])) {
	            arr.push(this[i]);
	        }
	    }
	    return arr; 
	}
    const {data} = props
    const brands = []
    var unique = []
    var url = []
    data.map((object) =>(brands.push(object["brand"])))
  	unique = brands.unique()
  	unique.map((brand) =>(url.push("soldiers/brand/" + brand)))

    return(
    <ListGroup>
      <ListGroupItem style={style.listHeader}>Manufacturers</ListGroupItem>
      {unique.map((brand,index)=>(
      	brand !== '' ? <ListGroupItem key={index}><Link style={{color:"black"}} to={url[index]}>{brand}</Link></ListGroupItem> : ''
      ))}
    </ListGroup>
    )
}

const EraLinks = (props) => {
    Array.prototype.contains = function(v) {
        for(var i = 0; i < this.length; i++) {
            if(this[i] === v) return true;
        }
        return false;
    };

    Array.prototype.unique = function() {
        var arr = [];
        for(var i = 0; i < this.length; i++) {
            if(!arr.contains(this[i])) {
                arr.push(this[i]);
            }
        }
        return arr; 
    }
    const {data} = props
    const eras = []
    var unique = []
    var url = []
    data.map((object) =>(eras.push(object["era"])))
    unique = eras.unique()
    unique.map((era) =>(url.push("soldiers/era/" + era)))

    return(
    <ListGroup>
      <ListGroupItem style={style.listHeader}>Historical Era</ListGroupItem>
      {unique.map((era,index)=>(
        era !== '' ? <ListGroupItem key={index}><Link style={{color:"black"}} to={url[index]}>{era}</Link></ListGroupItem> : ''
      ))}
    </ListGroup>
    )
}

const CountryLinks = (props) => {
    Array.prototype.contains = function(v) {
        for(var i = 0; i < this.length; i++) {
            if(this[i] === v) return true;
        }
        return false;
    };

    Array.prototype.unique = function() {
        var arr = [];
        for(var i = 0; i < this.length; i++) {
            if(!arr.contains(this[i])) {
                arr.push(this[i]);
            }
        }
        return arr; 
    }
    const {data} = props
    const countries = []
    var unique = []
    var url = []
    data.map((object) =>(countries.push(object["country_depicted"])))
    unique = countries.unique()
    unique.map((counrty) =>(url.push("soldiers/country_depicted/" + counrty)))

    return(
    <ListGroup>
      <ListGroupItem style={style.listHeader}>Country Depicted</ListGroupItem>
      {unique.map((counrty,index)=>(
        counrty !== '' ? <ListGroupItem key={index}><Link style={{color:"black"}} to={url[index]}>{counrty}</Link></ListGroupItem> : ''
      ))}
    </ListGroup>
    )
}

class LinksComponent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'LinksComponent';
    	this.state = {
            soldiers : []
        }
    }
    componentDidMount(){
        this.init()
    }

    init(){
        this.ref = base.fetch("soldiers/0", {
          context: this,
          asArray: true,
          state: 'soldiers',
          then(result){
            this.setState({soldiers:result})
          }
        })
    }
    render() {
        return(
        	<span>
        		<BrandLinks data={this.state.soldiers} />
                <EraLinks data={this.state.soldiers} />
                <CountryLinks data={this.state.soldiers} />
        	</span>
        );
    }
}

export default LinksComponent;
