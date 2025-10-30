import type ExperienceContract from '@/contracts/datasources/ExperienceContract'
import type { ExperienceRecord } from '@/contracts/datasources/ExperienceContract'
import { Experience } from '@/entities/Experience'
import Technology from '@/entities/Technology'
import dayjs from '@/config/date'
import _ from 'lodash'

export default class ExperienceRepository {
    constructor(private datasource: ExperienceContract) {
        // ...
    }

    async findAll(lang: string = 'es'): Promise<Experience[]> {
        const experiences = await this.datasource.findAll()

        return experiences.map(
            (experience: ExperienceRecord) =>
                new Experience({
                    ...experience,
                    role: _.get(experience.role, lang, experience.role.es),
                    description: _.get(experience.description, lang, experience.description.es),
                    startDate: dayjs.utc(experience.startDate).locale(lang),
                    endDate: dayjs.utc(experience.endDate).locale(lang),
                    technologies: experience.technologies.map(
                        (technology) => new Technology(technology)
                    ),
                })
        )
    }
}
