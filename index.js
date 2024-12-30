let tasks = [
    {title:"upload a file",due_time:2,priority:4},
    {title:"download a file",due_time:5,priority:6},
    {title:"make a file",due_time:3,priority:5}
]

const addTask = (tasks,new_task) => {
    tasks.push(new_task)
}
addTask(tasks,{title:"debug a code",due_time:6,priority:8})
// console.log(tasks)

let task_sort = tasks.sort((a,b) => a.priority - b.priority)
// console.log(task_sort)

let due = (tasks,task_new) =>{
    const now = 0
    return tasks.filter(tasks => tasks.due_time<now +task_new)
}
// console.log(due(tasks,5))

const scheduleReminder = (tasks) =>{
    tasks.forEach(tasks => {
        setTimeout(()=>{
            console.log(`Reminder : Task ${tasks.title} is due now`)
        },tasks.due_time*1000)
    })
}

scheduleReminder(tasks)