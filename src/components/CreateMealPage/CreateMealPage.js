import React, { Component } from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";
import "./CreateMealPage.css";
import swal from "sweetalert";
class CreateMealPage extends Component {
	state = {
		mealName: "",
		calories: "",
		youtube: "",
		image: "",
		type: "",
		time: "",
		id: this.props.store.user.id,
	};
	handleMealChange = (event) => {
		console.log(event.target.value);
		this.setState({
			mealName: event.target.value,
		});
	};
	handleCalChange = (event) => {
		console.log(event.target.value);
		this.setState({
			calories: event.target.value,
		});
	};
	handleYouChange = (event) => {
		console.log(event.target.value);
		this.setState({
			youtube: event.target.value,
		});
	};
	handleImgChange = (event) => {
		console.log(event.target.value);
		this.setState({
			image: event.target.value,
		});
	};
	handleTypeChange = (event) => {
		console.log(event.target.value);
		this.setState({
			type: event.target.value,
		});
	};
	handleTimeChange = (event) => {
		console.log(event.target.value);
		this.setState({
			time: event.target.value,
		});
	};

	handleSubmit = () => {
		console.log("submitted", this.state);
		this.props.dispatch({
			type: "CREATE_MEAL",
			payload: this.state,
		});

		this.setState({
			mealName: "",
			calories: "",
			youtube: "",
			type: "",
		});
		this.successMessage();
	};
	successMessage = () => {
		swal("Meal created and saved to your profile!");
	};

	render() {
		return (
			<div className='div'>
				<p>Hi {this.props.store.user.username}, Create Your Own Meal Below:</p>
				<form onSubmit={this.handleSubmit}>
					<input
						className='inputItem'
						required
						value={this.state.meal}
						type='text'
						placeholder='Meal Name'
						onChange={this.handleMealChange}></input>
					<input
						className='inputItem'
						required
						value={this.state.calories}
						type='number'
						placeholder='Calories'
						onChange={this.handleCalChange}></input>
					<input
						className='inputItem'
						required
						value={this.state.youtube}
						type='text'
						placeholder='Youtube Link'
						onChange={this.handleYouChange}></input>
					<input
						className='inputItem'
						required
						value={this.state.image}
						placeholder='Image'
						onChange={this.handleImgChange}></input>
					<select
						className='inputItem'
						required
						value={this.state.type}
						onChange={this.handleTypeChange}>
						<option disabled value='0'>
							Pick Diet
						</option>
						<option value={1}>Keto</option>
						<option value={2}>Vegan</option>
						<option value={3}>Vegetarian</option>
						<option value={4}>Paleo</option>
					</select>
					<select
						className='inputItem'
						required
						value={this.state.time}
						onChange={this.handleTimeChange}>
						<option disabled value='0'>
							Pick Type
						</option>
						<option value={1}>Breakfast</option>
						<option value={2}>Lunch</option>
						<option value={3}>Dinner</option>
					</select>
					<button className='buttonSaved' type='submit'>
						Save Meal
					</button>
				</form>
			</div>
		);
	}
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(CreateMealPage);
