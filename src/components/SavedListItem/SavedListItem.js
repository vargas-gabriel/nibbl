import React from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";

class SavedListItem extends React.Component {
	componentDidMount() {}
	removeMeal = () => {
		this.props.dispatch({
			type: "REMOVE_MEAL",
			url: `/api/ind/${this.props.store.user.id}`,
		});
		window.location.reload();
	};

	like = () => {
		console.log("liked:", this.props.saved.MEAL_ID);
		this.props.dispatch({
			type: "ADD_LIKE",
			url: `/api/ind/${this.props.saved.MEAL_ID}`,
		});
		window.location.reload();
	};
	likeMessage = () => {
		console.log("mouse over like");
	};
	disLikeMessage = () => {
		console.log("mouse over dislike");
	};
	disLike = () => {
		console.log("disliked:", this.props.saved.MEAL_ID);
		window.location.reload();
	};
	render() {
		return (
			<div>
				<ul>
					<li>
						<div>
							<div>
								Name:
								{this.props.saved.mealName}
							</div>
							{""}
							<div>
								Calories:
								{this.props.saved.calories}
							</div>
							{""}
							<div>
								Youtube Link:
								{this.props.saved.youtube}
							</div>
							{""}
							<div onMouseOver={this.likeMessage} onClick={this.like}>
								Likes: {this.props.saved.likes}
							</div>
							{/* <div onMouseOver={this.disLikeMessage} onClick={this.disLike}>
								Dislikes:
							</div> */}

							<button onClick={this.removeMeal}>Remove</button>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(withRouter(SavedListItem));
