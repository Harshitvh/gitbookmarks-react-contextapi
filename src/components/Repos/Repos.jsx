import React, { useEffect, useContext } from "react";
import RepoItem from "./RepoItem";
import RepoContext from "./../../context/Repository/RepoContext";

const Repos = () => {
  const context = useContext(RepoContext);
  useEffect(() => {
    context.getRepos();
  }, []);
  const state = context.repos;
  if (null !== state && state.length > 0 && !context.loading) {
    return (
      <div>
        <h3
          style={{
            textAlign: "center",
          }}
        >
          List Of JS And PHP Repos
        </h3>
        {state.map((item) => (
          <RepoItem key={item.id} item={item}></RepoItem>
        ))}
      </div>
    );
  } else {
    return (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );
  }
};

export default Repos;
