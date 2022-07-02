import React, { useEffect, useState } from "react";
import { MenuOutlined, CheckCircleOutlined } from "@ant-design/icons";
import HomeCarousel from "./HomeCarousel";
import Services from "./ServicesHome/Services";
import Servicesres1 from "./ServicesHome/Servicesres1";
import Servicesres2 from "./ServicesHome/Servicesres2";
import Reviews from "./Reviews";
import Footer from "../../templates/Footer/Footer";
import { getApiMainJob } from "../../redux/Reducers/jobPage";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "../../scss/_HomePage.scss";
import { Button, Drawer } from "antd";

export default function HomePage(props) {
  const [search, setSearch] = useState();
  const history = useHistory();
  const { arrTypeJob } = useSelector((reducer) => reducer.jobPage);
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const searchJob = () => {
    console.log(search.trim());
    if (search.trim()) history.push(`/joblist?name=${search}`);
  };

  const enterSearch = (event) => {
    const { keyCode } = event;
    console.log(keyCode);
    if (keyCode === 13) searchJob();
  };

  const changeSearchInput = (event) => {
    const valueSearch = event.target.value;
    setSearch(valueSearch);
  };

  const renderMainJob = () => {
    return arrTypeJob.map((job, index) => {
      return (
        <Link className="content-job" to={`/${job.name}`} key={index}>
          <img
            src={`./images/${job.name}.svg`}
            alt="..."
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "./images/defaultExplore.svg";
            }}
          />
          <div className="boder"></div>
          <div className="job-name">{job.name}</div>
        </Link>
      );
    });
  };

  useEffect(() => {
    dispatch(getApiMainJob());
  }, []);
  return (
    <div>
      <header className="header-main">
        <div className="header-main-detail">
          <div className="logo">
            <a href="/">
              <span>fiverr</span>
              <span className="doc">.</span>
            </a>
          </div>
          <nav>
            <a href="#business">Fiverr Business</a>
            <a href="#explore">Explore</a>
            <a href="#seller">Become a Seller</a>
            <button className="signin">Sign in </button>
            <button className="join">Join</button>
          </nav>
        </div>
        <div className="header-main-responsive-1">
          <div className="btn">
            <button>
              <MenuOutlined />
            </button>
          </div>
          <a href="/">
            <img src="./images/Fiverr_Logo.jpg" alt="Fiverr_Logo" />
          </a>
          <span className="join">Join</span>
        </div>
        <div className="header-main-responsive-2">
          <div className="left">
            <Button onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer
              headerStyle={{ margin: 0 }}
              bodyStyle={{ margin: 0 }}
              closable={false}
              title={<button>Join Fiverr</button>}
              placement="left"
              onClose={onClose}
              visible={visible}
              size="200"
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
            <a href="/">
              <img src="./images/Fiverr_Logo.jpg" alt="Fiverr_Logo" />
            </a>
          </div>
          <div className="right">
            <span>Sign in</span>
            <span className="join">Join</span>
          </div>
        </div>
        <HomeCarousel />
        <div className="search">
          <div className="search-content">
            <div className="search-text">
              <span>Find the perfect </span>
              <i>freelance</i>
              <br />
              <span>services for your business</span>
              <br />
            </div>
            <div className="search-btn">
              <input
                placeholder="Try'building mobile app'"
                type="text"
                onChange={changeSearchInput}
                onKeyUp={enterSearch}
              />
              <button onClick={searchJob} className="btn-search" type="button">
                Search
              </button>
            </div>
            <div className="popular">
              <p>Popular:</p>
              <span className="webslte-design">Webslte Design</span>
              <span className="world-press">WorldPress</span>
              <span className="logo-design">Logo Design</span>
              <span className="nft">NFT Art</span>
            </div>
            <div className="search-btn-responsive">
              <input
                placeholder="Try'building mobile app'"
                type="text"
                onChange={changeSearchInput}
                onKeyUp={enterSearch}
              />
              <br />
              <button className="btn-search" type="button" onClick={searchJob}>
                Search
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="trusted-by">
        <div className="trusted-by-main">
          <span className="text">Trusted by:</span>
          <ul className="branch" type="none">
            <li>
              <img src="./images/facebook_logo.png" alt="..." />
            </li>
            <li>
              <img src="./images/google_logo.png" alt="..." />
            </li>
            <li>
              <img src="./images/netflix_logo.png" alt="..." />
            </li>
            <li>
              <img src="./images/pandg_logo.png" alt="..." />
            </li>
            <li>
              <img src="./images/paypal_logo.png" alt="..." />
            </li>
          </ul>
        </div>
      </section>
      <section className="services-services">
        <div className="services-main">
          <Services />
        </div>
        <div className="services-responsive-1">
          <Servicesres1 />
        </div>
        <div className="services-responsive-2">
          <Servicesres2 />
        </div>
      </section>
      <section className="introduce">
        <div className="introduce-main">
          <div className="introduce-item-1">
            <h2>A whole world of freelance talent at your fingertips</h2>
            <div>
              <span className="icon">
                <CheckCircleOutlined />
              </span>
              <h6>The best for every budget</h6>
            </div>
            <span>
              Find high-quality services at every price point. No
              <br /> hourly rates, just project-based pricing.
            </span>
            <br />
            <div>
              <span className="icon">
                <CheckCircleOutlined />
              </span>
              <h6>Quality work done quickly</h6>
            </div>
            <span>
              Find the right freelancer to begin working on your
              <br /> project within minutes.
            </span>
            <br />
            <div>
              <span className="icon">
                <CheckCircleOutlined />
              </span>
              <h6>Protected payments, every time</h6>
            </div>
            <span>
              Always know what you'll pay upfront. Your payment
              <br /> isn't released until you approve the work.
            </span>
            <br />
            <div>
              <span className="icon">
                <CheckCircleOutlined />
              </span>
              <h6>24/7 support</h6>
            </div>
            <span>
              Questions? Our round-the-clock support team is
              <br />
              available to help anytime, anywhere.
            </span>
          </div>
          <div className="introduce-item-2">
            <video controls src="./videos/introduce.mp4"></video>
          </div>
        </div>
      </section>
      <section className="explore" id="explore">
        <h2>Explore the marketplace</h2>
        <div className="explore-item">{renderMainJob()}</div>
      </section>
      <section className="fiverrbusiness" id="business">
        <div className="fiverrbusiness-item">
          <div className="fiverrbusiness-content">
            <h2>
              A business solution <br />
              designed for <i>teams</i>
            </h2>
            <p>
              Ucpgrade to a curated experience packed with tools
              <br /> and benefits, dedicated to businesses
            </p>
            <ul type="none">
              <li>
                <span className="icon">
                  <CheckCircleOutlined />
                </span>

                <span className="text">
                  Connect to freelancers with proven business experience
                </span>
              </li>
              <li>
                <span className="icon">
                  <CheckCircleOutlined />
                </span>
                <span className="text">
                  Get matched with the perfect talent by a customer success
                  manager
                </span>
              </li>
              <li>
                <span className="icon">
                  <CheckCircleOutlined />
                </span>
                <span className="text">
                  Manage teamwork and boost productivity with one powerful
                  workspace
                </span>
              </li>
            </ul>
            <button type="button">Explore Fiverr Business</button>
          </div>
          <div className="fiverrbusiness-img">
            <img src="./images/business-desktop.png" alt="..." />
          </div>
        </div>
      </section>
      <section className="review">
        <Reviews />
      </section>
      <section className="fiverrjoin" id="seller">
        <div className="fiverrjoin-main">
          <div className="fiverrjoin-content">
            <h2>
              Find the <i>talent</i> needed to <br />
              get your business <i>growing</i>.
            </h2>
            <button>Get Started</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
