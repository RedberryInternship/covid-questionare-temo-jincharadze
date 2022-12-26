import { useQuery } from '@/hooks';

const useArrow = () => {
  const { getQuery } = useQuery('page');

  return { getQuery };
};

export default useArrow;
