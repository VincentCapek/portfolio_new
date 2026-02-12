export type Project = {
    slug: string
    title: string
    excerpt: string
    image: string
    tags: string[]
    groups: string[]
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
        image: '/assets/images/portfolio/EventApp.png',
        tags: ['Product', 'Dashboard', 'Calendar', 'Realtime'],
        groups: ['backend', 'frontend'],
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
        image: '/assets/images/portfolio/Machinools.png',
        tags: ['SEO', 'Dashboard', 'Analytics', 'Tooling'],
        groups: ['backend', 'frontend'],
        taskTitle: 'Task',
        task: 'Deliver an approachable SEO dashboard with clear metrics and actionable insights.',
        role: ['Full-stack development', 'Data visualization', 'UX implementation'],
        stack: ['PHP', 'React'],
        gallery: makeGallery('/assets/images/portfolio/Machinools.png'),
    },
    {
        slug: 'cmsrails-app',
        title: 'CMSRails App',
        excerpt:
            'A Ruby on Rails CMS designed to create and manage articles with relational categories for structured content organization.',
        image: '/assets/images/portfolio/CMSApp.png',
        tags: ['CMS', 'Content', 'Backoffice'],
        groups: ['backend', 'frontend'],
        taskTitle: 'Task',
        task: 'Create a CMS with structured categories and an editor-friendly backoffice.',
        role: ['Backend development', 'Admin UX', 'Frontend integration'],
        stack: ['Ruby on Rails', 'Svelte'],
        gallery: makeGallery('/assets/images/portfolio/CMSApp.png'),
    },
    {
        slug: 'pics-anime-random-app',
        title: 'Pics Anime Random App',
        excerpt:
            'An interactive Vue app to explore anime/manga images and GIF albums by category with a responsive and attractive UI.',
        image: '/assets/images/portfolio/PicsRandomApp.png',
        tags: ['Media', 'Gallery', 'UI'],
        groups: ['frontend'],
        taskTitle: 'Task',
        task: 'Build a responsive browsing experience for images/GIFs with categories and smooth navigation.',
        role: ['Frontend development', 'UI implementation'],
        stack: ['Vue.js', 'TypeScript'],
        gallery: makeGallery('/assets/images/portfolio/PicsRandomApp.png'),
    },
    {
        slug: 'poe-and-tik',
        title: 'Poe & Tik',
        excerpt:
            'E-commerce website selling vegan clothing, built with a Laravel backend and a vanilla JavaScript frontend, with Stripe payments.',
        image: '/assets/images/portfolio/PoeAndTikApp.png',
        tags: ['E-commerce', 'Payments', 'Checkout'],
        groups: ['backend', 'frontend'],
        taskTitle: 'Task',
        task: 'Deliver an e-commerce experience with a secure checkout and Stripe payments.',
        role: ['Full-stack development', 'Payment integration', 'Performance optimization'],
        stack: ['Laravel', 'JavaScript', 'Stripe'],
        gallery: makeGallery('/assets/images/portfolio/PoeAndTikApp.png'),
    },
    {
        slug: 'mydramalist-like',
        title: 'MyDramaList Like',
        excerpt:
            'A platform to discover, search, and organize Korean, Japanese, and Chinese dramas with a focus on an intuitive browsing experience.',
        image: '/assets/images/portfolio/MyDramaListLike.png',
        tags: ['Search', 'Catalog', 'UX'],
        groups: ['backend', 'frontend'],
        taskTitle: 'Task',
        task: 'Create a searchable catalog with detail pages and user-friendly browsing.',
        role: ['Full-stack development', 'Search & filtering', 'UI integration'],
        stack: ['Laravel', 'JavaScript'],
        gallery: makeGallery('/assets/images/portfolio/MyDramaListLike.png'),
    },
    {
        slug: 'quiz-app',
        title: 'Quiz App',
        excerpt:
            'A quiz management platform across multiple topics (manga, soccer, politics, etc.) with creation and customization features.',
        image: '/assets/images/portfolio/QuizApp.png',
        tags: ['Admin', 'Content', 'Gamification'],
        groups: ['backend', 'frontend'],
        taskTitle: 'Task',
        task: 'Build a quiz builder + player experience with topic management and customization.',
        role: ['Full-stack development', 'Admin features', 'Frontend UX'],
        stack: ['AdonisJS', 'Node.js', 'Vue 3'],
        gallery: makeGallery('/assets/images/portfolio/QuizApp.png'),
    },
    {
        slug: 'pokemon-search-app',
        title: 'Pokémon Search App',
        excerpt:
            'An interactive Pokédex experience using PokéAPI: search Pokémon and view details like types, stats, and evolutions.',
        image: '/assets/images/portfolio/PokemonSearchApp.png',
        tags: ['API', 'Search', 'Frontend'],
        groups: ['frontend'],
        taskTitle: 'Task',
        task: 'Consume PokéAPI to provide a fast search and detailed Pokémon pages.',
        role: ['Frontend development', 'API integration'],
        stack: ['Next.js', 'React', 'TypeScript'],
        gallery: makeGallery('/assets/images/portfolio/PokemonSearchApp.png'),
    },
    {
        slug: 'crawler-monitor-app',
        title: 'Crawler Monitor App',
        excerpt:
            'An advanced SEO crawler for in-depth audits (structure, tags, links, performance) with insights to optimize visibility and SEO.',
        image: '/assets/images/portfolio/CrawlerMonitorApp.png',
        tags: ['SEO', 'Crawler', 'Audits', 'Analytics'],
        groups: ['backend', 'frontend'],
        taskTitle: 'Task',
        task: 'Build a crawler + reporting dashboard for technical SEO audits and performance insights.',
        role: ['Architecture', 'Backend development', 'Frontend dashboard'],
        stack: ['Symfony', 'PHP', 'React', 'Python'],
        gallery: makeGallery('/assets/images/portfolio/CrawlerMonitorApp.png'),
    },
    {
        slug: 'pencil-pix',
        title: 'Pencil Pix',
        excerpt:
            'A Python script that converts an image into a pencil sketch using efficient and accessible image processing techniques.',
        image: '/assets/images/portfolio/PencilPix.png',
        tags: ['Image processing', 'Script', 'CLI'],
        groups: ['backend'],
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
        image: '/assets/images/portfolio/StreamingAnime.png',
        tags: ['Catalog', 'Filtering', 'Media'],
        groups: ['backend', 'frontend'],
        taskTitle: 'Task',
        task: 'Build a catalog with filtering and a smooth browsing experience across anime titles and episodes.',
        role: ['Full-stack development', 'Database modeling', 'UI integration'],
        stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
        gallery: makeGallery('/assets/images/portfolio/StreamingAnime.png'),
    },
    {
        slug: 'portfolio',
        title: 'Portfolio',
        excerpt:
            'A personal portfolio showcasing completed projects, skills, and progress as a developer through concrete examples.',
        image: '/assets/images/portfolio/Portfolio.png',
        tags: ['Personal', 'Branding', 'Showcase'],
        groups: ['frontend'],
        taskTitle: 'Task',
        task: 'Showcase projects, skills, and experience with a clean and responsive portfolio layout.',
        role: ['Frontend development', 'UI integration'],
        stack: ['Next.js', 'React'],
        gallery: makeGallery('/assets/images/portfolio/Portfolio.png'),
    },
]
