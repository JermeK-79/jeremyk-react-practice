//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<>
		<div className="row mt-5">
			<div className="col-2"></div>
			<div className="col-8 d-flex justify-content-between">
			<Card />
			<Card />
			<Card />
			</div>
			<div className="col-2"></div>
		</div>
		</>
	);
};

export default Home;