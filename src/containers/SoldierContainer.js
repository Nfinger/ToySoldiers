import React from 'react';
import Rebase from 're-base';
import { Link } from "react-router"
import { Carousel, ListGroup, ListGroupItem, Col } from 'react-bootstrap';
import SoldierComponent from "../components/SoldierComponent"
import LinksComponent from "../components/LinksComponent"

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


class SoldierContainer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SoldierContainer';
        this.state = {
            soldiers : [],
            type: this.props.params["type"],
            filter : this.props.params["filter"]
        }
    }

    componentDidMount(){
        this.init()
    }


    componentWillReceiveProps(nextProps){
        this.setState({
            type : nextProps.params['type'],
            filter : nextProps.params['filter']
        })
        base.removeBinding(this.ref)
        this.init()
    }

    componentWillUnmount(){
      base.removeBinding(this.ref);
    }

    init(){
        if (this.state.type != "All"){
            this.ref = base.listenTo("soldiers/0", {
              context: this,
              asArray: true,
              state: 'soldiers',
              queries: {
                orderByChild: this.state.type,
                equalTo: this.state.filter
              },
              then(result){
                this.setState({soldiers:result})
              }
            })
        }
        else{
            this.ref = base.listenTo("soldiers/0", {
              context: this,
              asArray: true,
              state: 'soldiers',
              then(result){
                this.setState({soldiers:result})
              }
            })
        }
    }
    render() {
        return(
        <div style={style.conainter}>
          <Col xs={3} md={3} style={{height:"100%"}}>
                <LinksComponent />
            </Col>
          <Col md={9} smOffset={1} style={{paddingLeft:"0px",marginLeft:"0px"}}>
            <SoldierComponent soldiers={this.state.soldiers} />
          </Col>
        </div>
        );
    }
}

export default SoldierContainer;
