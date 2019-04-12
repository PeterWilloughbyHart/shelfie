import React, {Component} from "react";
import axios from 'axios';



class Form extends Component {
    constructor(props) {
        super(props)
    }


// step 6, still need to send req.body of state

newProduct() {
    axios.post("/api/inventory").then(response => {
})
    this.props.collectData()
}



    render() {
        return(
            <div>Form</div>
        )
    }
}

export default Form;