import React from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
import PaleoListItem from "../PaleoListItem/PaleoListItem";

class PaleoInfoPage extends React.Component {
	componentDidMount() {
		this.props.dispatch({ type: "FETCH_PMEALS" });
	}

	backHome = () => {
		console.log("back home ");
		this.props.history.push("/home");
	};

	render() {
		console.log(this.props.store.paleo);
		return (
			<div className='div'>
				<h1 id='welcome' className='div'>
					Here are your results, {this.props.store.user.username}
				</h1>

				{this.props.store.paleo.map((meal) => (
					<PaleoListItem key={meal.id} meal={meal} />
				))}
				<button className='buttonSaved' onClick={this.backHome}>
					Back to Home
				</button>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(withRouter(PaleoInfoPage));
