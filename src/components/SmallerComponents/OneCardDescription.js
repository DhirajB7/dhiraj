import React from "react";

function OneCardDescription(prop) {
	return (
		<React.Fragment>
			{prop.type === "full" ? (
				<React.Fragment>
					<ul>
						<li>Front-End : {prop.frontStack}</li>
						<li>Back-End : {prop.backStack}</li>
						<li>Description : {prop.description}</li>
					</ul>
				</React.Fragment>
			) : prop.type === "front" ? (
				<React.Fragment>
					<ul>
						<li>Front-End : {prop.frontStack}</li>
						<li>Description : {prop.description}</li>
					</ul>
				</React.Fragment>
			) : (
						<React.Fragment>
							<ul>
								<li>Back-End : {prop.backStack}</li>
								<li>Description : {prop.description}</li>
							</ul>
						</React.Fragment>
					)}
		</React.Fragment>
	);
}

export default OneCardDescription;
