import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
// import SideBar from "./SideBar";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Loading from "../layout/Loading";

const AdminDashboard = () => {
  const allproducts = useSelector((state) => state.products);
  const { products, loading } = allproducts;
  // UNIQUE CATAGORIES
  const categories =
    products?.products && products?.products?.map((item) => item.category);
  let uniqueProducts = [...new Set(categories)];
  const [dropdown, setDropdown] = useState("all");

  // FILTER PRODUCT BY CATEGORY
  let filteredProduct =
    products?.products &&
    products?.products?.filter((x) => x.category === dropdown);

  // DISPATCH ACTION
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // const [info, setInfo] = useState();
  // useEffect(() => {
  //   setInfo(
  //     localStorage.getItem("auth") !== undefined
  //       ? JSON.parse(localStorage.getItem("auth"))
  //       : ""
  //   );
  // }, []);
  // let orders = info?.user?.data?.orders;

  return (
    <div className="admin_dashboard">
      {/* <div>
        <SideBar />
      </div> */}
      {loading ? (
        <Loading />
      ) : (
        <div className="yoyo">
          <Profile />
          <Products
            products={products}
            setDropdown={setDropdown}
            uniqueProducts={uniqueProducts}
            dropdown={dropdown}
            filteredProduct={filteredProduct}
          />
        </div>
      )}
      {/* ORDERS */}

      {/* <div className="order_info_status orders">
          <h2>order Information</h2>
          {orders?.map((x, i) => {
            const {
              customer,
              details,
              order_status,
              order_type,
              payment_status,
              payment_type,
              total,
            } = x;
            // console.log(details.products);
            return (
              <div key={`total+${i}`} className="customer_details_info">
                <h3>customer information</h3>
                <div className="cus_info">
                  <p>Name: {customer?.name}</p>
                  <p>Phone: {customer?.phone}</p>
                  <p>Postcode: {customer?.postcode}</p>
                  <p>Address: {customer?.address}</p>
                </div>
                <div className="orderinfo_detail">
                  <h3>order details</h3>
                  <div className="order_costs_info">
                    <p>Order Status: {order_status}</p>
                    <p>Order Type: {order_type}</p>
                    <p>Payment status: {payment_status}</p>
                    <p>Payment Type: {payment_type}</p>
                    <p>Total costs: {total}</p>
                  </div>
                  <div className="sdhgvsj">
                    <table>
                      <caption>Ordered Products</caption>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Quantity</th>
                          <th>Unit Price</th>
                          <th>Total Price</th>
                        </tr>
                        {details?.products?.map((x, i) => {
                          const { name, quantity, unit_price, unit_total } = x;
                          return (
                            <tr key={`name+${i}`}>
                              <td>{name}</td>
                              <td>{quantity}</td>
                              <td>{unit_price}</td>
                              <td>{unit_total}</td>
                            </tr>
                          );
                        })}
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      */}
    </div>
  );
};

export default AdminDashboard;
