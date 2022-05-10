import React from "react";
import { Route, Navigate } from "react-router";
import { useSelector } from "react-redux";

function PrivateRoute({ Element, ...rest }) {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          Element
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
