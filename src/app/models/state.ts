export class State {
    code: string;
    name: string;

    constructor(data?: any) {
        this.code = data.region_code || data?.state?.code || '';
        this.name = data.region || data?.state?.name || '';
    }
}
