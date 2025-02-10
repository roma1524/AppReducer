import type {FilterValues, Todolist} from '../../../../../app/App.tsx'
import {CreateItemForm} from '../../../../../CreateItemForm.tsx'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import {containerSx} from '../../../../../TodolistItem.styles.ts'
import {createTaskAC} from "@/model/tasks-reducer.ts";
import {useAppDispatch} from '@/common/hooks/useAppDispatch.ts';
import {changeTodolistFilterAC} from '@/model/todolists-reducer.ts';
import {TodolistTitle} from '@/TodolistTitle.tsx';
import {Task} from '@/Task.tsx';
import {FilterButtons} from '@/FilterButtons.tsx';

type Props = {
    todolist: Todolist
}

export const TodolistItem = ({todolist}: Props) => {

    const dispatch = useAppDispatch()

    const createTask = (title: string) => {
        dispatch(createTaskAC({todolistId: todolist.id, title}))
    }

    return (
        <div>
            <TodolistTitle todolist={todolist}/>
            <CreateItemForm onCreateItem={createTask}/>
            <Task todolist={todolist}/>
            <FilterButtons todolist={todolist}/>
        </div>
    )
}
