import { request } from 'https'

interface IRequestOptions {
    host: string
    path: string
    method: string
    headers: Record<string, string>
}

export class HttpWrapper {
    private options: IRequestOptions = undefined

    constructor(apiKey: string) {
        this.options = {
            host: 'www.haloapi.com',
            path: '',
            method: 'GET',
            headers: { 'Ocp-Apim-Subscription-Key': apiKey }
        }
    }

    /**
     * 
     * @param path URL path to make GET request to.
     * @returns Promise<any>
     */
    public request(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const _options = this.options
            _options.path = encodeURI(path)
            let responseText = ''
            const req = request(_options, (response) => {
                response.on('data', (data) => {
                    responseText += data
                })
                response.on('end', () => {
                    resolve(JSON.parse(responseText))
                })
            })
            req.on('error', (e) => { reject(e) })
            req.end()
        })
    }
}
