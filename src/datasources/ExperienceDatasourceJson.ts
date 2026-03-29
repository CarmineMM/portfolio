import ExperienceContract from '@/contracts/datasources/ExperienceContract'
import type { ExperienceRecord } from '@/contracts/datasources/ExperienceContract'
import technologies from '@/datasources/TechnologiesDatasource'

export default class ExperienceDatasourceJson extends ExperienceContract {
    async findAll(): Promise<ExperienceRecord[]> {
        return Promise.resolve(
            [
                {
                    id: '1',
                    role: {
                        es: 'Desarrollador Web',
                        en: 'Web Developer',
                    },
                    company: 'ASD Studio',
                    startDate: '2018-10-01',
                    endDate: '2022-12-31',
                    description: {
                        es: 'Desarrollo de Sitios web informativos como blogs, landing page de promociones y pequeñas e-commerce de servicios digitales.',
                        en: 'Development of informative websites such as blogs, landing pages for promotions and small e-commerce of digital services.',
                    },
                    technologies: [
                        technologies.javascript,
                        technologies.jquery,
                        technologies.php,
                        technologies.codeIgniter,
                        technologies.wordpress,
                        technologies.mariaDB,
                    ],
                },
                {
                    id: '2',
                    role: {
                        es: 'Programador Web',
                        en: 'Web Programmer',
                    },
                    company: 'Freelancer',
                    startDate: '2018-10-01',
                    endDate: '2024-10-31',
                    description: {
                        es: 'Como programador freelancer me enfocaba en e-commerce, sistemas de gestión, blogs y landing pages.',
                        en: 'As a freelance programmer I focused on e-commerce, management systems, blogs and landing pages.',
                    },
                    technologies: [
                        technologies.laravel,
                        technologies.wordpress,
                        technologies.php,
                        technologies.vue,
                        technologies.alpinejs,
                        technologies.javascript,
                        technologies.mariaDB,
                        technologies.postgreSQL,
                        technologies.hetzner,
                    ],
                },
                {
                    id: '3',
                    role: {
                        es: 'Ingeniero de Software',
                        en: 'Software Engineer',
                    },
                    company: '3MIT.dev',
                    companyWebsiteUrl: 'https://www.3mit.net/',
                    companyLogoUrl: '/assets/companies-logos/logo-3mit.webp',
                    startDate: '2022-10-01',
                    endDate: '2024-09-16',
                    description: {
                        es: 'Se trabajo en una aplicación móvil, frontend y backend, llamada <b>Posmit</b> la cual contaba con la característica de ser Offline First. El objetivo principal es ser un <b>Punto de Venta</b> y <b>ERP</b> para el uso de PYMES y comercios en general.',
                        en: 'Worked on a mobile application, frontend and backend, called <b>Posmit</b> which had the characteristic of being Offline First. The main objective is to be a <b>Point of Sale</b> and <b>ERP</b> for the use of SMEs and businesses in general.',
                    },
                    technologies: [
                        technologies.typescript,
                        technologies.javascript,
                        technologies.react,
                        technologies.reactNative,
                        technologies.nodejs,
                        technologies.express,
                    ],
                },
                {
                    id: '4',
                    role: {
                        es: 'Consultor Desarrollador de Software',
                        en: 'Software Development Consultant',
                    },
                    company: 'Tiendas Daka',
                    companyWebsiteUrl: 'https://tiendasdaka.com/',
                    companyLogoUrl: '/assets/companies-logos/LOGODAKA.svg',
                    startDate: '2024-12-03',
                    endDate: '2025-10-15',
                    description: {
                        es: '<b>Lideré el desarrollo de la tienda e-commerce</b> de una de las cadenas de retail más grandes de Venezuela, con más de <b>2 millones de clientes</b>, utilizando <b>React</b>, <b>Next.js</b>, <b>NestJS</b> y <b>MedusaJS</b> sobre <b>PostgreSQL</b>. Participé también en múltiples proyectos internos: una aplicación móvil en <b>Flutter</b> para servicio técnico, plataformas web en <b>Laravel</b> y <b>Livewire</b> para clientes y administración, y un sistema administrativo con <b>FilamentPHP</b>. Implementé un servicio en <b>Node.js</b> para sincronización entre <b>SQL Server</b> y <b>PostgreSQL</b>, y desarrollé un formulario utilizado por más de <b>300.000 usuarios</b>.',
                        en: '<b>Led the development of the e-commerce store</b> for one of Venezuela\'s largest retail chains, serving over <b>2 million customers</b>, built with <b>React</b>, <b>Next.js</b>, <b>NestJS</b> and <b>MedusaJS</b> on <b>PostgreSQL</b>. Also contributed to multiple internal projects: a <b>Flutter</b> mobile app for technical service, web platforms in <b>Laravel</b> and <b>Livewire</b> for clients and administration, and an admin system with <b>FilamentPHP</b>. Implemented a <b>Node.js</b> service for synchronization between <b>SQL Server</b> and <b>PostgreSQL</b>, and developed a form used by over <b>300,000 users</b>.',
                    },
                    technologies: [
                        technologies.laravel,
                        technologies.livewire,
                        technologies.typescript,
                        technologies.react,
                        technologies.nextjs,
                        technologies.vue,
                        technologies.postgreSQL,
                        technologies.sqlServer,
                        technologies.dart,
                        technologies.flutter,
                        technologies.medusaJS,
                        technologies.aws,
                        technologies.nestjs,
                    ],
                },
            ].reverse()
        )
    }
}
