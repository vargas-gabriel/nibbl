import React from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
import VeggieListItem from "../VeggieListItem/VeggieListItem";

class VeggieInfoPage extends React.Component {
	componentDidMount() {
		this.props.dispatch({ type: "FETCH_VGMEALS" });
	}

	saveMeal = () => {
		console.log("meal saved");
		alert("meal saved to your profile");
	};
	backHome = () => {
		console.log("back home ");
		this.props.history.push("/home");
	};

	render() {
		console.log(this.props.store.veggie);
		return (
			<div className='div'>
				<h1 id='welcome' className='div'>
					Here are your results, {this.props.store.user.username}
				</h1>

				{this.props.store.veggie.map((meal) => (
					<VeggieListItem key={meal.id} meal={meal} />
				))}
				<button className='buttonSaved' onClick={this.backHome}>
					Back to Home
				</button>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(withRouter(VeggieInfoPage));
