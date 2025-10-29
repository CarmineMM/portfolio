import ExperienceContract from '@/contracts/datasources/ExperienceContract'
import { Experience } from '@/entities/Experience'
import dayjs from '@/config/date'
import Technology from '@/entities/Technology'

export default class ExperienceDatasourceJson extends ExperienceContract {
    async findAll(): Promise<Experience[]> {
        return Promise.resolve([
            new Experience({
                id: '1',
                role: 'Desarrollador Web',
                company: 'ASD Studio',
                startDate: dayjs.utc('2018-10-01'),
                endDate: dayjs.utc('2023-12-31'),
                description: 'Desarrollo de Aplicaciones y Sitios web informativos y BlogsDesarrollo de Aplicaciones y Sitios web informativos y Blogs',
                technologies: [
                    new Technology({
                        id: '1',
                        name: 'JavaScript',
                        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
                        webUrl: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
                        description: 'Javascript',
                    }),
                    new Technology({
                        id: '2',
                        name: 'JQuery',
                        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg',
                        webUrl: 'https://jquery.com/',
                        description: 'JQuery',
                    }),
                    new Technology({
                        id: '3',
                        name: 'PHP',
                        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
                        webUrl: 'https://www.php.net/',
                        description: 'PHP',
                    }),
                    new Technology({
                        id: '4',
                        name: 'CodeIgniter',
                        icon: 'https://codeigniter.com/assets/icons/ci-logo.png',
                        webUrl: 'https://codeigniter.com/',
                        description: 'CodeIgniter',
                    }),
                    new Technology({
                        id: '5',
                        name: 'Wordpress',
                        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg',
                        webUrl: 'https://wordpress.org/',
                        description: 'CodeIgniter',
                    }),
                ],
            }),
        ])
    }
}
