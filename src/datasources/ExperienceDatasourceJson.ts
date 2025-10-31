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
        typescript: {
            id: '8',
            name: 'TypeScript',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
            webUrl: 'https://www.typescriptlang.org/',
            description: 'TypeScript',
        },
        postgreSQL: {
            id: '9',
            name: 'PostgreSQL',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
            webUrl: 'https://www.postgresql.org/',
            description: 'PostgreSQL',
        },
        mariaDB: {
            id: '10',
            name: 'MariaDB',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mariadb/mariadb-original.svg',
            webUrl: 'https://mariadb.org/',
            description: 'MariaDB',
        },
        react: {
            id: '11',
            name: 'React',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
            webUrl: 'https://reactjs.org/',
            description: 'React',
        },
        reactNative: {
            id: '12',
            name: 'React Native',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
            webUrl: 'https://reactnative.dev/',
            description: 'React Native',
        },
        nodejs: {
            id: '13',
            name: 'Node.js',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
            webUrl: 'https://nodejs.org/',
            description: 'Node.js',
        },
        express: {
            id: '14',
            name: 'Express.js',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
            webUrl: 'https://expressjs.com/',
            description: 'Express.js',
        },
        sqlServer: {
            id: '15',
            name: 'SQL Server',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
            webUrl: 'https://www.microsoft.com/en-us/sql-server/',
            description: 'SQL Server',
        },
        dart: {
            id: '16',
            name: 'Dart',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg',
            webUrl: 'https://dart.dev/',
            description: 'Dart',
        },
        flutter: {
            id: '17',
            name: 'Flutter',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg',
            webUrl: 'https://flutter.dev/',
            description: 'Flutter',
        },
        livewire: {
            id: '18',
            name: 'Livewire',
            icon: '/assets/technologies/livewire-logo.png',
            webUrl: 'https://laravel-livewire.com/',
            description: 'Livewire',
        },
        nextjs: {
            id: '19',
            name: 'Next.js',
            icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
            webUrl: 'https://nextjs.org/',
            description: 'Next.js',
        },
        alpinejs: {
            id: '20',
            name: 'Alpine.js',
            icon: 'https://alpinejs.dev/alpine_long.svg',
            webUrl: 'https://alpinejs.dev/',
            description: 'Alpine.js',
        },
        medusaJS: {
            id: '21',
            name: 'MedusaJS',
            icon: '',
            webUrl: 'https://medusajs.com/',
            description: 'MedusaJS',
        },
        hetzner: {
            id: '22',
            name: 'Hetzner',
            icon: 'https://www.hetzner.com/favicon.ico',
            webUrl: 'https://www.hetzner.com/',
            description: 'Hetzner',
        },
        aws: {
            id: '23',
            name: 'AWS',
            icon: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FArchivo%3AAmazon_Web_Services_Logo.svg&psig=AOvVaw01dQZux6dmu4BAJ0DuLrul&ust=1761968671495000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIiqwvjCzZADFQAAAAAdAAAAABAE',
            webUrl: 'https://aws.amazon.com/',
            description: 'AWS',
        }
    }

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
                        this.technologies.javascript,
                        this.technologies.jquery,
                        this.technologies.php,
                        this.technologies.codeIgniter,
                        this.technologies.wordpress,
                        this.technologies.mariaDB,
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
                        this.technologies.laravel,
                        this.technologies.wordpress,
                        this.technologies.php,
                        this.technologies.vue,
                        this.technologies.alpinejs,
                        this.technologies.javascript,
                        this.technologies.mariaDB,
                        this.technologies.postgreSQL,
                        this.technologies.hetzner,
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
                    companyLogoUrl:
                        'https://www.3mit.net/web/image/website/1/logo/3MIT%20Website?unique=54ee966',
                    startDate: '2022-10-01',
                    endDate: '2024-09-16',
                    description: {
                        es: 'Se trabajo en una aplicación móvil, frontend y backend, llamada <b>Posmit</b> la cual contaba con la característica de ser Offline First. El objetivo principal es ser un <b>Punto de Venta</b> y <b>ERP</b> para el uso de PYMES y comercios en general.',
                        en: 'Worked on a mobile application, frontend and backend, called <b>Posmit</b> which had the characteristic of being Offline First. The main objective is to be a <b>Point of Sale</b> and <b>ERP</b> for the use of SMEs and businesses in general.',
                    },
                    technologies: [
                        this.technologies.typescript,
                        this.technologies.javascript,
                        this.technologies.react,
                        this.technologies.reactNative,
                        this.technologies.nodejs,
                        this.technologies.express,
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
                    companyLogoUrl: 'https://tiendasdaka.com/img/logoF.webp',
                    startDate: '2024-12-03',
                    endDate: '2025-10-15',
                    description: {
                        es: 'En Tiendas Daka, participe el desarrollo de múltiples proyectos internos, incluyendo una aplicación móvil en <b>Flutter</b> para servicio técnico, plataformas web en <b>Laravel</b> y <b>Livewire</b> para clientes y administración, y un sistema administrativo con <b>FilamentPHP</b>. Implementé un servicio en <b>Node.js</b> para sincronización entre bases de datos <b>SQL Server</b> y <b>PostgreSQL</b>. Además, se desarrollo un formulario en <b>Laravel</b> y <b>Livewire</b> utilizado por más de 300,000 usuarios y <b>lidere</b> la tienda e-commerce en <b>React</b>, <b>Next.js</b> y <b>MedusaJS</b> con <b>PostgreSQL</b>.',
                        en: 'At Tiendas Daka, I participated in the development of multiple internal projects, including a mobile application in <b>Flutter</b> for technical service, web platforms in <b>Laravel</b> and <b>Livewire</b> for clients and administration, and an administrative system with <b>FilamentPHP</b>. I implemented a service in <b>Node.js</b> for synchronization between <b>SQL Server</b> and <b>PostgreSQL</b> databases. In addition, I developed a form in <b>Laravel</b> and <b>Livewire</b> used by more than 300,000 users and <b>led</b> the e-commerce store in <b>React</b>, <b>Next.js</b> and <b>MedusaJS</b> with <b>PostgreSQL</b>.',
                    },
                    technologies: [
                        this.technologies.laravel,
                        this.technologies.livewire,
                        this.technologies.typescript,
                        this.technologies.react,
                        this.technologies.nextjs,
                        this.technologies.vue,
                        this.technologies.postgreSQL,
                        this.technologies.sqlServer,
                        this.technologies.dart,
                        this.technologies.flutter,
                        this.technologies.medusaJS,
                        this.technologies.aws,
                    ],
                },
            ].reverse()
        )
    }
}
