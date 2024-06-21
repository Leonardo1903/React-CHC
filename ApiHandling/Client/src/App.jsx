import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // const { products, error, loading } = customReactQuery("/api/products");

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    //Normal way of fetching data from server
    // axios.get("/api/products").then((response) => {
    //   setProducts(response.data);
    // });

    // Race condition: When we type something in search bar, the previous request is not cancelled and the new request is made. So, the previous request is still in progress

    //Handling race condition
    const controller = new AbortController();
    //Using async await and IIFE in same file
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        setProducts(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Cancelled", error.message);
        }
        setError(true);
        setLoading(false);
      }
    })();

    //Cleanup function
    return () => {
      controller.abort();
    };
  }, [search]);

  // if (error) {
  //   return <h1>Something went wrong...</h1>;
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h1>Api Handling in React</h1>

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Conditionally rendering the loading and error messages */}
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong...</h1>}

      <h2>Number of Products are: {products.length}</h2>
    </>
  );
}

export default App;

// Creating a custom hook for fetching data
// const customReactQuery = (urlPath) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         setError(false);
//         const response = await axios.get(urlPath);
//         setProducts(response.data);
//         console.log(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     })();
//   }, []);

//   return { products, error, loading };
// };
