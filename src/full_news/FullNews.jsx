import PropTypes from "prop-types";
import Header from "../pages/Shared/Header/Header";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { newsContext } from "../layouts/Root";
import RightSideNav from "../pages/Shared/RightSideNav/RightSideNav";

const FullNews = () => {
  const { id } = useParams();

  const newsData = useContext(newsContext);

  const currentNews = newsData.find((news) => news._id === id);

  const { title, details, image_url } = currentNews;

  return (
    <div>
      {console.log(currentNews.title)}
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4">
        <div className="col-span-3 p-7 border rounded-lg">
            <img src={image_url}  />
            <h1 className="my-5 text-2xl font-bold">{title}</h1>
            <p>{details}</p>
        </div>

        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

FullNews.propTypes = {};

export default FullNews;
