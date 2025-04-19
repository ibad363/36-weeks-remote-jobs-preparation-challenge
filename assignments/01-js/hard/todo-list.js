/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos = []
  }
  add(todo){
    this.todos.push(todo)
  }

  remove(todoIndex){
    if (todoIndex >= 0 && todoIndex < this.todos.length){
      this.todos.splice(todoIndex, 1)
    }
  }

  update(todoIndex, updatedTodo){
    if (todoIndex >= 0 && todoIndex < this.todos.length){
    this.todos[todoIndex] = updatedTodo
    } 
  }

  getAll(){
    return this.todos
  }

  get(todoIndex){
    if (todoIndex >= 0  && todoIndex < this.todos.length) {
      return this.todos[todoIndex]
    }else{
      return null 
    }
  }

  clear(){
    this.todos = []
  }
}

todos = new Todo()
todos.add("4")

console.log(todos.getAll())

module.exports = Todo;