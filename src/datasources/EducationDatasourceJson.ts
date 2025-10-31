import type { EducationRecord } from '@/contracts/datasources/EducationContract'

export default class EducationDatasourceJson {
    async findAll(): Promise<EducationRecord[]> {
        return Promise.resolve([
            {
                id: '1',
                institution: 'ArSistemas',
                degree: {
                    es: 'Programación informática',
                    en: 'Computer Programming',
                },
                fieldOfStudy: {
                    es: 'Diseño y desarrollo de web',
                    en: 'Web Design and Development',
                },
                startDate: '2018-01-01',
                endDate: '2018-01-01',
                description: {
                    es: 'HTML, CSS, CSS3, JavaScript, Bootstrap 4,  WordPress, Joomla, PHP, MySQL.',
                    en: 'HTML, CSS, CSS3, JavaScript, Bootstrap 4,  WordPress, Joomla, PHP, MySQL.',
                },
                // logoUrl: '/assets/institutions/university-psm.png',
            },
            {
                id: '2',
                institution: 'Cisco Networking Academy',
                degree: {
                    es: 'Redes y seguridad informática',
                    en: 'Computer Networking and Security',
                },
                fieldOfStudy: {
                    es: 'CCNA1, CCNA R&S',
                    en: 'CCNA1, CCNA R&S',
                },
                startDate: '2017-01-01',
                endDate: '2018-01-01',
                description: {
                    es: 'Especialización en las estructuras y arquitecturas de Red más Actuales en el mercado. Desarrollos de Redes de pequeñas y medianas Empresas mediante la aplicación de conocimientos prácticos de routing, switching, aplicaciones de redes y protocolos.',
                    en: 'Specialization in the most current Network structures and architectures in the market. Development of Networks for small and medium-sized Enterprises through the application of practical knowledge of routing, switching, network applications and protocols.',
                },
                logoUrl: '/assets/institutions/cisco_networking_academy_logo.jpeg',
            },
            {
                id: '3',
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
                logoUrl: '/assets/institutions/university-psm.png',
            }
        ].reverse())
    }
}