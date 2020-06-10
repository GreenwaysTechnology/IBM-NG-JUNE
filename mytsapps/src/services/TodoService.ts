import TODOS from '../mockdata/TODOS';
import { Todo } from '../types/todotype';

class TodoService{
    constructor(){

    }
    // findAllTodos():Todo[]{
    //     return TODOS;
    // }
    // findAllTodos():Array<Todo>{
    //     return TODOS;
    // }
    findAllTods():Promise<Array<Todo>>{
        return new Promise((resolve,reject)=>{
                setTimeout(resolve,5000,TODOS);
        });
    }

}
export default TodoService;