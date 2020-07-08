import { environment } from './../../environments/environment';
import { Measurements } from './measurements';
import { State } from './state';

export class ApiItem {
  state: State;
  period: string;
  measurements: Measurements;

  constructor(rawResult?: any) {
      this.state =  new State(rawResult);
      this.period = rawResult.period || environment.year;
      this.measurements = new Measurements(rawResult);
  }
}
