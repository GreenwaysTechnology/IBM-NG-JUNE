import TodoService from './services/TodoService';


async function main(){

    //create TodoService Object and invoke findall method
    let todoService = new TodoService();
    console.log("Loading.....")
    let todos = await todoService.findAllTods();
    console.log(todos);

}
main();