import React from "react";
import { Form } from "./Form";
import { Filter, filterTasks } from "./filterTasks";
function addTask(
  tasks,   taskToAdd 
) {
  return [...tasks, taskToAdd];
}

function updateTask(
  tasks, 
  id, 
  fieldToUpdate 
) {
  const taskIndex = tasks.findIndex(task => task.id === id); 
  const taskToUpdate = tasks[taskIndex];
  const taskCopy = { ...taskToUpdate, ...fieldToUpdate }; 
  return [
    ...tasks.slice(0, taskIndex), 
    taskCopy, 
    ...tasks.slice(taskIndex + 1) 
  ];
}

export class CustomerList extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        name: "Natalya",
        phone: "+375888888"
      },
      {
        id: 2,
        name: "Andrew",
        phone: "+3753355555"
      }
    ],

    taskToEdit: null,
    filter: Filter.ALL
  };
  nextId = 3;

  render() {
    return (
      <>
        <Form
          onSave={(name,phone) => {
            const task = {
              id: this.nextId,
              name, phone
            };
            this.setState({
              tasks: addTask(this.state.tasks, task)
            });

            this.nextId++;
          }}
        />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {filterTasks(this.state.tasks, this.state.filter).map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.phone}</td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
