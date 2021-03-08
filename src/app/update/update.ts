export class Update {
  environment: string;
  trackerId: number;
  status: string;

  constructor(environment: string, trackerId: number, status: string) {
    this.environment = environment;
    this.trackerId = trackerId;
    this.status = status;
  }
}


