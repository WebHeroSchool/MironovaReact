import React from "react";
import PropTypes from 'prop-types';
const Footer = ({count}) => (
    <div>Осталось выполнить вот столько дел: {count}</div>
);

Footer.propTypes = {

     count: PropTypes.number.isRequired
};

export default Footer
