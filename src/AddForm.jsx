import React from 'react';

export class AddForm extends React.Component {
	state = {
		text: ''
	};
	render() {
		return (
			<form onSubmit={(e) => e.preventDefault()}>
				<input
					type="text"
					value={this.state.text}
					onchange={(e) =>
						this.setState({
							text: e.target.value
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
