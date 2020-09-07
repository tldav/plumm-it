import React from "react";
import ThreadBox from "./components/ThreadBox";
import RandoBox from "./components/RandoBox";
import Header from "./components/Header";
import threadContents from "./thread-contents.js";
import "./stylesheets/App.css";

const App = () => {
	return (
		<div className="app-container ">
			<Header />
			<div className="left"></div>
			<div className="mid">
				<div className="threads">
					{threadContents.map((thread) => {
						return (
							<ThreadBox
								key={thread.id}
								author={thread.author}
								body={thread.body}
								threadTitle={thread.threadTitle}
							/>
						);
					})}
				</div>
			</div>
			<div className="right">
				<div className="boxes">
					<RandoBox />
					<RandoBox />
					<RandoBox />
				</div>
			</div>
		</div>
	);
};

export default App;
