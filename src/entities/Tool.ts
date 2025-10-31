export default class Tool {
    public id: string = ''
    public name: string = ''
    public icon: string = ''
    public websiteUrl?: string
    public whyUseIt?: string = ''

    constructor(data: Partial<Tool>) {
        Object.assign(this, data)
    }
}