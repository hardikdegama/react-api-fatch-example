import React, { useEffect, useState } from "react";
import "./../App.css";

function Demo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((resp) => setData(resp));
  }, []);
  console.log(data);
  return (
    <div>
      <table border={5}>
        <tr>
          <td> Id</td>
          <td>Title</td>
          <td>Category</td>
          <td>Price</td>
          <td>Photo</td>
        </tr>

        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100px", height: "auto" }}
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Demo;
