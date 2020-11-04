export class Statistics {
  commonFailures: {
    failure: string;
    qtd: number;
  }[];

  failuresByTime: {
    failures: number;
    timestamp: string;
  }[];

  failuresByUsers: {
    account: {
      id: string;
      fullName: string;
    };
    failures: number;
  }[];

  usersByTime: {
    account: {
      id: string;
      fullName: string;
    };
    timeAverage: Date;
    timeVariance: number;
  }[];

  constructor(props: Statistics) {
    this.commonFailures = props.commonFailures;
    this.failuresByTime = props.failuresByTime;
    this.failuresByUsers = props.failuresByUsers;
    this.usersByTime = props.usersByTime;
  }
}
