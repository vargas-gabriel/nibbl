import React from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

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
	//not used yet
	likeMessage = () => {
		console.log("in function likeMessage");
	};
	disLikeMessage = () => {
		console.log("in function disLikeMessage");
	};
	disLike = () => {
		console.log("disliked:", this.props.saved.MEAL_ID);
		window.location.reload();
	};
	render() {
		return (
			<div>
				<div className='itemDiv'>
					<ul className='ul'>
						<li>
							<img className='img' src={this.props.saved.image} />
							<div>{this.props.saved.mealName}</div>
							<div> Calories per serving: {this.props.saved.calories}</div>
							<div className='videoDiv'>
								<a href={this.props.saved.youtube} target={"_blank"}>
									Recipe Youtube Link!
								</a>
							</div>
							<div>
								<ThumbUpIcon onClick={this.like}></ThumbUpIcon>
								{this.props.saved.likes}
							</div>
							<button className='buttonSaved2' onClick={this.removeMeal}>
								Remove from Profile
							</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(withRouter(SavedListItem));
