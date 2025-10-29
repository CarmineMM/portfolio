import ExperienceContract from '@/contracts/datasources/ExperienceContract'
import type { ExperienceRecord } from '@/contracts/datasources/ExperienceContract'

export default class ExperienceDatasourceJson extends ExperienceContract {
    public technologies = {
        javascript: {
            id: '1',
            name: 'JavaScript',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
            webUrl: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
            description: 'Javascript',
        },
        jquery: {
            id: '2',
            name: 'JQuery',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg',
            webUrl: 'https://jquery.com/',
            description: 'JQuery',
        },
        php: {
            id: '3',
            name: 'PHP',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
            webUrl: 'https://www.php.net/',
            description: 'PHP',
        },
        codeIgniter: {
            id: '4',
            name: 'CodeIgniter',
            icon: 'https://codeigniter.com/assets/icons/ci-logo.png',
            webUrl: 'https://codeigniter.com/',
            description: 'CodeIgniter',
        },
        wordpress: {
            id: '5',
            name: 'Wordpress',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg',
            webUrl: 'https://wordpress.org/',
            description: 'CodeIgniter',
        },
        laravel: {
            id: '6',
            name: 'Laravel',
            icon: 'https://raw.githubusercontent.com/laravel/art/d5f5e725c27f877ed032225fe0b00afee9337d0f/laravel-logo.svg',
            webUrl: 'https://laravel.com/',
            description: 'Laravel',
        },
        vue: {
            id: '7',
            name: 'Vue.js',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
            webUrl: 'https://vuejs.org/',
            description: 'Vue.js',
        },
    }

    async findAll(): Promise<ExperienceRecord[]> {
        return Promise.resolve(
            [
                {
                    id: '1',
                    role: 'Desarrollador Web',
                    company: 'ASD Studio',
                    startDate: '2018-10-01',
                    endDate: '2022-12-31',
                    description:
                        'Desarrollo de Aplicaciones y Sitios web informativos y BlogsDesarrollo de Aplicaciones y Sitios web informativos y Blogs',
                    technologies: [
                        this.technologies.javascript,
                        this.technologies.jquery,
                        this.technologies.php,
                        this.technologies.codeIgniter,
                        this.technologies.wordpress,
                    ],
                },
                {
                    id: '2',
                    role: 'Programador Web',
                    company: 'Freelancer',
                    startDate: '2018-10-01',
                    endDate: '2024-10-31',
                    description:
                        'Como programador freelancer me enfocaba en e-commerce, sistemas de gestión, blogs y landing pages.',
                    technologies: [
                        this.technologies.laravel,
                        this.technologies.wordpress,
                        this.technologies.php,
                        this.technologies.vue,
                        this.technologies.javascript,
                    ],
                },
            ].reverse()
        )
    }
}
