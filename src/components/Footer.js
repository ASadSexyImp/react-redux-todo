import React from "react";
import FilterLink from "../containers/FilterLink";

const Footer = () => {
  return (
    <p className="foot">
      <FilterLink filter="SHOW_ALL">
        <button>All</button>
      </FilterLink>
      <FilterLink filter="SHOW_ACTIVE">
        <button>Active</button>
      </FilterLink>
      <FilterLink filter="SHOW_COMPLETED">
        <button>Completed</button>
      </FilterLink>
    </p>
  );
};

export default Footer;
