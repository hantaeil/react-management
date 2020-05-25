import React, { Component } from "react"
import './App.css';
import Customer from "./components/Customer";
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

const styles = theme => ({
    root: {
        width: `100%`,
        marginTop: theme.spacing.unit * 3,
        overflowX: `auto`
    },
    table: {
        minWidth: 1080
    }
})

const customers = [
	{
		id : 1
      , name : `Han Tae-il`
      , image : `https://placeimg.com/64/64/1`
	  , gender : `male`
	  , bday : `910222`
	  , job : `freelancer web developer`
	}
  , {
        id : 2
      , name : `Seon Min-jung`
      , image : `https://placeimg.com/64/64/2`
      , gender : `female`
      , bday : `900524`
      , job : `Exhibition planner`
    }
]

class App extends Component {
	render() {
        const { classes } = this.props;
		return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>No</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>B-Day</TableCell>
                            <TableCell>Job</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map(customer => <Customer key={customer.id} id={customer.id} name={customer.name} image={customer.image} gender={customer.gender} bday={customer.bday} job={customer.job}/>)}
                    </TableBody>
                </Table>
            </Paper>
		)
    }
}

export default withStyles(styles)(App);