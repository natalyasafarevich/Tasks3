import React from 'react';

export class Form extends React.Component {
	state = {
    name: "",
    phone: ""
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
						if (this.state.text && this.state.text.trim()) {
							this.setState({ text: '' });
							this.props.onSave(this.state.text);
						}
					}}
				>
					Add
				</button>
			</form>
		);
	}
}
