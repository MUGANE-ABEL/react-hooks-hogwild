import React, {useState} from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";


import hogs from "../porkers_data";

function App() {
	return (
		<body>
			<div className="App">
			<div className="ui eight wide column">
				<Nav />
			</div>			
			<div className="pigTile ">
				<Filter  />				
			</div>
			<div className="pigTile">
				<HogList hogs={hogs} name={hogs.name} image={hogs.image} />
			</div>					
		</div>
		</body>		
	);
}

export default App;
