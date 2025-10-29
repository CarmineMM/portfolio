import ExperienceContract from '@/contracts/datasources/ExperienceContract'
import { Experience } from '@/entities/Experience'

export default class ExperienceDatasourceJson extends ExperienceContract {
    async findAll(): Promise<Experience[]> {
        return Promise.resolve([
            new Experience({
                id: '1',
                role: 'Desarrollador Web',
                company: 'ASD Studio',
            }),
        ])
    }
}
