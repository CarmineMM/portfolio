export default class Technology {
    public id: string = ''
    public name: string = ''
    public icon: string = ''
    public description: string = ''
    public webUrl: string = ''

    constructor(data: Partial<Technology>) {
        Object.assign(this, data)
    }
}
