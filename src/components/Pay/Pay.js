import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const KEY =
  "pk_test_51JunwYGtjqsSIbse5lIZ8yWlaR9qXOpomVp3rNXMbUK5RoJlvK1ItTRnTKxH817Ryu2HF9vV0cuVI9YFN3eDP0Cb00eTkOz9sQ";

const Pay = ({ total }) => {
  const [stripeSToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeSToken.id,
            amount: total * 100,
          }
        );
        console.log("payment", res.data);
        res.data && navigate("/success", { data: res.data });
      } catch (err) {
        console.log(err);
      }
    };
    stripeSToken && makeRequest();
  }, [stripeSToken, total, navigate]);

  return (
    <div>
      <StripeCheckout
        name="Sujon's Shop"
        image=""
        billingAddress
        shippingAddress
        description="You have only $20"
        amount={total * 100}
        token={onToken}
        stripeKey={KEY}
      >
        CHECKOUT NOW
      </StripeCheckout>
    </div>
  );
};

export default Pay;
