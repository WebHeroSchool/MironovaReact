import React from "react";
const Footer = ({count}) => (
    <div>Осталось выполнить вот столько дел: {count}</div>
);
Footer.defaultProps={
  count:0
}
export default Footer
