export interface TechnologyRecord {
    id: string
    name: string
    icon: string
    description: string
    webUrl: string
}

export interface ExperienceRecord {
    id: string
    role: string
    company: string
    startDate: string
    endDate: string
    description: string
    technologies: TechnologyRecord[]
}

abstract class ExperienceContract {
    abstract findAll(): Promise<ExperienceRecord[]>
}

export default ExperienceContract
