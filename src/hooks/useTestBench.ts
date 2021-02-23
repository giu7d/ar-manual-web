import { useEffect } from "react";
import useSWR from "swr";

import { ShowTestBenchAdapter } from "../services/adapters";
import { fetcher } from "../services/api";
import { useStores } from "./useStores";

export const useTestBench = (id: string) => {
  const { data, error, revalidate } = useSWR<IShowTestBenchResponse>(
    `/testbenches/${id}`,
    fetcher
  );

  const { manualManagerStore } = useStores();

  useEffect(() => {
    if (data) {
      manualManagerStore.setInstruction(
        ShowTestBenchAdapter(data).instructions
      );
    }
  }, [data, manualManagerStore]);

  return {
    revalidate,
    manual: data ? ShowTestBenchAdapter(data) : undefined,
    isLoading: !error && !data,
    isError: error,
  };
};
