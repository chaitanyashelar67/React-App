import { useEffect, useState } from 'react';
import "./newArrivals.css";

const NewArrivals = () => {
  const [products, setProduct] = useState([]);

  async function getProducts() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProduct(data.products);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="new-arrivals-section">
      <div className="card-heading">
        <h2>NEW ARRIVALS</h2>
      </div>
      <div className="cards-container">
        <div className="card-item">
          {products.map((product) => (
            <div key={product.id} className="card">
              <div className="item-img">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="item-text">
                {/* <h3>{product.title}</h3> */}
                {/* <p>{product.description}</p> */}
                {/* <div className="pricing">
                  // <p>${product.price}</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="view-all-btn flex center">
        <button className="show-all">View All</button>
      </div>
    </div>
  );
};

export default NewArrivals;
