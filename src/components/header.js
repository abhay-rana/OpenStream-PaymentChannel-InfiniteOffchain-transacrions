import React from "react";
import Button from "./Button";

const Header = () => {
	return (
		<>
			<div className="flex justify-between p-[16px] h-[60px] sticky top-0 bg-white">
				<span className="font-bold text-lg">OpenStream</span>
				<Button primary warning>
					Login
				</Button>
			</div>
		</>
	);
};

export default Header;
