import React, {Component} from 'react'
class ListTodoComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            todos:[
                {id:1,description:'Todo 1',done:false,targetDate:new Date()},
                {id:2,description:'Todo 2',done:false,targetDate:new Date()},
                {id:3,description:'Todo 3',done:false,targetDate:new Date()}
            ]
        }
    }
    render(){
        return (
            <div>
              <h1>List to do  Component</h1>
              <table className="table table-striped">
                  <thead>
                      <tr>
                          <th>Id</th>
                          <th>Description</th>
                          <th>Done</th>
                          <th>Target Date</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                        this.state.todos.map(
                            todo=>
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toLocaleString()}</td>
                                </tr>
                        )
                    }
                  </tbody>
              </table>
            </div>
        );
    }
}
export default ListTodoComponent;