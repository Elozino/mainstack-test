import { useQuery, UseQueryOptions } from '@tanstack/react-query';

const useTanStackQuery = <T>(
  key: string,
  func: () => Promise<T>,
  options?: UseQueryOptions<T>
) => {
  const { data, isSuccess, isPending, isError } = useQuery<T>({
    queryKey: [key],
    queryFn: func,
    ...options,
  });
  return { data, isSuccess, isPending, isError };
};

export default useTanStackQuery;
