import React from "react";

const ThreadBox = (props) => {
	return (
		<div className="stage">
			<p>{props.author}</p>
			<h3>{props.threadTitle}</h3>
			<p>{props.body}</p>
		</div>
	);
};

export default ThreadBox;
