import React from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
import "./KetoListItem.css";

class KetoListItem extends React.Component {
	state = {
		user: this.props.store.user.id,
		meal: this.props.meal.id,
	};
	componentDidMount() {}
	saveMeal = () => {
		console.log(this.props.store.user.id, "is saving:", this.props.meal.id);
		this.setState({
			meal: this.props.meal.id,
		});
		this.props.dispatch({
			type: "ADD_IND_MEAL",
			payload: this.state,
		});
		alert("meal saved to your profile");
	};
	render() {
		return (
			<div>
				<div className='itemDiv'>
					<ul className='ul'>
						<li>
							<img className='img' src={this.props.meal.image} />
							<div>{this.props.meal.mealName}</div>
							<div> Calories per serving: {this.props.meal.calories}</div>
							<div className='videoDiv'>
								<a href={this.props.meal.youtube} target={"_blank"}>
									Recipe Youtube Link!
								</a>
							</div>

							<button onClick={this.saveMeal}>Save to Profile</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(withRouter(KetoListItem));
