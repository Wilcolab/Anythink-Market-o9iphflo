import React from "react";
import agent from "../../agent";

function Search(props) {
  const onSearch = (e) => {
    if (e.target.value.length >= 3) {
      props.onTypeTitle(
        e.target.value,
        (page) => agent.Items.byTitle(e.target.value, page),
        agent.Items.byTitle(e.target.value)
      );
    }

    if (e.target.value.length === 0) {
      props.onTypeTitle(
        e.target.value,
        (page) => agent.Items.byTitle(e.target.value, page),
        agent.Items.byTitle(e.target.value)
      );
    }
  };

  return (
    <input
      type="text"
      id="search-box"
      className="mx-1 p-2 rounded w-25"
      placeholder="What is it that you truly desire?"
      onChange={onSearch}
      name="title"
    />
  );
}

export default Search;
