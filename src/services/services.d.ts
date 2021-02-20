type IShowTestBenchResponse = {
  id: string;

  testBenchSerialNumber: string;

  componentSerialNumber: string;

  thumbnailSrc: string;

  cao: {
    id: string;
    description: string;
    items: {
      id: string;
      description: string;
      frequency: string | { series: string; reforce: string };
      method: string;
      conformity: string;
    }[];
  };

  instructions: {
    id: string;
    step: number;
    nextInstructionId?: string;
    title: string;
    description: string;
    sources: {
      id: string;
      type: "image" | "3D";
      src: string;
    }[];
    warning: any[];
  }[];

  isActive: boolean;
};
