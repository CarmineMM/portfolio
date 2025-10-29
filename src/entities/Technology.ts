export default class Technology {
    id: string = ''
    name: string = ''
    description: string = ''
    webUrl: string = ''

    constructor(data: Partial<Technology>) {
        Object.assign(this, data)
    }
}