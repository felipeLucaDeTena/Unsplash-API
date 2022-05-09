import React, { useEffect, useState } from "react";
import { getHomePhotos } from "../services/api";
import home from "../styles/home.scss";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getHomePhotos().then((resp) => {
      return setData(resp.data);
    });
  }, []);

  console.log(data);
  return (
    <div className="main">
      {data.map((photo) => (
        <>
          <img className="image" src={photo.urls.small} alt="none" />
        </>
      ))}
    </div>
  );
}

export default Home;
