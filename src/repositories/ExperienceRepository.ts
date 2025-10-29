import type ExperienceContract from '@/contracts/datasources/ExperienceContract'
import type { ExperienceRecord } from '@/contracts/datasources/ExperienceContract'
import { Experience } from '@/entities/Experience'
import Technology from '@/entities/Technology'
import dayjs from '@/config/date'

export default class ExperienceRepository {
    constructor(private datasource: ExperienceContract) {
        // ...
    }

    async findAll(): Promise<Experience[]> {
        const experiences = await this.datasource.findAll()

        return experiences.map((experience: ExperienceRecord) =>
            new Experience({
                ...experience,
                startDate: dayjs.utc(experience.startDate),
                endDate: dayjs.utc(experience.endDate),
                technologies: experience.technologies.map(
                    (technology) => new Technology(technology)
                ),
            })
        )
    }
}
