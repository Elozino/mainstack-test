import { useQuery } from '@tanstack/react-query'

const useTanStackQuery = (key: string, func: () => unknown) => {
  const { data, isSuccess, isPending, isError } = useQuery({
    queryKey: [key],
    queryFn: func,
  })
  return { data, isSuccess, isPending, isError }
}

export default useTanStackQuery