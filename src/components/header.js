import React from "react";
import useTilg from "tilg";

const Header = () => {
	useTilg();
	return (
		<>
			<div className="bg-red-300 h-[50px]">
				<span>Infinite scroll and lazy loading via intersection observable</span>
			</div>
			{console.log("insde the header.js")}
		</>
	);
};

export default Header;
