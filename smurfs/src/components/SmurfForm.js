import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

class SmurfForm extends React.Component {
	state = {
		form: {
			nameValue: '',
			ageValue: '',
			heightValue: ''
		}
	};

	inputChange = (value, field) => {
		this.setState(state => ({
			form: {
				...state.form,
				[field]: value
			}
		}));
	};

	onNameChange = event => {
		this.inputChange(event.target.value, 'nameValue');
	};

	onHeightChange = event => {
		this.inputChange(event.target.value, 'heightValue');
	};

	onAgeChange = event => {
		this.inputChange(event.target.value, 'ageValue');
	};

	onAddSmurf = () => {
		const data = {
			name: this.state.form.nameValue,
			age: this.state.form.ageValue,
			height: this.state.form.heightValue
		};
		this.props.addSmurf(data);
	};

	render() {
		const form = this.state;
		return (
			<div>
				<h1>Add a Smurf</h1>
				<div>
					<em>Name:</em>
					<input value={form.nameValue} onChange={this.onNameChange} type="text" />
				</div>
				<div>
					<em>Age: </em>
					<input value={form.ageValue} onChange={this.onAgeChange} type="number" />
				</div>
				<div>
					<em>Height: </em>
					<input value={form.heightValue} onChange={this.onHeightChange} type="text" />
				</div>
				<div>
					<button onClick={this.onAddSmurf}>Add Smurf</button>
				</div>
			</div>
		);
	}
}

export default connect(null, { addSmurf })(SmurfForm);
