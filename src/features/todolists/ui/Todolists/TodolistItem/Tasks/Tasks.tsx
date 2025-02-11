import List from '@mui/material/List';
import {TasksState} from '@/features/model/tasks-reducer.ts';
import {useAppSelector} from '@/common/hooks/useAppSelector.ts';
import {selectTasks} from '@/features/model/tasks-selectors.ts';
import {TaskItem} from '@/features/todolists/ui/Todolists/TodolistItem/Tasks/TaskItem/TaskItem.tsx';
import {Todolist} from "@/features/model/todolists-reducer.ts";

type Props = {
    todolist: Todolist
}

export const Tasks = ({todolist}: Props) => {
    const {id, filter} = todolist;

    const tasks = useAppSelector(selectTasks)


    const todolistTasks: TasksState[] = tasks[id]
    let filteredTasks = todolistTasks
    if (filter === 'active') {
        filteredTasks = todolistTasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = todolistTasks.filter(task => task.isDone)
    }

    return (
        <>
            {todolistTasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <List>
                    {filteredTasks.map(task => {

                        return (
                            <TaskItem key={task.id} task={task} todolist={todolist}/>
                        )
                    })}
                </List>
            )}
        </>
    )
}