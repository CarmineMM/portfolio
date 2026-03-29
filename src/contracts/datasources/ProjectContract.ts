import type languages from '@/interfaces/Languages'
import type { TechnologyRecord } from './ExperienceContract'

export interface ProjectRecord {
    id: string
    name: languages
    description: languages
    url: string
    images: string[]
    technologies: TechnologyRecord[]
}

abstract class ProjectContract {
    abstract findAll(): Promise<ProjectRecord[]>
}

export default ProjectContract
