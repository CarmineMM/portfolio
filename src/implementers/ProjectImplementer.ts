import ProjectRepository from '@/repositories/ProjectRepository'
import ProjectDatasourceJson from '@/datasources/ProjectDatasourceJson'
import type Project from '@/entities/Project'

export default class ProjectImplementer {
    private repository: ProjectRepository

    constructor(public lang: string = 'es') {
        this.repository = new ProjectRepository(new ProjectDatasourceJson())
    }

    async getAllProjects(): Promise<Project[]> {
        return this.repository.findAll(this.lang)
    }
}
