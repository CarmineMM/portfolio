import ProjectContract from '@/contracts/datasources/ProjectContract'
import type { ProjectRecord } from '@/contracts/datasources/ProjectContract'
import technologies from '@/datasources/TechnologiesDatasource'

export default class ProjectDatasourceJson extends ProjectContract {
    async findAll(): Promise<ProjectRecord[]> {
        return Promise.resolve([
            {
                id: '1',
                name: {
                    es: 'Rigels.io',
                    en: 'Rigels.io',
                },
                description: {
                    es: '<b>Rigels.io</b> es un servicio de hosting web de precio fijo sin sorpresas, construido sobre infraestructura <b>Hetzner</b> con almacenamiento <b>NVMe</b>, SSL automático, correo corporativo, backups diarios y soporte PHP 5.6–8.5. Toda la plataforma — panel de clientes, administración y facturación — fue desarrollada de cero con <b>Laravel</b>, <b>Livewire</b> y <b>FilamentPHP</b>, con pagos integrados vía <b>Stripe</b>. Diseñado para creadores y pequeñas empresas que necesitan hosting confiable con atención directa.',
                    en: '<b>Rigels.io</b> is a fixed-price web hosting service with no hidden fees, built on <b>Hetzner</b> infrastructure with <b>NVMe</b> storage, automatic SSL, corporate email, daily backups and PHP 5.6–8.5 support. The entire platform — client dashboard, administration and billing — was built from scratch using <b>Laravel</b>, <b>Livewire</b> and <b>FilamentPHP</b>, with <b>Stripe</b> payments integrated. Designed for creators and small businesses that need reliable hosting with direct, personal support.',
                },
                url: 'https://rigels.io',
                images: [
                    '/assets/projects/rigels/rigels-1.png',
                    '/assets/projects/rigels/rigels-2.png',
                ],
                technologies: [
                    technologies.php,
                    technologies.laravel,
                    technologies.livewire,
                    technologies.filamentphp,
                    technologies.typescript,
                    technologies.alpinejs,
                    technologies.tailwindcss,
                    technologies.rigels,
                    technologies.postgreSQL,
                ],
            },
            {
                id: '2',
                name: {
                    es: 'Tiendas Daka E-Commerce',
                    en: 'Tiendas Daka E-Commerce',
                },
                description: {
                    es: 'E-commerce de <b>Tiendas Daka</b>, una de las cadenas de retail más grandes de Venezuela con más de <b>2 millones de clientes</b>. El sistema fue construido sobre <b>MedusaJS</b> con módulos personalizados para las necesidades específicas del negocio, microservicios en <b>NestJS</b> y sincronizadores estilo <b>ETL</b> para mantener catálogo, precios e inventario sincronizados en tiempo real desde los sistemas legacy. El frontend fue desarrollado con <b>React</b> y <b>Next.js</b> con SSR y optimización SEO.',
                    en: 'E-commerce platform for <b>Tiendas Daka</b>, one of Venezuela\'s largest retail chains with over <b>2 million customers</b>. The system was built on top of <b>MedusaJS</b> with custom modules for specific business needs, microservices in <b>NestJS</b>, and <b>ETL-style synchronizers</b> to keep catalog, pricing and inventory in sync from legacy systems in real time. The frontend was built with <b>React</b> and <b>Next.js</b> with SSR and SEO optimization.',
                },
                url: 'https://tiendasdaka.com',
                images: [
                    '/assets/projects/daka/daka-1.png',
                    '/assets/projects/daka/daka-2.png',
                    '/assets/projects/daka/daka-3.png',
                ],
                technologies: [
                    technologies.typescript,
                    technologies.react,
                    technologies.nextjs,
                    technologies.nestjs,
                    technologies.medusaJS,
                    technologies.postgreSQL,
                ],
            },
            {
                id: '3',
                name: {
                    es: 'Posmit — ERP & Punto de Venta Offline-First',
                    en: 'Posmit — Offline-First ERP & Point of Sale',
                },
                description: {
                    es: '<b>Posmit</b> es un sistema <b>ERP con punto de venta</b> diseñado para PYMES, con una característica diferenciadora clave: funciona <b>sin internet</b>. La app sincroniza datos con el servidor cuando hay conexión disponible, pero continúa operando completamente con datos locales si la red falla — ideal para comercios en zonas con conectividad inestable. El sistema evolucionó de un simple POS a un ERP completo con integración a <b>Odoo</b>. Desarrollado como aplicación móvil en <b>React Native</b> y plataforma web en <b>React</b>, con backend en <b>Node.js</b>.',
                    en: '<b>Posmit</b> is an <b>ERP with point of sale</b> designed for SMEs, with one key differentiator: it works <b>offline</b>. The app syncs data with the server when a connection is available, but continues operating entirely on local data if the network fails — ideal for businesses in areas with unstable connectivity. The system evolved from a simple POS into a full ERP with <b>Odoo</b> integration. Built as a mobile app in <b>React Native</b> and a web platform in <b>React</b>, with a <b>Node.js</b> backend.',
                },
                url: 'https://posmit.app/',
                images: [
                    '/assets/projects/posmit/1.png',
                    '/assets/projects/posmit/2.png',
                ],
                technologies: [
                    technologies.javascript,
                    technologies.typescript,
                    technologies.react,
                    technologies.reactNative,
                    technologies.nodejs,
                    technologies.express,
                    technologies.sqlite,
                    technologies.odoo,
                ],
            },
            {
                id: '4',
                name: {
                    es: 'Actualiza y Gana — Tiendas Daka',
                    en: 'Actualiza y Gana — Tiendas Daka',
                },
                description: {
                    es: 'Campaña interactiva de <b>Tiendas Daka</b> para actualización de datos de clientes con premio de <b>5.000 USD</b>. El formulario alcanzó más de <b>300.000 registros</b> con picos de tráfico de <b>2.000 envíos por minuto</b> durante las horas de mayor publicidad. Desarrollado con <b>Laravel</b> y <b>Livewire</b> para manejar la carga en tiempo real sin degradación del servicio, con panel de administración en <b>FilamentPHP</b> para gestión de participantes y validaciones, y <b>Alpine.js</b> para la experiencia interactiva del formulario.',
                    en: 'Interactive campaign by <b>Tiendas Daka</b> for customer data updates with a <b>$5,000 USD</b> prize. The form reached over <b>300,000 registrations</b> with traffic peaks of <b>2,000 submissions per minute</b> during peak advertising hours. Built with <b>Laravel</b> and <b>Livewire</b> to handle real-time load without service degradation, with a <b>FilamentPHP</b> admin panel for participant management and validations, and <b>Alpine.js</b> for the interactive form experience.',
                },
                url: 'https://tiendasdaka.com',
                images: [
                    '/assets/projects/actualiza-gana-1.png',
                    '/assets/projects/actualiza-gana-2.png',
                ],
                technologies: [
                    technologies.laravel,
                    technologies.livewire,
                    technologies.filamentphp,
                    technologies.alpinejs,
                    technologies.javascript,
                    technologies.postgreSQL,
                ],
            },
        ])
    }
}
