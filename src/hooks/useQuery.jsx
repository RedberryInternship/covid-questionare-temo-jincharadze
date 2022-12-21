import { useLocation } from 'react-router-dom';

const useQuery = (query) => {
  const { search } = useLocation();
  const parameter = new URLSearchParams(search);
  const getQuery = parameter.get(query);

  return { getQuery };
};

export default useQuery;
