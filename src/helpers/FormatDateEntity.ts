import { __ } from '@config/i18n'
import dayjs from 'dayjs'

export default class FormatDateEntity {
    startDate: dayjs.Dayjs = {} as dayjs.Dayjs
    endDate?: dayjs.Dayjs

    overrideStartDate(date: dayjs.Dayjs) {
        this.startDate = date
    }

    overrideEndDate(date: dayjs.Dayjs | undefined) {
        this.endDate = date
    }

    getStartDateYear(): string {
        return this.startDate.format('YYYY')
    }

    getEndDateYear(): string {
        return this.endDate ? this.endDate.format('YYYY') : __('experience.present')
    }

    getDuration(lang: string): string {
        const locale = this.startDate.locale()
        const startLabel = this.startDate.locale(locale).format('MMMM YYYY')
        const currentEndDate = this.endDate ?? dayjs()
        const endLabel = this.endDate
            ? currentEndDate.locale(locale).format('MMMM YYYY')
            : __('experience.present')

        const totalMonths = currentEndDate.diff(this.startDate, 'month')
        const years = Math.floor(totalMonths / 12)
        const months = totalMonths % 12

        const durationParts: string[] = []

        if (years > 0) {
            durationParts.push(
                `${years} ${years > 1 ? __('experience.duration.years', { lng: lang }) : __('experience.duration.year', { lng: lang })}`
            )
        }

        if (months > 0) {
            durationParts.push(
                `${months} ${months > 1 ? __('experience.duration.months', { lng: lang }) : __('experience.duration.month', { lng: lang })}`
            )
        }

        if (durationParts.length === 0) {
            durationParts.push(__('experience.duration.less-than-month', { lng: lang }))
        }

        return `${startLabel} - ${endLabel} · ${durationParts.join(' ')}`
    }
}