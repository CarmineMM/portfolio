import type languages from '@/interfaces/Languages'

export interface EducationRecord {
    id: string
    institution: string
    degree: languages
    fieldOfStudy: languages
    startDate: string
    endDate?: string
    description: languages
    logoUrl?: string
}

abstract class EducationContract {
    abstract findAll(): Promise<EducationRecord[]>
}

export default EducationContract