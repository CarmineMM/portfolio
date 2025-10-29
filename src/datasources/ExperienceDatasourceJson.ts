import ExperienceContract from '@/contracts/datasources/ExperienceContract'
import type { ExperienceRecord } from '@/contracts/datasources/ExperienceContract'

export default class ExperienceDatasourceJson extends ExperienceContract {
    async findAll(): Promise<ExperienceRecord[]> {
        return Promise.resolve([
            {
                id: '1',
                role: 'Desarrollador Web',
                company: 'ASD Studio',
                startDate: '2018-10-01',
                endDate: '2023-12-31',
                description:
                    'Desarrollo de Aplicaciones y Sitios web informativos y BlogsDesarrollo de Aplicaciones y Sitios web informativos y Blogs',
                technologies: [
                    {
                        id: '1',
                        name: 'JavaScript',
                        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
                        webUrl: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
                        description: 'Javascript',
                    },
                    {
                        id: '2',
                        name: 'JQuery',
                        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg',
                        webUrl: 'https://jquery.com/',
                        description: 'JQuery',
                    },
                    {
                        id: '3',
                        name: 'PHP',
                        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
                        webUrl: 'https://www.php.net/',
                        description: 'PHP',
                    },
                    {
                        id: '4',
                        name: 'CodeIgniter',
                        icon: 'https://codeigniter.com/assets/icons/ci-logo.png',
                        webUrl: 'https://codeigniter.com/',
                        description: 'CodeIgniter',
                    },
                    {
                        id: '5',
                        name: 'Wordpress',
                        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg',
                        webUrl: 'https://wordpress.org/',
                        description: 'CodeIgniter',
                    },
                ],
            },
        ])
    }
}
