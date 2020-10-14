import React, { Component } from "react";
import { connect } from "react-redux";
// import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";

class UserPage extends Component {
	state = {
		hour: null,
	};
	componentDidMount() {
		this.getHour();
	}
	getHour = () => {
		const date = new Date();
		const hour = date.getHours();
		this.setState({
			hour,
		});
	};

	render() {
		const { hour } = this.state;
		console.log(this.state.hour);
		return (
			<div>
				<h1 id='welcome'>
					{hour < 12
						? `Good Morning, ${this.props.store.user.username}`
						: `Good Evening, ${this.props.store.user.username}`}
				</h1>
				{/* <p>Your ID is: {this.props.store.user.id}</p> */}
				{/* <LogOutButton className="log-in" /> */}

				<p>To begin, select a diet from the list:</p>
				<div>Ketogenic</div>
				<div>Paleo</div>
				<div>Vegan</div>
				<div>Vegetarian</div>
			</div>
		);
	}
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
