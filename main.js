import inquirer from "inquirer";
import chalk from "chalk";
let todosList = [];
let conditions = true;
//print welcome massege 
console.log(chalk.blueBright("Welcome to Todo List App"));
console.log(chalk.blueBright("---------------------------"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option: ",
                choices: ["Add task", "delete task", "update task", "view todo", "Exit"]
            }
        ]);
        if (option.choice === "Add task") {
            await Addtask();
        }
        else if (option.choice === "delete task") {
            await DeleteTask();
        }
        else if (option.choice === "update task") {
            await UpdateTask();
        }
        else if (option.choice === "view todo") {
            await ViewTask();
        }
        else if (option.choice === "Exit") {
            await Exit();
        }
    }
};
//fonction to add new task to list
let Addtask = async () => {
    console.log(chalk.greenBright("Add new task: \n"));
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task: "
        }
    ]);
    todosList.push(newTask.task);
    console.log(chalk.greenBright(`\n ${newTask.task}Task added successfully`));
};
//function to delete task from list
let DeleteTask = async () => {
    await ViewTask();
    let index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index of the task to delete: "
        }
    ]);
    todosList.splice(index.index - 1, 1);
    console.log(chalk.redBright(`\n Task deleted successfully`));
    console.log(chalk.redBright("\n"));
};
//function to update task from list
let UpdateTask = async () => {
    await ViewTask();
    let index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index of the task to update: "
        }
    ]);
    let updatedTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter the updated task: "
        }
    ]);
    todosList[index.index - 1] = updatedTask.task;
    console.log(chalk.yellowBright(`\n ${updatedTask.task}Task updated successfully`));
    console.log(chalk.yellowBright("\n"));
};
//function to view todo list
let ViewTask = async () => {
    console.log(chalk.blueBright("Your todo list: \n"));
    todosList.forEach((task, index) => {
        console.log(chalk.blueBright(`${index + 1}. ${task}`));
        console.log(chalk.blueBright("\n"));
    });
};
//function to exit the app
let Exit = async () => {
    conditions = false;
    console.log(chalk.redBright("Exiting the app..."));
};
main();
