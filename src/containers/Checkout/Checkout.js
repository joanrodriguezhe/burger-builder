import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }
    CheckoutCancelled = () => {
        this.props.history.goBack();
    }

    CheckoutContinued = () => {
        this.props.history.replace('checkout/contact-data');
    }
    
    render() {

        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    CheckoutCancelled={this.CheckoutCancelled}
                    CheckoutContinued={this.CheckoutContinued} />
            </div>
        )
    }
}

export default Checkout;