import React, {Component} from "react";



class Product extends Component {
    constructor(props) {
        super(props)

        this.state ={
            shoes: "",
            pants: "",
            jacket: ""
        }
    }

    shoesChange(input) {
        this.setState({shoes: input})
        console.log(this.state.shoes)
    }
    
    pantsChange(input) {
        this.setState({pants: input})
        console.log(this.state.pants)
    }
    
    jacketChange(input) {
        this.setState({jacket: input})
        console.log(this.state.jacket)
    }
    
    cancelInput(input) {
        this.setState({shoes: input});
        this.setState({pants: input});
        this.setState({jacket: input});
        console.log(this.state);
    }



    render() {
        console.log(this.props)
        return(
            <div>
            <h1>Product</h1>
            {/* {this.props.inventoryList.map((e, index) => {
                return (<h3>{this.props.inventoryList[index].name}</h3>)
            })} */}
            <h3>{this.props.name}</h3>
            <h3>{this.props.price}$</h3>
            <img src={this.props.img} height="100px" width="100px"/>
            <input onChange={(e) => this.shoesChange(e.target.value)}></input>
            <input onChange={(e) => this.pantsChange(e.target.value)}></input>
            <input onChange={(e) => this.jacketChange(e.target.value)}></input>
            <button onClick={() => this.cancelInput("")}>Cancel</button>
            <button>Add</button>
            </div>
        )
    }
}

export default Product;