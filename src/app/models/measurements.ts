export class Measurements {
  atLeastOne: string;
  immunization: string;
  reportableLabResults: string;
  syndromicSurveillance: string;
  registry: string;

  constructor(data?: any) {
      this.atLeastOne = data.atleast_one_measure || data?.measurements?.atLeastOne || '';
      this.immunization = data.immunization_measure || data?.measurements?.immunization || '';
      this.reportableLabResults = data.reportable_lab_results_measure || data?.measurements?.reportableLabResults || '';
      this.syndromicSurveillance = data.syndromic_surveillance_measure || data?.measurements?.syndromicSurveillance || '';
      this.registry = data.registry_measure || data?.measurements?.registry || '';
  }
}
