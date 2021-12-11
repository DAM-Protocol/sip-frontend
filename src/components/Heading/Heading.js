import React, { useEffect, useState } from "react";
import { ColuredHeading, MainHeading } from "./Heading.style";

const Heading = ({ children }) => {
	const [colouredHeading, setColouredHeading] = useState("");
	const [remainingHeading, setRemainingHeading] = useState("");
	useEffect(() => {
		if (children !== undefined) {
			// console.log(children.split(" "));

			if (children.split(" ").length > 1) {
				setColouredHeading(children.split(" ")[0]);
				setRemainingHeading(children.substring(children.indexOf(" ") + 1, children.length));
			} else {
				setColouredHeading("");
				setRemainingHeading(children.split(" ")[0]);
			}
		}
	}, []);
	return (
		<MainHeading>
			<ColuredHeading>{colouredHeading}</ColuredHeading> {remainingHeading}
		</MainHeading>
	);
};

export default Heading;
