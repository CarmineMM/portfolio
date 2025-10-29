import type { Experience } from '@/entities/Experience'

abstract class ExperienceContract {
    abstract findAll(): Promise<Experience[]>
}

export default ExperienceContract