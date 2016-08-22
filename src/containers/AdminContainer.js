import React from 'react';
import Rebase from 're-base'
import AdminComponent from '../components/AdminComponent'

const base = Rebase.createClass("https://fingersoldiers.firebaseio.com")


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Admin';
        this.state = {
        	data:''
        }
        this.handleData = this.handleData.bind(this)
    }

	handleFileSelect(evt) {
		var file = evt.target.files[0];
		Papa.parse(file, {
			  header: true,
			  dynamicTyping: true,
			  complete: this.handleData
			  
			})
	}

	handleData(result){
        var string
        var res
        var keys = Object.keys(result.data[0])
        var newKeys = []
        keys.map((key)=>(
            res = key.replace(/\s/g, "\_"),
            res = res.toLowerCase(),
            newKeys.push(res)
        ))
        result.data.map((info,index) =>(
            keys.map((key,i)=>(
                result.data[index][newKeys[i]] = result.data[index][key],
                delete result.data[index][key]
            )),
            string = result.data[index]["set_description"],
            res = string.replace(/\uFFFD/g, "\'"),
            result.data[index]["set_description"] = res,
            string = result.data[index]["brand"],
            res = string.replace(/\uFFFD/g, "\'"),
            string = result.data[index]["price"],
            res = string.replace(/\$/g, " "),
            result.data[index]["brand"] = res,
            result.data[index]['image'] = '',
            result.data[index]['image1'] = '',
            result.data[index]['image2'] = '',
            info["set"] == '' ?
                delete result.data[index]      
            :
            ''
        ))
		this.setState({data:result})
	}



    render() {
        return( 
        <div>
        	<input onChange={this.handleFileSelect.bind(this)} type="file" id="csv-file" name="files"/>
        	<AdminComponent data={this.state.data} />
        </div>
        );
    }
}

export default Admin;
