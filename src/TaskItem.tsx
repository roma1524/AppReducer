import {getListItemSx} from '@/TodolistItem.styles.ts';
import Checkbox from '@mui/material/Checkbox';
import {EditableSpan} from '@/EditableSpan.tsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import {changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC, Task} from '@/model/tasks-reducer.ts';
import type {ChangeEvent} from 'react';
import {useAppDispatch} from '@/common/hooks/useAppDispatch.ts';
import type {Todolist} from '@/app/App.tsx';

type Props = {
    task: Task;
    todolist: Todolist
}

export const TaskItem = ({task, todolist}: Props) => {
    const {id} = todolist;
    const dispatch = useAppDispatch()

    const deleteTaskHandler = () => {
        dispatch(deleteTaskAC({todolistId: id, taskId: task.id}))
    }

    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked
        dispatch(changeTaskStatusAC({todolistId: id, taskId: task.id, isDone: newStatusValue}))

    }

    const changeTaskTitle = (title: string) => {
        dispatch(changeTaskTitleAC({todolistId: id, taskId: task.id, title}))

    }

    return (
        <ListItem key={task.id} sx={getListItemSx(task.isDone)}>
            <div>
                <Checkbox checked={task.isDone} onChange={changeTaskStatus}/>
                <EditableSpan value={task.title} onChange={changeTaskTitle}/>
            </div>
            <IconButton onClick={deleteTaskHandler}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    )
}
