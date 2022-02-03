import React from "react";
import "../../styles/Tile.css";
import * as PropTypes from "prop-types";
import propTypes from "prop-types";

const Tile = (props) => {
	return (
		<>
			<div className="holder">
				<i className={props.icon}></i>
			</div>
			<div className="holder">
				<span>{props.inner}</span>
			</div>
		</>
	);
};
Tile.propTypes = {
	icon: PropTypes.string,
	inner: PropTypes.number,
};
export default Tile;
