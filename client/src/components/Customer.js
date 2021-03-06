import React from "react"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"

// <CustomerProfile id={this.props.id} name={this.props.name} image={this.props.image}/>
// <CustomerInfo gender={this.props.gender} bday={this.props.gender} job={this.props.job}/>

class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell align="center">{this.props.id}</TableCell>
                <TableCell align="center"><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell align="center">{this.props.name}</TableCell>
                <TableCell align="center">{this.props.gender}</TableCell>
                <TableCell align="center">{this.props.bday}</TableCell>
                <TableCell align="center">{this.props.job}</TableCell>
            </TableRow>
        )
    }
}

// class CustomerProfile extends Component {
//     render() {
//         return (
//             <div>
//                 <img src={this.props.image} alt="profile"/>
//                 <h2>{this.props.name}-{this.props.id}</h2>
//             </div>
//         )
//     }
// }

// class CustomerInfo extends Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.gender}</p>
//                 <p>{this.props.bday}</p>
//                 <p>{this.props.job}</p>
//             </div>
//         )
//     }
// }
export default Customer