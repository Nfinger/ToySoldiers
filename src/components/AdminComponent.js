import React from 'react';
import Rebase from 're-base';
import { Table, Form, Button } from 'react-bootstrap'

const base = Rebase.createClass("https://fingersoldiers.firebaseio.com")

const style = {
	table:{
		position: "relative",
		right: "1%",
		background: "white"
	}
}

class AdminComponent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'AdminComponent';
        this.state = {
        	data : [],
        	soldiers : [],
        	index : '',
        	file: '',
	      	imagePreviewUrl: ''
        }
    }

	componentDidMount(){
	    this.init()
	}

	componentWillReceiveProps(nextProps){
		this.setState({data:nextProps.data})
	}

	componentWillUnmount(){
	  console.log("admin")
	  console.log(this.ref)
	  base.removeBinding(this.ref);
	}

	init(){
	    this.ref = base.syncState("soldiers", {
	      context: this,
	      asArray: true,
	      state: 'soldiers'
	    })
	}

    handleSubmit(e){    	
	    if (this.state.data !== ''){
	      base.post("soldiers", {
			  data: this.state.soldiers.concat([this.state.data.data])
			})
	    }
	}

	_handleImageChange(e) {
	    e.preventDefault();
	    this.setState({index:e.target.id})

	    let reader = new FileReader();
	    let file = e.target.files[0];

	    reader.onloadend = (e) => {
	      this.setState({
	        file: file,
	        imagePreviewUrl: reader.result
	      });
		    this.state.data.data[this.state.index][e.target.name] = this.state.imagePreviewUrl
	    }
	    reader.readAsDataURL(file)

	  }
	render() {
		const { data } = this.state

		return(
			<div>
				<Form onSubmit={this.handleSubmit.bind(this)}>
					<Table style={style.table} striped bordered condensed hover>
					    <thead>
					      <tr>
					      	<th>ID</th>
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
					{data.data != undefined ? data.data.map((info, index) => (
					      	<tr>
						      	<td>{index}</td> 
						      	<td><input style={{width:"200px"}} type="file" onChange={(e)=>this._handleImageChange(e)} id={index} name="image1"/><input style={{width:"200px"}} type="file" onChange={(e)=>this._handleImageChange(e)} id={index} name="image2"/><input style={{width:"200px"}} type="file" onChange={(e)=>this._handleImageChange(e)} id={index} name="image3"/></td>
						      	<td>{info["set"]}</td>
						        <td>{info["set_description"]}</td>
						        <td>{info["era"]}</td>
						        <td>{info["country_depicted"]}</td>
						        <td>{info["brand"]}</td>
						        <td>{info["condition"]}</td>
						        <td>{info["number_held_in_inventory"]}</td>
						        <td>{info["actual_on_hand"]}</td>
						        <td>{info["price"]}</td>
						    </tr>
						  

					)) : ''}
						</tbody>
					</Table>
					<Button type='submit'>Submit</Button>
				</Form>
			</div>
		)
	}
}

export default AdminComponent;
