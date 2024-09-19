import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodos } from '../redux/todoSlice';
import { RootState, AppDispatch } from '../redux/store';
import { Table, TableBody, TableCell, TableHead, TableRow, CircularProgress, Box } from '@mui/material';
import Pagination from './Pagination';

const TodoTable: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { todos, loading, error } = useSelector((state: RootState) => state.todos);
    const [page, setPage] = useState<number>(1);
    const rowsPerPage = 10;

    useEffect(() => {
        // Dispatch loadTodos with limit and page parameters
        dispatch(loadTodos({ limit: rowsPerPage, page }));
    }, [dispatch, page]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value); // Update the page number when the user clicks on a different page
    };

    if (loading) return <CircularProgress />;
    if (error) return <div>{error}</div>;

    return (
        <Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.map((todo) => (
                        <TableRow key={todo.id}>
                            <TableCell>{todo.id}</TableCell>
                            <TableCell>{todo.title}</TableCell>
                            <TableCell>{todo.completed ? 'Completed' : 'Pending'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination count={Math.ceil(100 / rowsPerPage)} page={page} onChange={handlePageChange} />
        </Box>
    );
};

export default TodoTable;
