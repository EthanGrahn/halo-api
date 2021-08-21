import * as axios from 'axios'

export class HttpWrapper {
    private options: any

    constructor(apiKey: string) {
        this.options = {
            baseURL: 'https://www.haloapi.com',
            url: '',
            method: 'get',
            headers: { 'Ocp-Apim-Subscription-Key': apiKey }
        }
    }

    /**
     * 
     * @param path URL path to make GET request to.
     * @returns Promise<any>
     */
    public request(path: string): Promise<any> {
        const _options = this.options
        _options.url = encodeURI(path)
        return axios.default.request(_options)
    }
}
