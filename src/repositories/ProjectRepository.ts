import type ProjectContract from '@/contracts/datasources/ProjectContract'
import type { ProjectRecord } from '@/contracts/datasources/ProjectContract'
import Project from '@/entities/Project'
import Technology from '@/entities/Technology'
import _ from 'lodash'

export default class ProjectRepository {
    constructor(private datasource: ProjectContract) {}

    async findAll(lang: string = 'es'): Promise<Project[]> {
        const projects = await this.datasource.findAll()

        return projects.map(
            (project: ProjectRecord) =>
                new Project({
                    ...project,
                    name: _.get(project.name, lang, project.name.es),
                    description: _.get(project.description, lang, project.description.es),
                    technologies: project.technologies.map(
                        (technology) => new Technology(technology)
                    ),
                })
        )
    }
}
