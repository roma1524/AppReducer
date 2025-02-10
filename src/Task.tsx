import List from '@mui/material/List';
import {TasksState} from '@/model/tasks-reducer.ts';
import {useAppSelector} from '@/common/hooks/useAppSelector.ts';
import {selectTasks} from '@/model/tasks-selectors.ts';
import type {Todolist} from '@/app/App.tsx';
import {TaskItem} from '@/TaskItem.tsx';

type Props = {
    todolist: Todolist
}

export const Task = ({todolist}: Props) => {
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