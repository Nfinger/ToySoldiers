import React, {PropTypes as T} from 'react';
import Rebase from 're-base';
import { Table, Button } from 'react-bootstrap'

const base = Rebase.createClass("https://fingersoldiers.firebaseio.com")

const style = {
	table:{
		position: "relative",
		right: "1%",
		background: "white"
	},
	textbox:{
		width:"100px",
		height:"500px"
	}
}

class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Inventory';
        this.state = {
        	inventory : [],
        	file: '',
	      	imagePreviewUrl: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentWillMount(){
	    this.init()   
	}
	componentWillReceiveProps(nextProps){
	    this.init();
	}
	componentWillUnmount(){
	  base.removeBinding(this.ref);
	}
	init(){
	    this.ref = base.syncState("/soldiers", {
	      context: this,
	      asArray: true,
	      state: 'inventory'
	    })
	}
	_handleImageChange(e) {
	    e.preventDefault();
	    let reader = new FileReader();
	    let file = e.target.files[0];
	    let index = e.target.id
	    let name = e.target.name
	    reader.onloadend = (e) => {
	      this.setState({
	        file: file,
	        imagePreviewUrl: reader.result
	      });
		    this.state.inventory[0][index][name] = this.state.imagePreviewUrl
	    	this.setState({inventory:this.state.inventory})
	    }
	    reader.readAsDataURL(file)

	  }
	handleChange(e){
		this.state.inventory[0][e.target.id][e.target.name] =  e.target.value
		this.setState({inventory:this.state.inventory})		
	}
	render() {
		const { inventory } = this.state
		const realIndex = 0
        return( 
        <div>
        <Table style={style.table} striped bordered condensed hover>
		    <thead>
		      <tr>
		      	<th>Images</th>
		        <th>Set</th>
		        <th>Description</th>
		        <th>Era</th>
		        <th>Country</th>
		        <th>Brand</th>
		        <th>Condition</th>
		      	<th>Number Held in Inventory</th>
		      	<th>Actual on Hand</th>
		      	<th>Price</th>
		      </tr>
		    </thead>
		    <tbody>
        	{inventory != [] ? inventory.map((set)=>(
        		set.map((info,index) =>(
				      <tr> 
				      	<td><input style={{width:"200px"}} type="file" onChange={this._handleImageChange.bind(this)} id={index} name="image"/><input style={{width:"200px"}} type="file" onChange={this._handleImageChange.bind(this)} id={index} name="image1"/><input style={{width:"200px"}} type="file" onChange={this._handleImageChange.bind(this)} id={index} name="image2"/></td>
				      	<td><textArea style={style.textbox} name="set" id={index} onChange={this.handleChange} >{info["set"]}</textArea></td>
				        <td><textArea style={style.textbox} name="set_description" id={index} onChange={this.handleChange} >{info["set_description"]}</textArea></td>
				        <td><textArea style={style.textbox} name="era" id={index} onChange={this.handleChange} >{info["era"]}</textArea></td>
				        <td><textArea style={style.textbox} name="country_depicted" id={index} onChange={this.handleChange} >{info["country_depicted"]}</textArea></td>
				        <td><textArea style={style.textbox} name="brand" id={index} onChange={this.handleChange} >{info["brand"]}</textArea></td>
				        <td><textArea style={style.textbox} name="condition" id={index} onChange={this.handleChange} >{info["condition"]}</textArea></td>
				        <td><textArea style={style.textbox} name="number_held_in_inventory" id={index} onChange={this.handleChange} >{info["number_held_in_inventory"]}</textArea></td>
				        <td><textArea style={style.textbox} name="actual_on_hand" id={index} onChange={this.handleChange} >{info["actual_on_hand"]}</textArea></td>
				        <td><textArea style={style.textbox} name="price" id={index} onChange={this.handleChange} >{info["price"]}</textArea></td>
					  </tr>
					
				)))) : ''}
        	</tbody>
        	</Table>
        </div>
        );
    }
}
Inventory.contextTypes = {
	router : T.object
}

export default Inventory;
