// /data/projects.ts

export type ProjectGroup =
    | 'all'
    | 'frontend'
    | 'backend'
    | 'fullstack'
    | 'tooling'
    | 'dashboard'
    | 'realtime'
    | 'ecommerce'
    | 'payments'
    | 'cms'
    | 'content'
    | 'catalog'
    | 'search'
    | 'api'
    | 'media'
    | 'script'
    | 'crawler'
    | 'analytics'
    | 'platform'
    | 'showcase'

export type Project = {
    slug: string
    title: string
    excerpt: string
    image: string
    tags: string[]
    groups: ProjectGroup[]
    date?: string
    description?: string
    taskTitle?: string
    task?: string
    role?: string[]
    stack?: string[]
    client?: string
    liveUrl?: string
    gallery?: string[]
}

const makeGallery = (cover: string): string[] => [cover]

export const projects: Project[] = [
    {
        slug: 'events-app',
        title: 'Events App',
        excerpt:
            'Event planning app with an interactive calendar, real-time notifications, and an admin panel to create, edit, and manage events.',
        image: '/assets/images/portfolio/EventApp-thumb.png',
        tags: ['Product', 'Dashboard', 'Calendar', 'Realtime'],
        groups: ['fullstack', 'backend', 'frontend', 'dashboard', 'realtime'],
        taskTitle: 'Task',
        task: 'Build a full event management workflow with real-time updates and an admin interface.',
        role: ['Full-stack development', 'API design', 'UI integration'],
        stack: ['Laravel', 'React', 'Pusher'],
        gallery: makeGallery('/assets/images/portfolio/EventApp.png'),
    },
    {
        slug: 'machinools-app',
        title: 'Machinools App',
        excerpt:
            "An SEO toolbox for beginners: a simple dashboard and clear analyses to understand and improve a site's visibility on search engines.",
        image: '/assets/images/portfolio/Machinools-thumb.png',
        tags: ['Tooling', 'Dashboard', 'Analytics'],
        groups: ['fullstack', 'backend', 'frontend', 'tooling', 'dashboard', 'analytics'],
        taskTitle: 'Task',
        task: 'Deliver an approachable dashboard with clear metrics and actionable insights.',
        role: ['Full-stack development', 'Data visualization'],
        stack: ['PHP', 'React'],
        gallery: makeGallery('/assets/images/portfolio/Machinools.png'),
    },
    {
        slug: 'cmsrails-app',
        title: 'CMSRails App',
        excerpt:
            'A Ruby on Rails CMS designed to create and manage articles with relational categories for structured content organization.',
        image: '/assets/images/portfolio/CMSApp-thumb.png',
        tags: ['CMS', 'Content', 'Backoffice'],
        groups: ['fullstack', 'backend', 'frontend', 'cms', 'content'],
        taskTitle: 'Task',
        task: 'Create a CMS with structured categories and an editor-friendly backoffice.',
        role: ['Backend development', 'Frontend integration'],
        stack: ['Ruby on Rails', 'Svelte'],
        gallery: makeGallery('/assets/images/portfolio/CMSApp.png'),
    },
    {
        slug: 'pics-anime-random-app',
        title: 'Pics Anime Random App',
        excerpt:
            'An interactive Vue app to explore anime/manga images and GIF albums by category with a responsive and attractive UI.',
        image: '/assets/images/portfolio/PicsRandomApp-thumb.png',
        tags: ['Media', 'Gallery'],
        groups: ['frontend', 'media'],
        taskTitle: 'Task',
        task: 'Build a responsive browsing experience for images/GIFs with categories and smooth navigation.',
        role: ['Frontend development'],
        stack: ['Vue.js', 'TypeScript'],
        gallery: makeGallery('/assets/images/portfolio/PicsRandomApp.png'),
    },
    {
        slug: 'poe-and-tik',
        title: 'Poe & Tik',
        excerpt:
            'E-commerce website selling vegan clothing, built with a Laravel backend and a vanilla JavaScript frontend, with Stripe payments.',
        image: '/assets/images/portfolio/PoeAndTikApp-thumb.png',
        tags: ['E-commerce', 'Payments', 'Checkout'],
        groups: ['fullstack', 'backend', 'frontend', 'ecommerce', 'payments'],
        taskTitle: 'Task',
        task: 'Deliver an e-commerce experience with a secure checkout and Stripe payments.',
        role: ['Full-stack development', 'Payment integration'],
        stack: ['Laravel', 'JavaScript', 'Stripe'],
        gallery: makeGallery('/assets/images/portfolio/PoeAndTikApp.png'),
    },
    {
        slug: 'mydramalist-like',
        title: 'MyDramaList Like',
        excerpt:
            'A platform to discover, search, and organize Korean, Japanese, and Chinese dramas with a focus on an intuitive browsing experience.',
        image: '/assets/images/portfolio/MyDramaListLike-thumb.png',
        tags: ['Catalog', 'Search'],
        groups: ['fullstack', 'backend', 'frontend', 'catalog', 'search'],
        taskTitle: 'Task',
        task: 'Create a searchable catalog with detail pages and user-friendly browsing.',
        role: ['Full-stack development', 'Search & filtering'],
        stack: ['Laravel', 'JavaScript'],
        gallery: makeGallery('/assets/images/portfolio/MyDramaListLike.png'),
    },
    {
        slug: 'quiz-app',
        title: 'Quiz App',
        excerpt:
            'A quiz management platform across multiple topics (manga, soccer, politics, etc.) with creation and customization features.',
        image: '/assets/images/portfolio/QuizApp-thumb.png',
        tags: ['Admin', 'Content', 'Gamification'],
        groups: ['fullstack', 'backend', 'frontend', 'platform', 'content'],
        taskTitle: 'Task',
        task: 'Build a quiz builder + player experience with topic management and customization.',
        role: ['Full-stack development', 'Admin features'],
        stack: ['AdonisJS', 'Node.js', 'Vue 3'],
        gallery: makeGallery('/assets/images/portfolio/QuizApp.png'),
    },
    {
        slug: 'pokemon-search-app',
        title: 'Pokémon Search App',
        excerpt:
            'An interactive Pokédex experience using PokéAPI: search Pokémon and view details like types, stats, and evolutions.',
        image: '/assets/images/portfolio/PokemonApp-thumb.png',
        tags: ['API', 'Search'],
        groups: ['frontend', 'api', 'search'],
        taskTitle: 'Task',
        task: 'Consume PokéAPI to provide a fast search and detailed Pokémon pages.',
        role: ['Frontend development', 'API integration'],
        stack: ['Next.js', 'React', 'TypeScript'],
        gallery: makeGallery('/assets/images/portfolio/PokemonApp.png'),
    },
    {
        slug: 'crawler-monitor-app',
        title: 'Crawler Monitor App',
        excerpt:
            'An advanced crawler for in-depth audits (structure, tags, links, performance) with insights to optimize visibility.',
        image: '/assets/images/portfolio/CrawlerApp-thumb.png',
        tags: ['Crawler', 'Audits', 'Analytics'],
        groups: ['fullstack', 'backend', 'frontend', 'tooling', 'crawler', 'dashboard', 'analytics'],
        taskTitle: 'Task',
        task: 'Build a crawler + reporting dashboard for technical audits and performance insights.',
        role: ['Architecture', 'Backend development', 'Frontend dashboard'],
        stack: ['Symfony', 'PHP', 'React', 'Python'],
        gallery: makeGallery('/assets/images/portfolio/CrawlerApp.png'),
    },
    {
        slug: 'pencil-pix',
        title: 'Pencil Pix',
        excerpt:
            'A Python script that converts an image into a pencil sketch using efficient and accessible image processing techniques.',
        image: '/assets/images/portfolio/pencil_pix-thumb.png',
        tags: ['Image processing', 'Script', 'CLI'],
        groups: ['backend', 'tooling', 'script'],
        taskTitle: 'Task',
        task: 'Transform images into pencil-sketch style outputs using a simple and reusable script.',
        role: ['Script development'],
        stack: ['Python'],
        gallery: makeGallery('/assets/images/portfolio/PencilPix.png'),
    },
    {
        slug: 'streaming-anime',
        title: 'Streaming Anime',
        excerpt:
            'A web app to discover, filter, and explore a large anime catalog with detailed pages and smooth episode navigation.',
        image: '/assets/images/portfolio/StreamingAnime-thumb.png',
        tags: ['Catalog', 'Filtering', 'Media'],
        groups: ['fullstack', 'backend', 'frontend', 'catalog', 'media', 'search'],
        taskTitle: 'Task',
        task: 'Build a catalog with filtering and a smooth browsing experience across titles and episodes.',
        role: ['Full-stack development', 'Database modeling'],
        stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
        gallery: makeGallery('/assets/images/portfolio/StreamingAnime.png'),
    },
    {
        slug: 'portfolio',
        title: 'Portfolio',
        excerpt:
            'A personal portfolio showcasing completed projects, skills, and progress as a developer through concrete examples.',
        image: '/assets/images/portfolio/PortfolioApp-thumb.png',
        tags: ['Personal', 'Showcase'],
        groups: ['frontend', 'showcase'],
        taskTitle: 'Task',
        task: 'Showcase projects, skills, and experience with a clean and responsive portfolio layout.',
        role: ['Frontend development'],
        stack: ['Nuxt', 'Vue', 'TypeScript'],
        gallery: makeGallery('/assets/images/portfolio/PortfolioApp.png'),
    },
]

/**
 * Optional: if you want your filter menu to expose more categories.
 * Keep the UI small (6 items max), but still powered by the richer groups above.
 */
export const portfolioFilterDefs = [
    { value: 'all', label: 'All' },
    { value: 'fullstack', label: 'Full-stack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'tooling', label: 'Tools' },
    { value: 'ecommerce', label: 'E-commerce' },
] as const
