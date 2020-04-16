import React, { useRef, useContext } from "react";
import RepoContext from "./../../context/Repository/RepoContext";

const Search = () => {
  const ref = useRef("");
  const repoContext = useContext(RepoContext);
  const onChanges = () => {
    const query = ref.current.value;
    repoContext.filterRepos(query);
  };

  return (
    <form>
      <div className="input-field">
        <input
          ref={ref}
          onChange={onChanges}
          placeholder="Start Searching..."
          id="search"
          type="search"
          required
        />
        <label className="label-icon" htmlFor="search">
          <i className="material-icons">search</i>
        </label>
        <i className="material-icons">close</i>
      </div>
    </form>
  );
};

export default Search;
