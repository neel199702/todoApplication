import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import TodoTable from './components/TodoTable';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h1" gutterBottom
        sx={{ marginTop: '20px', marginBottom: '20px' }}
        >
          Todo List
        </Typography>
        <TodoTable />
      </Container>
    </ThemeProvider>
  );
};

export default App;
