import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import CreateModal from "./CreateModal";
import UpdateModal from "./UpdateModal";
import { MdUpdate } from "react-icons/md";
import { deleteProduct } from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";
import FlexStyle from "rakib-flex-style";

const Products = ({
  dropdown,
  setDropdown,
  products,
  uniqueProducts,
  filteredProduct,
}) => {
  //create
  const [show, setShow] = useState(false);
  //update
  const [show1, setShow1] = useState(false);
  const [prodID, setProdID] = useState();
  const updateID = (id) => {
    setShow1(true);
    setProdID(id);
  };
  const dispatch = useDispatch();
  const deleteID = (id) => {
    dispatch(
      deleteProduct({
        restaurant_id: 4,
        product_id: id,
      })
    );
    setTimeout(() => {
      alert("do you want to delete?");
      window.location.reload();
    });
  };
  return (
    <div className="admin_dashboard_info">
      <FlexStyle row center className="dsgfhjk">
        <p>total products</p>
        <span>{products?.products && products?.products.length}</span>
      </FlexStyle>
      <div className="admin_select_field">
        <div className="select">
          <select
            defaultValue={"DEFAULT"}
            onChange={(e) => {
              setDropdown(e.target.value);
            }}
          >
            <option value="DEFAULT" disabled hidden>
              Categories
            </option>
            <option value="all">All</option>
            {uniqueProducts &&
              uniqueProducts.map((x, i) => {
                return (
                  <option value={x} key={`x+${i}`}>
                    {x}
                  </option>
                );
              })}
          </select>
        </div>
        {/* CREATE PRODUCTS */}
        <button onClick={() => setShow(true)}>Add new product</button>
        {show && <CreateModal setShow={setShow} />}
      </div>
      <div className="sdhgvsj">
        <table>
          <caption>Product Summary</caption>
          <thead>
            <tr>
              <th>Id</th>
              <th>Category</th>
              <th>Title</th>
              <th className="asdoswoiud">Price</th>
              <th>Update</th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {dropdown === "all" ? (
              <>
                {products?.products &&
                  products?.products?.map((x, i) => {
                    const { id, category, category_id, price, title } = x;

                    return (
                      <>
                        <tr key={`price+${i}`}>
                          <td data-label="category_id">{category_id}</td>
                          <td data-label="category">{category}</td>
                          <td data-label="title">{title}</td>
                          <td data-label="price">{price}</td>
                          <td data-label="update">
                            <MdUpdate
                              className="grupdate"
                              onClick={() => updateID(id)}
                            />
                            {show1 && (
                              <UpdateModal
                                setShow1={setShow1}
                                products={products}
                                id={prodID}
                              />
                            )}
                          </td>

                          <td data-label="delete">
                            <AiFillDelete
                              className="aidelete"
                              onClick={() => deleteID(id)}
                            />
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </>
            ) : (
              <>
                {filteredProduct?.map((x, i) => {
                  const { id, category, category_id, price, title } = x;
                  return (
                    <>
                      <tr key={`category_id+${i}`}>
                        <td data-label="category_id">{category_id}</td>
                        <td data-label="category">{category}</td>
                        <td data-label="title">{title}</td>
                        <td data-label="price">{price}</td>
                        <td data-label="update">
                          <MdUpdate
                            className="grupdate"
                            onClick={() => updateID(id)}
                          />
                          {show1 && (
                            <UpdateModal
                              setShow1={setShow1}
                              products={products}
                              id={prodID}
                            />
                          )}
                        </td>
                        <td data-label="delete">
                          <AiFillDelete
                            className="aidelete"
                            onClick={() => deleteID(id)}
                          />
                        </td>
                      </tr>
                    </>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
