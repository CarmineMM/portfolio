import type dayjs from 'dayjs'

export class Education {
    public id: string = ''
    public institution: string = ''
    public degree: string = '' // Título obtenido (Licenciatura en.., Maestría en..., etc.)
    public fieldOfStudy: string = '' // Campo de estudio (Ingeniería, licenciatura, etc.)
    startDate: dayjs.Dayjs = {} as dayjs.Dayjs
    endDate?: dayjs.Dayjs
    public description: string = ''
    public logoUrl?: string

    constructor(data: Partial<Education>) {
        Object.assign(this, data)
    }
}
