import type Technology from './Technology'

export class Experience {
    id: string = ''
    role: string = ''
    company: string = ''
    startDate: string = ''
    endDate: string | null = null
    description: string = ''
    technologies: Technology[] = []

    constructor(data: Partial<Experience>) {
        Object.assign(this, data)
    }
}
