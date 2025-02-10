import {changeTaskStatusAC, changeTaskTitleAC, createTaskAC, deleteTaskAC} from "@/model/tasks-reducer.ts";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import {TodolistItem} from "@/TodolistItem.tsx";
import {
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    deleteTodolistAC,
    FilterValues
} from "@/model/todolists-reducer.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {selectTodolists} from "@/model/todolists-selectors.ts";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";

export const Todolists = () => {

    const todolists = useAppSelector(selectTodolists)

    const dispatch = useAppDispatch()

    const changeFilter = (todolistId: string, filter: FilterValues) => {
        dispatch(changeTodolistFilterAC({id: todolistId, filter}))
    }

    const deleteTodolist = (todolistId: string) => {
        dispatch(deleteTodolistAC({id: todolistId}))
    }

    const changeTodolistTitle = (todolistId: string, title: string) => {
        dispatch(changeTodolistTitleAC({id: todolistId, title}))
    }

    const deleteTask = (todolistId: string, taskId: string) => {
        dispatch(deleteTaskAC({todolistId, taskId}))
    }

    const createTask = (todolistId: string, title: string) => {
        dispatch(createTaskAC({todolistId, title}))
    }

    const changeTaskStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        dispatch(changeTaskStatusAC({todolistId, taskId, isDone}))
    }

    const changeTaskTitle = (todolistId: string, taskId: string, title: string) => {
        dispatch(changeTaskTitleAC({todolistId, taskId, title}))
    }

    return (
        <>
            {todolists.map(todolist => {


                return (
                    <Grid key={todolist.id}>
                        <Paper sx={{p: '0 20px 20px 20px'}}>
                            <TodolistItem todolist={todolist}
                                          deleteTask={deleteTask}
                                          changeFilter={changeFilter}
                                          createTask={createTask}
                                          changeTaskStatus={changeTaskStatus}
                                          deleteTodolist={deleteTodolist}
                                          changeTaskTitle={changeTaskTitle}
                                          changeTodolistTitle={changeTodolistTitle}/>
                        </Paper>
                    </Grid>
                )
            })}
        </>
    )
}