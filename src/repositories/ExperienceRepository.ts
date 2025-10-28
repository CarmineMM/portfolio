import type ExperienceContract from '@/contracts/datasources/ExperienceContract'

export default class ExperienceDatasource {
    constructor(
        private datasource: ExperienceContract
    ) {
        //...
    }
}