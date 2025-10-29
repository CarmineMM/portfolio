import ExperienceRepository from '@/repositories/ExperienceRepository'
import ExperienceDatasourceJson from '@/datasources/ExperienceDatasourceJson'
import type { Experience } from '@/entities/Experience'

export default class ExperienceImplementer {
    private repository: ExperienceRepository

    constructor(
        public lang: string = 'es'
    ) {
        this.repository = new ExperienceRepository(
            new ExperienceDatasourceJson()
        )
    }

    async getAllExperiences(): Promise<Experience[]> {
        return this.repository.findAll(this.lang)
    }
}