import React, { Component } from "react"
import './App.css';
import Customer from "./components/Customer";

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
		return (
            <div>
                {
                    customers.map(customer => <Customer key={customer.id} id={customer.id} name={customer.name} image={customer.image} gender={customer.gender} bday={customer.bday} job={customer.job}/>)
                }
            </div>
		)
    }
}

export default App;