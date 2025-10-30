import type EducationContract from '@/contracts/datasources/EducationContract';

export default class EducationRepository {
    constructor(private datasource: EducationContract) {
        // ...
    }
}