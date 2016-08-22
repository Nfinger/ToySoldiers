import React from 'react'
import StripeCheckout from 'react-stripe-checkout'(
  "sk_test_pgVIxmVIM9xCqC97lryJnIPF"
);
 
class TakeMoney extends React.Component {
  onToken(token){
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(token => {
      alert(`We are in business, ${token.email}`);
    });
  }
 
  // ...
 
  render() {
    return (
      // ...
      <StripeCheckout
        name="Three Comma Co."
        description="Big Data Stuff"
        image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
        ComponentClass="div"
        panelLabel="Give Money"
        amount={1000000}
        currency="USD"
        stripeKey="..."
        locale="zh"
        email="info@vidhub.co"
        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        shippingAddress
        billingAddress={true}
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        zipCode={false}
        alipay
        bitcoin
        allowRememberMe
        token={this.onToken}
        // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
        // you are using multiple stripe keys
        reconfigureOnUpdate={false}
        // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
        // useful if you're using React-Tap-Event-Plugin
        triggerEvent="onTouchTap"
        >
        <button className="btn btn-primary">
          Checkout
        </button>
      </StripeCheckout>
    )
  }
}
export default TakeMoney