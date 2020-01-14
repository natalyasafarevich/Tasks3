import React from 'react';
import { Form } from './Form';
// import { Input } from 'react-native-elements';
// import { AddForm } from './AddForm';

export class CustomerList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				{
					id: 1,
					name: 'Natalya',
					phone: '+375295555555'
				},
				{
					id: 2,
					name: 'Andrew',
					phone: '+375296666666'
				}
			]
		};
	}

	render() {
		return (
			<div>
				<Form
					onSave={(text) => {
						// Создаем новую задачу с текстом с формы
						const task = {
							id: this.nextId,
							isDone: false,
							text
						};

						// // Добавляем новую задачу в массив задач
						// this.setState({
						// 	tasks: addTask(this.state.tasks, task)
						// });

						this.nextId++;
					}}
				/>

				<table>
					<thead>
						<div>
							<tr>
								<th>ID</th>
								<th>NAME</th>
								<th>PHONE</th>
							</tr>
						</div>
					</thead>

					<tbody>
						{this.state.tasks.map((i, index) => {
							return (
								<div>
									<tr>
										<td>{i.id}</td>
										<td>{i.name}</td>
										<td>{i.phone}</td>
									</tr>
								</div>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
