import useSWR from "swr";

import { Statistics } from "../models/Statistics";
import { fetcher } from "../services/api";

export const useStatistics = (testbenchId: string) => {
  const { data, error, revalidate } = useSWR(
    `/testbenches/${testbenchId}/statistics`,
    fetcher
  );

  return {
    revalidate,
    statistics: data as Statistics,
    isLoading: !error && !data,
    isError: error,
  };
};
