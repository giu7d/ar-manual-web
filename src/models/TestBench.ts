export class TestBench {
  id!: string;
  testBenchSerialNumber!: string;
  componentSerialNumber!: string;
  thumbnailSrc!: string;
  qrCodeSrc!: string;

  constructor(props: TestBench) {
    Object.assign(this, props);
  }
}
