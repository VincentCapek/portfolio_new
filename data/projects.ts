export type Project = {
    slug: string
    title: string
    excerpt: string
    image: string
    tags: string[]
    groups: string[] // Filters: use only "backend" and/or "frontend"
    links?: { label: string; url: string }[]
}

export const projects: Project[] = [
    {
        slug: 'events-app',
        title: 'Events app',
        excerpt:
            'Event planning app with an interactive calendar, real-time notifications, and an admin panel to create, edit, and manage events.',
        image: '/img/projects/EventApp.png',
        tags: ['Laravel', 'React', 'Pusher', 'JavaScript', 'HTML5', 'CSS3'],
        groups: ['backend', 'frontend'],
    },
    {
        slug: 'machinools-app',
        title: 'Machinools App',
        excerpt:
            "An SEO toolbox for beginners: a simple dashboard and clear analyses to understand and improve a site's visibility on search engines.",
        image: '/img/projects/Machinools.png',
        tags: ['PHP', 'React', 'JavaScript', 'HTML5', 'CSS3'],
        groups: ['backend', 'frontend'],
    },
    {
        slug: 'cmsrails-app',
        title: 'CMSRails App',
        excerpt:
            'A Ruby on Rails CMS designed to create and manage articles with relational categories for structured content organization.',
        image: '/img/projects/CMSApp.png',
        tags: ['Ruby', 'Rails', 'Svelte', 'JavaScript', 'HTML5', 'CSS3'],
        groups: ['backend', 'frontend'],
    },
    {
        slug: 'pics-anime-random-app',
        title: 'Pics Anime Random App',
        excerpt:
            'An interactive Vue app to explore anime/manga images and GIF albums by category with a responsive and attractive UI.',
        image: '/img/projects/PicsRandomApp.png',
        tags: ['Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
        groups: ['frontend'],
    },
    {
        slug: 'poe-and-tik',
        title: 'Poe And Tik',
        excerpt:
            'E-commerce website selling vegan clothing, built with a Laravel backend and a vanilla JavaScript frontend, with Stripe payments.',
        image: '/img/projects/PoeAndTikApp.png',
        tags: ['Laravel', 'JavaScript', 'Stripe', 'HTML5', 'CSS3'],
        groups: ['backend', 'frontend'],
    },
    {
        slug: 'mydramalist-like',
        title: 'MyDramaList Like',
        excerpt:
            'A platform to discover, search, and organize Korean, Japanese, and Chinese dramas with a focus on an intuitive browsing experience.',
        image: '/img/projects/MyDramaListLike.png',
        tags: ['Laravel', 'JavaScript', 'HTML5', 'CSS3'],
        groups: ['backend', 'frontend'],
    },
    {
        slug: 'quiz-app',
        title: 'Quiz App',
        excerpt:
            'A quiz management platform across multiple topics (manga, soccer, politics, etc.) with creation and customization features.',
        image: '/img/projects/QuizApp.png',
        tags: ['AdonisJS', 'Node.js', 'Vue 3', 'JavaScript', 'HTML5', 'CSS3'],
        groups: ['backend', 'frontend'],
    },
    {
        slug: 'pokemon-search-app',
        title: 'Pokemon Search App',
        excerpt:
            'An interactive Pokédex experience using PokéAPI: search Pokémon and view details like types, stats, and evolutions.',
        image: '/img/projects/PokemonApp.png',
        tags: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
        groups: ['frontend'],
    },
    {
        slug: 'crawler-monitor-app',
        title: 'Crawler Monitor App',
        excerpt:
            'An advanced SEO crawler for in-depth audits (structure, tags, links, performance) with insights to optimize visibility and SEO.',
        image: '/img/projects/CrawlerApp.png',
        tags: ['Symfony', 'PHP', 'React', 'Python', 'JavaScript', 'HTML5', 'CSS3'],
        groups: ['backend', 'frontend'],
    },
    {
        slug: 'pencil-pix',
        title: 'Pencil Pix',
        excerpt:
            'A Python script that converts an image into a pencil sketch using efficient and accessible image processing techniques.',
        image: '/img/projects/pencil_pix.png',
        tags: ['Python'],
        groups: ['backend'],
    },
    {
        slug: 'streaming-anime',
        title: 'Streaming Anime',
        excerpt:
            'A web app to discover, filter, and explore a large anime catalog with detailed pages and smooth episode navigation.',
        image: '/img/projects/StreamingAnime.png',
        tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
        groups: ['backend', 'frontend'],
    },
    {
        slug: 'portfolio',
        title: 'Portfolio',
        excerpt:
            'A personal portfolio showcasing completed projects, skills, and progress as a developer through concrete examples.',
        image: '/img/projects/PortfolioApp.png',
        tags: ['Next.js', 'React', 'HTML5', 'CSS3'],
        groups: ['frontend'],
    },
]
