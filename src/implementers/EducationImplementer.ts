import EducationDatasourceJson from '@/datasources/EducationDatasourceJson'
import type { Education } from '@/entities/Education'
import EducationRepository from '@/repositories/EducationRepository'

export default class EducationImplementer {
    private repository: EducationRepository

    constructor(public lang: string = 'es') {
        this.repository = new EducationRepository(new EducationDatasourceJson())
    }

    async getAllEducations(): Promise<Education[]> {
        return this.repository.findAll(this.lang)
    }
}