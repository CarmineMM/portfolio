export default class Technology {
    id: string = ''
    name: string = ''
    icon: string = ''
    description: string = ''
    webUrl: string = ''

    constructor(data: Partial<Technology>) {
        Object.assign(this, data)
    }
}
