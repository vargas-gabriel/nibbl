import React from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";

class SavedListItem extends React.Component {
	state = {
		note: "",
	};
	componentDidMount() {}
	removeMeal = () => {
		this.props.dispatch({
			type: "REMOVE_MEAL",
			url: `/api/ind/${this.props.store.user.id}`,
		});
		window.location.reload();
	};
	handleChange = (event) => {
		console.log(event.target.value);
		this.setState({
			note: event.target.value,
		});
	};
	addNote = () => {
		console.log(this.state);
		// console.log("submitted", this.state);
		// this.props.dispatch({
		// 	type: "ADD_NOTE",
		// 	url: `/api/ind/${this.props.saved.MEAL_ID}`,
		// 	payload: this.state.note,
		// });
		// this.setState({
		// 	note: "",
		// });
	};
	render() {
		return (
			<div>
				<ul>
					<li>
						<div>
							{this.props.saved.mealName}
							{""}
							{this.props.saved.calories}
							{""}
							{this.props.saved.youtube}
							{""}
							<form onSubmit={this.addNote}>
								<input
									onChange={this.handleChange}
									type='text'
									value={this.state.note}
									placeholder='add a note'></input>
								<button type='submit'>Add Note</button>
							</form>

							<button onClick={this.removeMeal}>Remove</button>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}

export default connect(mapStoreToProps)(withRouter(SavedListItem));
