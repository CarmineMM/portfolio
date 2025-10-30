import type { EducationRecord } from '@/contracts/datasources/EducationContract';

export default class EducationDatasourceJson {
    async findAll(): Promise<EducationRecord[]> {
        return Promise.resolve([
            {
                id: '1',
                institution: 'Instituto Universitario Politécnico Santiago Mariño',
                degree: {
                    es: 'Ingeniería',
                    en: 'Engineering',
                },
                fieldOfStudy: {
                    es: 'Ingeniería de Sistemas',
                    en: 'Systems Engineering',
                },
                startDate: '2017-01-01',
                endDate: '2023-01-01',
                description: {
                    es: 'Actividades y grupos: La ingeniería de sistemas es un modo de enfoque interdisciplinario que permite estudiar y comprender la realidad, con el propósito de implementar u optimizar sistemas complejos. Puede verse como la aplicación tecnológica de la teoría de sistemas a los esfuerzos de la ingeniería, adoptando en todo este trabajo el paradigma sistémico. La ingeniería de sistemas integra otras disciplinas y grupos de especialidad en un esfuerzo de equipo, formando un proceso de desarrollo estructurado.',
                    en: 'Activities and groups: Systems engineering is a way of interdisciplinary approach that allows studying and understanding reality, with the purpose of implementing or optimizing complex systems. It can be seen as the technological application of systems theory to engineering efforts, adopting the systemic paradigm throughout this work. Systems engineering integrates other disciplines and specialty groups in a team effort, forming a structured development process.',
                },
                logoUrl: 'https://example.com/logo.png',
            }
        ])
    }
}