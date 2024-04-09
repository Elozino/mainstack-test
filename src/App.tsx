import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import Dashboard from "./pages/Dashboard"
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Dashboard />
      </MantineProvider>
    </QueryClientProvider>

  )
}

export default App
