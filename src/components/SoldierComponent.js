import React from 'react';
import { Link } from 'react-router'
import { Thumbnail, Col } from 'react-bootstrap'

const style = {
  thumb:{
    padding : "0px",
    marginBottom: '5px',
    marginRight: "5px",
    width: "160px",
    height: "300px",
    border: "1px solid black"
  }
}

const Item = (props) => {
  const url = "/product/" + props.index
	return(
	 <Col style={style.thumb} xs={6} md={4}>
      <Thumbnail style={{border:"none"}} src={props.data["image1"]} alt="242x200">
        <p style={{position:"absolute",top:"160px"}} ><Link style={{color:"black"}} to={url}>{props.data["set"]}</Link></p>
      </Thumbnail>
    </Col>
      )
}

class SoldierComponent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SoldierComponent';
    }
    render() {
        const { soldiers } = this.props
        return(
        <div>
          {soldiers.map((soldier,index) => (
        	 <Item key={index} data={soldier} index={index}/>
          ))}
        </div>
        );
    }
}

export default SoldierComponent;
