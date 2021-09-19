import React, { useEffect } from "react";
import ColdStarters from "./layout/ColdStarter";
import Starters from "./layout/ColdStarter";
import Poori from "./layout/ColdStarter";
import TandooriStarters from "./layout/ColdStarter";
import TandooriMainCourse from "./layout/ColdStarter";
import DineSpecials from "./layout/ColdStarter";
import TraditionalDishes from "./layout/ColdStarter";
import VegetarianDishes from "./layout/ColdStarter";
import TheHeartOfNepal from "./layout/ColdStarter";
import Biryani from "./layout/ColdStarter";
import Accompaniments from "./layout/ColdStarter";
import Breads from "./layout/ColdStarter";
import KidsMenu from "./layout/ColdStarter";
import { getProducts } from "../../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-scroll";
import SetMeals from "./layout/SetMeals";
import { items } from "./SetMealArray";
import Loading from "../Loading";

const MenuItems = () => {
  const dispatch = useDispatch();
  const allproducts = useSelector((state) => state.products);
  const { products, loading, error } = allproducts;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const categories = products?.products?.map((item) => item.category);
  let uniqueProducts = [...new Set(categories)];

  //MENUS CATAGORIES
  // ColdStarters
  let ColdStarter = products?.products?.filter(
    (x) => x.category === uniqueProducts[0]
  );

  // Starters
  let Starter = products?.products?.filter(
    (x) => x.category === uniqueProducts[1]
  );

  // Poori
  let Pooris = products?.products?.filter(
    (x) => x.category === uniqueProducts[2]
  );
  // TandooriStarters
  let TandooriStarter = products?.products?.filter(
    (x) => x.category === uniqueProducts[3]
  );
  // TandooriMainCourse
  let TandooriMainCourses = products?.products?.filter(
    (x) => x.category === uniqueProducts[4]
  );
  // DineSpecials
  let DineSpecial = products?.products?.filter(
    (x) => x.category === uniqueProducts[5]
  );
  // TraditionalDishes
  let TraditionalDish = products?.products?.filter(
    (x) => x.category === uniqueProducts[6]
  );
  // VegetarianDishes
  let VegetarianDish = products?.products?.filter(
    (x) => x.category === uniqueProducts[7]
  );
  // TheHeartOfNepal
  let TheHeartOfNepals = products?.products?.filter(
    (x) => x.category === uniqueProducts[8]
  );
  // Biryani
  let Biryanis = products?.products?.filter(
    (x) => x.category === uniqueProducts[9]
  );
  // Accompaniments
  let Accompaniment = products?.products?.filter(
    (x) => x.category === uniqueProducts[10]
  );
  // Breads
  let Bread = products?.products?.filter(
    (x) => x.category === uniqueProducts[11]
  );
  // KidsMenu
  let KidsMenus = products?.products?.filter(
    (x) => x.category === uniqueProducts[12]
  );

  return (
    <div className="menuItems">
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="sidebar_menu">
                <table>
                  <tbody>
                    <tr>
                      <th className="asldhbl">categories</th>
                    </tr>
                    {uniqueProducts?.map((x, i) => {
                      return (
                        <tr key={i}>
                          <td>
                            <Link
                              activeClass="active"
                              to={`goToMenus ${x}`}
                              spy={true}
                              smooth={true}
                              hashSpy={true}
                              offset={50}
                              duration={300}
                              delay={500}
                              isDynamic={true}
                              ignoreCancelEvents={false}
                              spyThrottle={500}
                            >
                              <p>{x}</p>
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td>
                        <Link
                          activeClass="active"
                          to="setMeals"
                          spy={true}
                          smooth={true}
                        >
                          <p>Set Meals</p>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="menuLists">
                <ColdStarters funcName={ColdStarter} category="ColdStarters" />
                <Starters funcName={Starter} category="Starters" />
                <Poori funcName={Pooris} category="Poori" />
                <TandooriStarters
                  funcName={TandooriStarter}
                  category="TandooriStarters"
                />
                <TandooriMainCourse
                  funcName={TandooriMainCourses}
                  category="TandooriMainCourse"
                />
                <DineSpecials funcName={DineSpecial} category="DineSpecials" />
                <TraditionalDishes
                  funcName={TraditionalDish}
                  category="TraditionalDishes"
                />
                <VegetarianDishes
                  funcName={VegetarianDish}
                  category="VegetarianDishes"
                />
                <TheHeartOfNepal
                  funcName={TheHeartOfNepals}
                  category="TheHeartOfNepal"
                />
                <Biryani funcName={Biryanis} category="Biryani" />
                <Accompaniments
                  funcName={Accompaniment}
                  category="Accompaniments"
                />
                <Breads funcName={Bread} category="Breads" />
                <KidsMenu funcName={KidsMenus} category="KidsMenu" />
                <SetMeals funcName={items} category="set meal" />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MenuItems;
