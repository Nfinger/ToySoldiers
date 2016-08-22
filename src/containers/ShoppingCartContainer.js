import React, { PropTypes as T } from 'react';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react'



class ShoppingCartContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ShoppingCartContainer';
        this.move = this.move.bind(this)
    }
    componentDidMount(){
        Snipcart.api.configure('allowed_shipping_methods', ['fedex-2-day','fedex-express-saver'])
        Snipcart.api.modal.show()
        Snipcart.subscribe('cart.closed', this.move);
    }
    move(){
        console.log("Move")
        this.context.router.push('/')
    }
    render() {
        return( 
        <div>
        	
        </div>
        );
    }
}

ShoppingCartContainer.contextTypes={
    router : T.object
}

export default ShoppingCartContainer;
