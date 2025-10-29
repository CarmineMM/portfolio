import type dayjs from '@/config/date'
import type Technology from './Technology'

export class Experience {
    id: string = ''
    role: string = ''
    company: string = ''
    startDate: dayjs.Dayjs = {} as dayjs.Dayjs
    endDate: dayjs.Dayjs = {} as dayjs.Dayjs
    description: string = ''
    technologies: Technology[] = []

    constructor(data: Partial<Experience>) {
        Object.assign(this, data)
    }
}
