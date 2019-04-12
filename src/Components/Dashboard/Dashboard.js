import React, {Component} from "react";
import Product from "../Product/Product";
import axios from 'axios';



class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inventoryList: []
        }
      }
      
      componentDidMount() {
        this.collectData();
      }
        collectData() {
          axios.get("/api/inventory").then(response => {
          this.setState({inventoryList: response.data});
        })
        .catch(err => {
          console.log("Error in axios.get");
        })
      }

    render() {
        // console.log(this.props.inventoryList.name)
        console.log(this.props.inventoryList[0])
        return(
            <div>
                <h1>Dashboard</h1>
                {this.props.inventoryList.map((e, index) => {
                    return (<Product {...this.props.inventoryList[index]} key={index}/>)
                })}
            </div>  
        )
    }
}

export default Dashboard;