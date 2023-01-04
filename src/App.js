import axios from "axios";
import { useEffect, useState } from "react";
import app from "./App.module.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const getAPIData = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    console.log(res.data.products);
    setProducts(res.data.products);
  };
  useEffect(() => {
    getAPIData();
  }, []);
  // const users = [
  //   { id: 5, name: 'bhagya' },
  //   {
  //     id: 2,
  //     name: 'Rak',
  //   },
  // ];

  return (
    <div className={app.divCSS}>
      {products.map((item) => (
        <div key={item.id}>
          <img
            className={app.imgCSS}
            style={{
              objectFit: "cover"
            }}
            height="200px"
            width="200px"
            src={item.thumbnail}
            alt={item.title}
          ></img>
          <div className={app.titlepriceDiv}>
            <span>{item.title}</span>
            <b>$ {item.price}</b>
          </div>
          <div className={app.btndiv}>
            <button className={app.toCartBtn}>Add to Cart</button>
            <button className={app.buyNowBtn}>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
