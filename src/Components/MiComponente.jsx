import { Component } from "react";


class MiComponente extends Component {
    render() { 
        return (
            <div>
                <h1>{this.props.nombre} </h1>  
            </div> );
    }
}
export default MiComponente;