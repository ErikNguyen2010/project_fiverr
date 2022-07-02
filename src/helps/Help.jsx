import { Pagination } from "antd";
import { useState, useEffect } from "react";
import React from "react";
import { http } from "../util/setting";

export default function Help() {
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState("");
  const [page, setPage] = useState(1);
  const [postPerPgae, setPostPerPgae] = useState(10);

  const indexOfLastPage = page + postPerPgae;
  const indexOfFisrtPage = indexOfLastPage - postPerPgae;
  const currentPosts = posts.slice(indexOfFisrtPage, indexOfLastPage);

  useEffect =
    (() => {
      const loadPosts = async () => {
        const result = await http.get("/api/jobs/by-name");
        setPosts(result.data);
        setTotal(result.data.lenght);
      };
      loadPosts();
    },
    []);

  return (
    <div className="content">
      {currentPosts.map((jobs) => (
        <div className="contentmanin" key={jobs.id}>
          <img src={jobs.image} />
          <p>{jobs.name}</p>
          <span>{jobs.rating}</span>
          <br />
          <span>{jobs.price}</span>
        </div>
      ))}
      <Pagination
        onChange={(value) => setPage(value)}
        pageSize={postPerPgae}
        total={total}
        current={page}
      />
    </div>
  );
}
