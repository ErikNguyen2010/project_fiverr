import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GlobalOutlined,
  DollarOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function Footer(props) {
  const { arrTypeJob } = useSelector((reducer) => reducer.jobPage);
  const renderMainJob = () => {
    return arrTypeJob.map((job, index) => {
      return (
        <li className="job-list">
          <Link className="content-job" to={`/${job.name}`} key={index}>
            <div className="job-name">{job.name}</div>
          </Link>
        </li>
      );
    });
  };
  return (
    <footer>
      <div className="footer-main">
      <div className="footer-content">
        <div className="footer-detail">
          <ul type="none">
            <h4>Categories</h4>
            {renderMainJob()}
          </ul>
        </div>
        <div className="footer-detail">
          <ul type="none">
            <h4>About</h4>
            <li>Careers</li>
            <li>Press & News</li>
            <li>Partnerships</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Intellectual Property Claims</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div className="footer-detail">
          <ul type="none">
            <h4> Support</h4>
            <li>Help & Support</li>
            <li>Trust & Safety</li>
            <li>Selling on Fiverr</li>
            <li>Buying on Fiverr</li>
          </ul>
        </div>
        <div className="footer-detail">
          <ul type="none">
            <h4> Community</h4>
            <li>Events</li>
            <li>Blog</li>
            <li>Forum</li>
            <li>Community Standards</li>
            <li>Podcast</li>
            <li>Affiliates</li>
            <li>Invite a Friend</li>
            <li>Become a Selller</li>
            <li>
              Fiverr Elevate <br />
              <span>Exclusive Benefits</span>
            </li>
          </ul>
        </div>
        <div className="footer-detail">
          <ul type="none">
            <h4>More From Fiverr</h4>
            <li>Fiverr Business</li>
            <li>Fiverr Pro</li>
            <li>Fiverr Studios</li>
            <li>Fiverr Logo Maker</li>
            <li>Fiverr Guides</li>
            <li>Get Inspired</li>
            <li>
              ClearVoice
              <br /> <span>Content Marketing</span>
            </li>
            <li>
              AND CO
              <br /> <span>Invoice Software</span>
            </li>
            <li>
              Learn
              <br /> <span>Online Courses</span>
            </li>
            <li>Working Not Working</li>
          </ul>
        </div>
      </div>
      <div className="footer-footer">
        <div className="footer-left">
          <span> © Fiverr International Ltd. 2021</span>
        </div>
        <div className="footer-right">
          <div className="soccial">
            <ul type="none">
              <li>
                <TwitterOutlined />
              </li>
              <li>
                <FacebookOutlined />
              </li>
              <li>
                <LinkedinOutlined />
              </li>
              <li>
                <InstagramOutlined />
              </li>
            </ul>
          </div>
          <div className="logo">
            <ul type="none">
              <li>
                <GlobalOutlined />
              </li>
              <li>
                <span>English</span>
              </li>
              <li>
                <DollarOutlined />
              </li>
              <li>
                <span>USD</span>
              </li>
              <li>
                <UserOutlined />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
}
