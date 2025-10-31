import FormatDateEntity from '@/helpers/FormatDateEntity'
import type dayjs from 'dayjs'

export class Education extends FormatDateEntity {
    public id: string = ''
    public institution: string = ''
    public degree: string = '' // Título obtenido (Licenciatura en.., Maestría en..., etc.)
    public fieldOfStudy: string = '' // Campo de estudio (Ingeniería, licenciatura, etc.)
    public startDate: dayjs.Dayjs = {} as dayjs.Dayjs
    public declare endDate?: dayjs.Dayjs
    public description: string = ''
    public logoUrl?: string

    constructor(data: Partial<Education>) {
        super()
        Object.assign(this, data)
    }
}
