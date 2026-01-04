'use client';

import { useQuery } from "@tanstack/react-query";
import { findMenuById } from "../service/menuService";

const useMenuDetails = (id: string) => {
  const {
    data,
    isLoading: loadingMenuDetail,
    isError: errorMenuDetail,
  } = useQuery({
    queryKey: ['menu', id],
    queryFn: () => findMenuById(id),
    enabled: !!id,
  });

  return { data, loadingMenuDetail, errorMenuDetail };
};

export default useMenuDetails;
