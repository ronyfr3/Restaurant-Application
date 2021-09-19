import React from "react";
import { Route, Redirect } from "react-router-dom";

const CustomerProtectRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (
          JSON.parse(localStorage.getItem("auth"))?.user?.data?.profile
            ?.role === "Customer"
        ) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};

export default CustomerProtectRoute;
