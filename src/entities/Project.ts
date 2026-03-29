import type Technology from './Technology'

export default class Project {
    public id: string = ''
    public name: string = ''
    public description: string = ''
    public url: string = ''
    public images: string[] = []
    public technologies: Technology[] = []

    constructor(data: Partial<Project>) {
        Object.assign(this, data)
    }
}
