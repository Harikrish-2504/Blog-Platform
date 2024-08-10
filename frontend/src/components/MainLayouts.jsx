import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Blogentry from "./Blogentry";
import {AboutCard} from "./AboutCard";
import axios from "axios";
import {Link} from "react-router-dom";
import { Button } from "react-bootstrap";

const MainLayouts = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/blog");
        setBlogData(response.data);
        console.log("fetch done", response.data);
      } catch (error) {
        console.error("Error in Fetching Blog Data", error);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <>
      <div className="w3-content" style={{maxWidth: 1400}}>
        {/* Header */}
        <Header />
        <div className="d-flex justify-content-end">
          <Link to="/post">
            <Button variant="dark" type="button" className="mx-4">
           Post A Blog
            </Button>
          </Link>
        </div>
        {/* Grid */}
        <div className="w3-row">
          {/* Blog entries */}
          <div className="w3-col l8 s12">
            {blogData.map((data, index) => (
              <Blogentry data={data} key={index} />
            ))}
            <hr />
          </div>
          {/* Introduction menu */}
          <div className="w3-col l4">
            {/* About Card */}
            <AboutCard />
            <hr />
            {/* Posts */}
            <div className="w3-card w3-margin">
              <div className="w3-container w3-padding">
                <h4>Popular Posts</h4>
              </div>
              <ul className="w3-ul w3-hoverable w3-white">
                <li className="w3-padding-16">
                  <img
                    src="https://spn-sta.spinny.com/blog/20220228142243/ezgif.com-gif-maker-98-5.jpg?compress=true&quality=80&w=1200&dpr=2.6"
                    alt="."
                    className="w3-left w3-margin-right"
                    style={{width: 50}}
                  />
                  <span className="w3-large">Lorem</span>
                  <br />
                  <span>Sed mattis nunc</span>
                </li>
                <li className="w3-padding-16">
                  <img
                    src="https://hips.hearstapps.com/hmg-prod/images/bentley-mulliner-batur-1-1661342912.jpg"
                    alt="."
                    className="w3-left w3-margin-right"
                    style={{width: 50}}
                  />
                  <span className="w3-large">Ipsum</span>
                  <br />
                  <span>Praes tinci sed</span>
                </li>
                <li className="w3-padding-16">
                  <img
                    src="https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/03/04101145/Luxury-Cars-A-04-03-1024x640.jpg"
                    alt="."
                    className="w3-left w3-margin-right"
                    style={{width: 50}}
                  />
                  <span className="w3-large">Dorum</span>
                  <br />
                  <span>Ultricies congue</span>
                </li>
                <li className="w3-padding-16 w3-hide-medium w3-hide-small">
                  <img
                    src="https://motownindia.com/images/Auto-Industry/LUXURY-CARS-IN-INDIA-A-Painful-Growth-Motown-India-Bureau-1-989.jpg"
                    alt="."
                    className="w3-left w3-margin-right"
                    style={{width: 50}}
                  />
                  <span className="w3-large">Mingsum</span>
                  <br />
                  <span>Lorem ipsum dipsum</span>
                </li>
              </ul>
            </div>
            <hr />
            {/* Labels / tags */}
            <div className="w3-card w3-margin">
              <div className="w3-container w3-padding">
                <h4>Tags</h4>
              </div>
              <div className="w3-container w3-white">
                <p>
                  <span className="w3-tag w3-black w3-margin-bottom">Travel</span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">New York</span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">London</span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">IKEA</span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">NORWAY</span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">DIY</span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Ideas</span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Baby</span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Family</span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">News</span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Clothing</span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Shopping</span>
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Sports</span>{" "}
                  <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Games</span>
                </p>
              </div>
            </div>
            {/* END Introduction Menu */}
          </div>
          {/* END GRID */}
        </div>
        <br />
        {/* END w3-content */}
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayouts;
