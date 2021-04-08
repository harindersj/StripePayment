import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "@material-ui/core";

const CURRENCY = "USD";

const fromDollarToCent = (amount: number) => amount * 100;

const onToken = (amount: any, description: string) => (token: any) =>
  axios
    .post("http://localhost:8282/payment", {
      description,
      token: "3232332",
      currency: CURRENCY,
      amount: fromDollarToCent(amount)
    })
    .then((result) => {
      console.log("success", result.data, result.status);
      alert("Payment Successful");
    })
    .catch((errorPayment) => {
      console.log("error", errorPayment);
      alert("Payment Error");
    });

const Checkout = (props: {
  name: string;
  description: string;
  amount: number;
  onClick: (value: boolean) => void;
}) => (
  <StripeCheckout
    name={props.name}
    description={props.description}
    amount={fromDollarToCent(props.amount)}
    token={onToken(props.amount, props.description)}
    currency={CURRENCY}
    stripeKey={"pk_test_5xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
    label="Pay 💳"
  >
    <Button
      onClick={() => props.onClick(false)}
      variant={"contained"}
      color="secondary"
    >
      Pay with card 💳
    </Button>
  </StripeCheckout>
);

export default Checkout;
