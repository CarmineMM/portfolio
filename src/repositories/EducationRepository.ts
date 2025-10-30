import type { EducationRecord } from '@/contracts/datasources/EducationContract'
import type EducationContract from '@/contracts/datasources/EducationContract'
import { Education } from '@/entities/Education'
import dayjs from 'dayjs'
import _ from 'lodash'

export default class EducationRepository {
    constructor(private datasource: EducationContract) {
        // ...
    }

    async findAll(lang: string = 'es'): Promise<Education[]> {
        const educations = await this.datasource.findAll()

        return educations.map(
            (education: EducationRecord) =>
                new Education({
                    ...education,
                    degree: _.get(education.degree, lang, education.degree.es),
                    fieldOfStudy: _.get(education.fieldOfStudy, lang, education.fieldOfStudy.es),
                    description: _.get(education.description, lang, education.description.es),
                    startDate: dayjs.utc(education.startDate).locale(lang),
                    endDate: dayjs.utc(education.endDate).locale(lang),
                })
        )
    }
}