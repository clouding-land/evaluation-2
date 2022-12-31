import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import data from "../Components/data.json";

export default function DetailedProduct() {
  const params = useParams();
  console.log(params);

  const getData = async () => {
    try {
      let res = await axios.get("");
      // setData(res);
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  return <div>Detailed page</div>;
}
