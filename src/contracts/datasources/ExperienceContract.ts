import type languages from '@/interfaces/Languages'

export interface TechnologyRecord {
    id: string
    name: string
    icon: string
    description: string
    webUrl: string
}

export interface ExperienceRecord {
    id: string
    role: languages
    company: string
    startDate: string
    endDate: string
    description: languages
    technologies: TechnologyRecord[]
}

abstract class ExperienceContract {
    abstract findAll(): Promise<ExperienceRecord[]>
}

export default ExperienceContract
