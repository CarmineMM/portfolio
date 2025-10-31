import dayjs from '@/config/date'
import type Technology from './Technology'
import FormatDateEntity from '@/helpers/FormatDateEntity'

export class Experience extends FormatDateEntity {
    public id: string = ''
    public role: string = ''
    public company: string = ''
    public companyLogoUrl?: string
    public companyWebsiteUrl?: string
    public startDate: dayjs.Dayjs = {} as dayjs.Dayjs
    public declare endDate?: dayjs.Dayjs
    public description: string = ''
    public address?: string
    public technologies: Technology[] = []

    constructor(data: Partial<Experience>) {
        super()
        Object.assign(this, data)
    }
}
