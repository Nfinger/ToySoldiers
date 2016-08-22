import React, {PropTypes as T} from 'react';
import { Nav,NavItem } from "react-bootstrap";
import AdminContainer from "./AdminContainer"
import Inventory from "./InventoryContainer"

class AdminMain extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'AdminMain';
        this.state = {
        	tab : 1
        }
    }
    handleSelect(eventKey) {
	    event.preventDefault();
        const num = parseInt(eventKey)
	    this.setState({tab:num})
	}
    render() {
        return (
        <div>
	    	<Nav bsStyle="tabs" onSelect={this.handleSelect.bind(this)}>
		        <NavItem eventKey="1" >Add Excel Sheet</NavItem>
		        <NavItem eventKey="2" href="/inventory">Check Inventory</NavItem>
		    </Nav>
		    {this.state.tab === 1 ? <AdminContainer /> : <Inventory />}
		</div>
        );
    }
}

AdminMain.contextTypes={
	router : T.object
}

export default AdminMain;
