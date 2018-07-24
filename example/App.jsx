import React, { Component } from "react";
import style from "./App.css";
import RectSvg from "../src/components/RectSvg";
import EllipseSvg from "../src/components/EllipseSvg";
import DiamondSvg from "../src/components/DiamondSvg";
import TriangleSvg from "../src/components/TriangleSvg";
import ParallelogramSvg from "../src/components/ParallelogramSvg";

class App extends Component {
	render() {
		return (
			<div>
				<h1>React SVG HOC Components</h1>
				<div id="container" style={{ position: "absolute" }}>
					{/* 采用绝对布局方式 */}
					<RectSvg
						width="100"
						height="100"
						top="10"
						left="10"
						style={{ fill: "red" }}
						className={style.customClass}
					/>
					<RectSvg
						width="100"
						height="100"
						top="110"
						left="10"
						style={{ fill: "red" }}
						className={style.customClass}
						rx="20"
						ry="20"
					/>
					<EllipseSvg width="100" height="80" top="10" left="130" />
					<DiamondSvg width="100" height="100" top="10" left="250" />
					<TriangleSvg width="100" height="100" top="10" left="400" />
					<ParallelogramSvg
						width="100"
						height="100"
						top="10"
						left="550"
					/>
				</div>
			</div>
		);
	}
}
export default App;
