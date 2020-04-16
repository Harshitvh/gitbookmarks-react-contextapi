import React, { useContext, useReducer } from "react";
import RepoReducer from "./RepoReducer";
import RepoContext from "./RepoContext";
import { GET_REPOS } from "./../Types";

const RepoState = (props) => {
  const initialState = {
    repos: [],
    loading: true,
  };

  const getRepos = async () => {
    try {
      const res = await fetch(
        "https://api.github.com/search/repositories?q=language:php+language:javascript"
      );
      const act = await res.json();
      dispatch({
        type: GET_REPOS,
        payload: act.items,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const filterRepos = async (text) => {
    try {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=${text}+in%3Aname+language:php+language:javascript`
      );
      const act = await res.json();
      dispatch({
        type: GET_REPOS,
        payload: act.items,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const [state, dispatch] = useReducer(RepoReducer, initialState);

  return (
    <RepoContext.Provider
      value={{
        repos: state.repos,
        loading: state.loading,
        getRepos,
        filterRepos,
      }}
    >
      {props.children}
    </RepoContext.Provider>
  );
};

export default RepoState;
