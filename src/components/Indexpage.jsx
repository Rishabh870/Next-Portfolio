// pages/index.js
import React from "react";
import AutoScroller from "./SkillScroller";

const IndexPage = () => {
  const images = [
    "https://res.cloudinary.com/dsefier2u/image/upload/v1708527463/portfolio/mongo_uvvjbr.png",
    "https://res.cloudinary.com/dsefier2u/image/upload/v1708527462/portfolio/express_tvxfud.png",
    "https://res.cloudinary.com/dsefier2u/image/upload/v1708527464/portfolio/Reactjs_qfiuhc.png",
    "https://res.cloudinary.com/dsefier2u/image/upload/v1708527462/portfolio/node_dp523r.png",
    "https://res.cloudinary.com/dsefier2u/image/upload/v1708527462/portfolio/npm_f8ed7l.png",
    "https://res.cloudinary.com/dsefier2u/image/upload/v1708527463/portfolio/postman_i4czcc.png",
    "https://res.cloudinary.com/dsefier2u/image/upload/v1708527462/portfolio/js_t0lnoh.png",
    "https://res.cloudinary.com/dsefier2u/image/upload/v1708527462/portfolio/html_hw36kw.png",
    "https://res.cloudinary.com/dsefier2u/image/upload/v1708527461/portfolio/css_vlka7d.png",
    "https://res.cloudinary.com/dsefier2u/image/upload/v1708527462/portfolio/github_lc53cn.png",
    "https://res.cloudinary.com/dsefier2u/image/upload/v1708527461/portfolio/bootstrap_qep3cu.png",
    "https://res.cloudinary.com/dsefier2u/image/upload/v1708527461/portfolio/Api_sitxgx.png",
    "https://res.cloudinary.com/dsefier2u/image/upload/v1708527463/portfolio/redux_kq289f.png",
    // "image3.jpg",
    // "image3.jpg",
  ];
  return (
    <div className="container">
      <AutoScroller images={images} scrollSpeed={50} />
    </div>
  );
};

export default IndexPage;
