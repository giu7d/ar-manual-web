export class Statistics {
  commonFailures!: {
    failure: string;
    qtd: number;
  }[];

  failuresByTime!: {
    failures: number;
    timestamp: string;
  }[];

  failuresByUsers!: {
    account: {
      id: string;
      fullName: string;
    };
    failures: number;
  }[];

  usersByTime!: {
    account: {
      id: string;
      fullName: string;
    };
    timeAverage: Date;
    timeVariance: number;
  }[];

  constructor(props: Statistics) {
    Object.assign(this, props);
  }
}
