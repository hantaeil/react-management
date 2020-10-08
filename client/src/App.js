import React, { Component } from "react"
import './App.css';
import Customer from "./components/Customer";
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import CircularProgress from "@material-ui/core/CircularProgress"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

const styles = theme => ({
    root: {
        width: `100%`,
        marginTop: theme.spacing(3),
        overflowX: `auto`
    },
    table: {
        minWidth: 1080
    },
    progress: {
        margin: theme.spacing(2)
    }
})

/* const customers2 = [
    {
        id: 1,
        name: `Han Tae-il`,
        image: `https://placeimg.com/64/64/1`,
        gender: `male`,
        bday: `910222`,
        job: `freelancer web developer`
    }
  , {
        id: 2,
        name: `Seon Min-jung`,
        image: `https://placeimg.com/64/64/2`,
        gender: `female`,
        bday: `900524`,
        job: `Exhibition planner`
    }
] */

class App extends Component {
    state = {
        customers: "",
        completed: 0
    }
    componentDidMount() {
        this.timer = setInterval(this.progress, 20)
        this.callApi()
            .then(res => this.setState({customers: res}))
            .catch(err => console.error(err))
    }
    callApi = async() => {
        const res = await fetch(`/api/customers`)
        const body = await res.json()
        return body
    }
    progress = () => {
        const {completed} = this.state
        this.setState({completed: completed >= 100 ? 0 : completed + 1})
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">No</TableCell>
                            <TableCell align="center">Image</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Gender</TableCell>
                            <TableCell align="center">B-Day</TableCell>
                            <TableCell align="center">Job</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.customers ?
                            this.state.customers.map(customer => <Customer key={customer.id} id={customer.id} name={customer.name} image={customer.image} gender={customer.gender} bday={customer.birthday} job={customer.job}/>)
                            : <TableRow>
                                <TableCell colSpan="6" align="center">
                                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
                                </TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default withStyles(styles)(App);