
import ProjectCard from '../hooks/ProjectCard'
import RevealOnScroll from './RevealOnScroll'

const ProjectsGrid = () => {
    const projectsData = [
        {
            id: 1,
            title: "Waizu Main Fest",
            tech: "Rust · React · Hack · Tailwind · Tauri",
            description: "Desktop application for viewing game information, checking manifest status, and managing game-related data automatically. Displays cover image, App ID, developer details, release date, system requirements, and verifies manifest availability for selected games.",
            github: "https://github.com/0xcRachel/WaizuMainFest-OpenSrc",
            gradientLight: true
        },
        {
            id: 2,
            title: "Foodie Gourmet",
            tech: "Laravel · Livewire · PostgreSQL · Redis",
            description: "Core development member for a food ordering & restaurant management system. Implemented JWT auth, order workflow, and caching strategies serving 50+ concurrent users.",
            github: "https://github.com/0xcRachel/foodie-graduation",
            gradientLight: false
        },
        {
            id: 3,
            title: "Rust CLI Tasker",
            tech: "Rust · Clap · Serde · SQLite",
            description: "High-performance CLI task manager with async I/O, custom error handling, and report generation. 2x faster than Python alternative.",
            github: "https://github.com/0xcRachel/rust-cli-tasker",
            gradientLight: true
        },
        {
            id: 4,
            title: "Next.js Analytics Dashboard",
            tech: "Next.js 14 · React · Tailwind · Chart.js",
            description: "Interactive dashboard with server-side rendering, real-time websocket updates, and responsive design. Built for developer metrics visualization.",
            github: "https://github.com/0xcRachel/next-analytics",
            gradientLight: false
        },
        {
            id: 5,
            title: "Zig + Python FFI Bridge",
            tech: "Zig · Python · C-API · Pydantic",
            description: "High-performance numerical library bridge between Zig and Python. Achieved 40% latency reduction for data processing pipelines.",
            github: "https://github.com/0xcRachel/zig-py-bridge",
            gradientLight: true
        },
        {
            id: 6,
            title: "NestJS Real-time Chat",
            tech: "NestJS · WebSockets · MongoDB · Redis",
            description: "Scalable chat microservice with room management, message persistence, and rate-limiting. Used in Discord dev community showcase.",
            github: "https://github.com/0xcRachel/nestjs-chat",
            gradientLight: false
        }
    ];
    return (
        <>
            <section id="projects" className="py-20 md:py-28 bg-ivory">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <RevealOnScroll>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                            <div>
                                <span className="text-terracotta text-sm font-mono">/ recent builds</span>
                                <h2 className="font-serif text-4xl md:text-5xl font-medium text-near-black mt-2">GitHub constellations</h2>
                            </div>
                            <a href="https://github.com/0xcRachel" target="_blank" className="text-olive-gray hover:text-terracotta flex items-center gap-1 text-base transition-colors">
                                view all on github <span>↗</span>
                            </a>
                        </div>
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projectsData.map((project, index) => (
                            <RevealOnScroll key={project.id} delay={(index % 3) * 150 + 100}>
                                <ProjectCard project={project} />
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectsGrid
