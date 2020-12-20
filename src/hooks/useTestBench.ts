import { useEffect } from "react";
import useSWR from "swr";
import { v4 } from "uuid";

import { Manual } from "../models/Manual";
import { fetcher } from "../services/api";
import { useStores } from "./useStores";

interface ITestBenchResponse {
  id: string;

  testBenchSerialNumber: string;

  componentSerialNumber: string;

  thumbnailSrc: string;

  cao: {
    id: string;
    description: string;
    items: any[];
  };

  instructions: {
    id: string;
    step: number;
    nextInstructionId?: string;
    description: string;
    sources: {
      id: string;
      type: "image" | "AR";
      src: string;
    }[];
    warning: any[];
  }[];

  isActive: boolean;
}

const adaptResponseToManual = (data: ITestBenchResponse): Manual => {
  return {
    id: data.id,
    componentSerialNumber: data.componentSerialNumber,
    testBenchSerialNumber: data.testBenchSerialNumber,
    thumbnail: {
      id: v4(),
      src: data.thumbnailSrc,
    },
    instructions: data.instructions.map((instruction) => ({
      id: instruction.id,
      description: instruction.description,
      images: instruction.sources
        .filter(({ type }) => type === "image")
        .map((src) => ({
          id: src.id,
          src: src.src,
        })),
      step: instruction.step,
      warnings: instruction.warning,
      title: "Hello World",
      animation: "",
    })),
  };
};

export const useTestBench = (id: string) => {
  const { data, error } = useSWR<ITestBenchResponse>(
    `/testbenches/${id}`,
    fetcher
  );

  const { manualManagerStore } = useStores();

  useEffect(() => {
    if (data) {
      manualManagerStore.setInstruction(
        adaptResponseToManual(data).instructions
      );
    }
  }, [data]);

  return {
    manual: data ? adaptResponseToManual(data) : undefined,
    isLoading: !error && !data,
    isError: error,
  };
};
