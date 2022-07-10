import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJobListbySearch } from "../../redux/Reducers/jobList";
import { MenuOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { getApiMainJob } from "../../redux/Reducers/jobPage";
import { Menu, Button, Drawer } from "antd";
import Fiverr_Logo from "../../assets/images/Fiverr_Logo.jpg";
import "../../scss/_Header.scss";

export default function Header(props) {
  const [search, setSearch] = useState();
  const [subTypeJobLeftPosition, setSubTypeJobLeftPosition] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const typeJobListRef = useRef(null);

  const { SubMenu } = Menu;

  const { userLogin } = useSelector((state) => state.auth);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogin");
    window.location.replace("/");
  };

  const enterSearch = (event) => {
    const { keyCode } = event;
    console.log(keyCode);
    if (keyCode === 13) handleSearchJob();
  };

  const { arrTypeJob } = useSelector((reducer) => reducer.jobPage);

  const handleSearchJob = () => {
    dispatch(getJobListbySearch(search));
    if (search.trim()) history.push(`/joblist?name=${search}`);
  };

  const unHoverTypeJob = (event) => {
    console.log("event", event);
    setSubTypeJobLeftPosition(0);
  };

  const hoverTypeJob = (event) => {
    const typeJobListRefObject = typeJobListRef.current;
    const subTypeJobObject = event.target.querySelector(".subTypeJobList");
    if (typeJobListRefObject && subTypeJobObject) {
      let left = 0;
      const typeJobObjectRec = typeJobListRefObject.getBoundingClientRect();
      const subTypeJobObjectRec = subTypeJobObject.getBoundingClientRect();

      if (
        subTypeJobObjectRec.left + subTypeJobObjectRec.width >
        typeJobObjectRec.width + typeJobObjectRec.left
      ) {
        left = -typeJobObjectRec.left;
      }
      setSubTypeJobLeftPosition(left);
    }
  };

  const handleSearchInput = (event) => {
    const valueSearch = event.target.value;
    setSearch(valueSearch);
  };

  const renderMainjob = () => {
    return arrTypeJob.map((job, index) => {
      return (
        <Link
          className="content-typeJob"
          to={`/${job.name}`}
          key={index}
          onMouseEnter={hoverTypeJob}
          onMouseLeave={unHoverTypeJob}
        >
          <div className="job-name">
            {job.name}
            <ul
              type="none"
              className="subTypeJobList"
              style={{ left: subTypeJobLeftPosition }}
            >
              {job?.subTypeJobs.map((subTypeJob) => {
                return (
                  <li key={subTypeJob._id}>
                    <Link
                      className="subTypeJobList__typeName"
                      to={`/sub-type-job/${subTypeJob._id}`}
                    >
                      {subTypeJob.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Link>
      );
    });
  };

  useEffect(() => {
    dispatch(getApiMainJob());
  }, []);

  return (
    <div className="header-header">
      <header className="header-jobspage">
        <div className="header-main-jobspage">
          <div className="logo">
            <a href="/">
              <span>fiverr</span>
              <span className="doc">.</span>
            </a>
            <div className="search-btn">
              <input
                id="search"
                name="search"
                placeholder="Try'building mobile app'"
                type="text"
                onChange={handleSearchInput}
                onKeyUp={enterSearch}
              />
              <button
                onClick={handleSearchJob}
                className="btn-search"
                type="button"
              >
                Search
              </button>
            </div>
          </div>
          <nav>
            <a href="#business">Fiverr Business</a>
            <a href="#explore">Explore</a>
            <a href="#seller">Become a Seller</a>
            {!userLogin?._id && (
              <Link to={"/login"} className="signin">
                Sign in
              </Link>
            )}
            {!userLogin?._id && (
              <Link to={"/register"} className="join">
                Join
              </Link>
            )}
            {userLogin?._id && (
              <button onClick={logout} type="button" className="logout">
                Log Out
              </button>
            )}
          </nav>
        </div>
        <div className="header-main-jobspage-responsive-1">
          <div className="content">
            <div className="btn">
              <Button onClick={showDrawer}>
                <MenuOutlined />
              </Button>
              <Drawer
                headerStyle={{ margin: 0 }}
                bodyStyle={{ margin: 0 }}
                closable={false}
                title={
                  !userLogin?._id ? (
                    <Link to="/register">
                      <span>Join Fiverr</span>
                    </Link>
                  ) : (
                    <button onClick={logout} type="button">
                      Log Out
                    </button>
                  )
                }
                placement="left"
                onClose={onClose}
                visible={visible}
                size="200"
              >
                <ul type="none">
                  {!userLogin?._id && (
                    <li>
                      <Link to="/login">
                        <p>Sign in</p>
                      </Link>
                    </li>
                  )}
                  <li>
                    <Menu mode="inline">
                      <SubMenu key="submenu" title="Catgories">
                        {arrTypeJob.map((typejob, index) => {
                          return (
                            <SubMenu key={typejob._id} title={typejob.name}>
                              {typejob.subTypeJobs.map((subjob, index) => {
                                return (
                                  <Menu.Item key={subjob._id}>
                                    <Link to={`/${typejob.name}/${subjob._id}`}>
                                      {subjob.name}
                                    </Link>
                                  </Menu.Item>
                                );
                              })}
                            </SubMenu>
                          );
                        })}
                      </SubMenu>
                    </Menu>
                  </li>
                </ul>
              </Drawer>
            </div>
            <a href="/">
              <img src={Fiverr_Logo} alt="Fiverr_Logo" />
            </a>
            {!userLogin?._id && (
              <Link to="/register">
                <span className="join">Join</span>
              </Link>
            )}
            {userLogin?._id && (
              <span>
                <button onClick={logout} type="button" className="logout">
                  Log Out
                </button>
              </span>
            )}
          </div>
          <div className="search-main">
            <input
              id="search"
              name="search"
              placeholder="Try'building mobile app'"
              type="text"
              onChange={handleSearchInput}
              onKeyUp={enterSearch}
            />
          </div>
        </div>
        <div className="header-main-jobspage-responsive-2">
          <div className="left">
            <Button onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer
              headerStyle={{ margin: 0 }}
              bodyStyle={{ margin: 0 }}
              closable={false}
              title={
                !userLogin?._id ? (
                  <Link to="/register">
                    <span>Join Fiverr</span>
                  </Link>
                ) : (
                  <button onClick={logout} type="button">
                    Log Out
                  </button>
                )
              }
              placement="left"
              onClose={onClose}
              visible={visible}
              size="200"
            >
              <ul type="none">
                {!userLogin?._id && (
                  <li>
                    <Link to="/login">
                      <p>Sign in</p>
                    </Link>
                  </li>
                )}
                <li>
                  <Menu mode="inline">
                    <SubMenu key="submenu" title="Catgories">
                      {arrTypeJob.map((typejob, index) => {
                        return (
                          <SubMenu key={typejob._id} title={typejob.name}>
                            {typejob.subTypeJobs.map((subjob, index) => {
                              return (
                                <Menu.Item key={subjob._id}>
                                  <Link to={`/${typejob.name}/${subjob._id}`}>
                                    {subjob.name}
                                  </Link>
                                </Menu.Item>
                              );
                            })}
                          </SubMenu>
                        );
                      })}
                    </SubMenu>
                  </Menu>
                </li>
              </ul>
            </Drawer>
            <a href="/">
              <img src={Fiverr_Logo} alt="Fiverr_Logo" />
            </a>
            <input
              id="search"
              name="search"
              placeholder="Try'building mobile app'"
              type="text"
              onChange={handleSearchInput}
              onKeyUp={enterSearch}
            />
          </div>
          <div className="right">
            {!userLogin?._id && (
              <Link to="/login">
                <span className="signin">Sign in</span>
              </Link>
            )}
            {!userLogin?._id && (
              <Link to="/register">
                <span className="join">Join</span>
              </Link>
            )}
            {userLogin?._id && (
              <span>
                <button onClick={logout} type="button" className="logout">
                  Log Out
                </button>
              </span>
            )}
          </div>
        </div>
      </header>
      <section className="main-job">
        <div className="main-job-content" ref={typeJobListRef}>
          {renderMainjob()}
        </div>
      </section>
    </div>
  );
}
