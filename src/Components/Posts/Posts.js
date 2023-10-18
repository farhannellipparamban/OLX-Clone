import { React, useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../../Store/FirebaseContext";
import Heart from "../assets/Heart";
import { PostContext } from "../../Store/PostContext";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../../Store/LoadingContext";
import "./Posts.css";
// import Loading from '../Loading/Loading'
function Posts() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);
  const { setpostDetails } = useContext(PostContext);
  const { setloading } = useContext(LoadingContext);
  const [displayedProductsCount, setDisplayedProductsCount] = useState(4);

  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const allPost = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(allPost);
        setloading(true);
      });
  }, [firebase, setloading]);

  return (
    <div className="posts">
      <div className="post-header">
        <h3>Recommened for you</h3>
        <a
          href="/olx-clone"
          style={{ textDecoration: "none" }}
          onClick={(e) => {
            e.preventDefault();
            setDisplayedProductsCount((prevCount) => prevCount + 4);
          }}
        >
          View More
        </a>
      </div>

      <div className="products">
        {products.slice(0, displayedProductsCount).map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="product"
                onClick={() => {
                  setpostDetails(product);
                  navigate("/post");
                }}
              >
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="top">
                  <img src={product.url} alt="oops" />
                </div>
                <div className="bottom">
                  <h4 className="proprice">₹{product.price}</h4>
                  <p className="proname">{product.proName}</p>
                  <p className="proyear">{product.yearOfPurchase}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
