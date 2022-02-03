import React, { useEffect, useState } from "react";
import Tile from "./Tile.jsx";

//create your first component
const Home = () => {
	const [Time, setTime] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setTime((Time) => Time + 1);
		}, 1000);
	}, []);
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<Tile icon="fas fa-clock" />
					</div>
					<div className="col">
						<Tile inner={Time} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
