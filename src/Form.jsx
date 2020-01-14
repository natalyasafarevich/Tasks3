import React from 'react';

export class Form extends React.Component {
	state = {
		name: '',
		phone: ''
	};

	render() {
		return (
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					placeholder="Name"
					type="text"
					value={this.state.name}
					onChange={(e) =>
						this.setState({
							name: e.target.value
						})}
				/>
				<input
					placeholder="Phone"
					type="text"
					value={this.state.phone}
					onChange={(e) =>
						this.setState({
							phone: e.target.value
						})}
				/>

				<button
					onClick={() => {
						if ((this.state.name && this.state.name.trim(), this.state.phone && this.state.phone.trim())) {
							this.setState({ name: '' });
							this.setState({ phone: '' });
							this.props.onSave(this.state.name, this.state.phone);
						}
					}}
				>
					Add
				</button>
			</form>
		);
	}
}
