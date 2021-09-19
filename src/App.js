import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./layout/Home";
import About from "./layout/About/About";
import MenuItems from "./layout/Menu/MenuItems";
import Contact from "./layout/Contact/Contact";
import Checkout from "./layout/Checkout/Checkout";
import SetMeals from "./layout/Menu/layout/SetMeals";
import Account from "./components/Account/Account";
import Login from "./components/Account/Login";
import Register from "./components/Account/Register";
import Cart from "./components/Cart/Cart";
import AdminDashboard from "./admin/AdminDashboard";
import CustomerDashboard from "./admin/CustomerDashboard";
import PageNotFound from "./PageNotFound";
import CustomerProtectRoute from "./routes/ProtectRoute";
import AdminProtectRoute from "./routes/AdminProtectRoute";
import Footer from "./components/Footer/Footer";
import "./sass/main.scss";

// preloader then add slider

const App = () => {
  return (
    <div className="app">
      <Header />
      {/* <Notify /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={MenuItems} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <CustomerProtectRoute exact path="/checkout" component={Checkout} />
        <Route exact path="/set_meal/:id" component={SetMeals} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/cart" component={Cart} />
        <AdminProtectRoute
          exact
          path="/admin_dashboard"
          component={AdminDashboard}
        />
        <CustomerProtectRoute
          exact
          path="/customer_dashboard"
          component={CustomerDashboard}
        />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
