import { ArrowRight, ExternalLink } from "lucide-react";
import { Github as GithubIcon } from "lucide-react";

const projects = [
    {
    id: 1,
    title: "Clubcentral",
    description: "A e-commerce platform for football kits featuring dynamic product sorting, coupon-based checkout, Razorpay payments, and wallet refunds.",
    image: "/projects/project1.png",
    tags: ["Node.js","Express","MongoDB","BootStrap","CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/MidhunMathew169/clubcentral",
  },
  {
    id: 1,
    title: "Netflix",
    description: "Created a Netflix clone in React with secure authentication and movie details integrated via TMDB API.",
    image: "/projects/project2.png",
    tags: ["React", "CSS", "Firebase"],
    demoUrl: "https://netflix-clone-plum-iota.vercel.app/login",
    githubUrl: "https://github.com/MidhunMathew169/Netflix-clone",
  },
  {
    id: 1,
    title: "Olx",
    description: "Built an OLX-style marketplace with React and Tailwind CSS, enabling authenticated users to list products with images and descriptions.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "Firebase"],
    demoUrl: "https://olx-clone-eta-kohl.vercel.app/",
    githubUrl: "https://github.com/MidhunMathew169/Olx---clone",
  },
  {
    id: 1,
    title: "User Management",
    description: "Created a React + TypeScript User Management app with Cloudinary-based profile uploads, Redux state management, and an admin dashboard for user control.",
    image: "/projects/project4.png",
    tags: ["React","TypeScript", "MongoDB","TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/MidhunMathew169/react-user-management",
  },
]
const ProjectsSection = () => {
    return(
        <section id="project" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>
            </div>
        
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project,key) => (
                    <div
                    key={key}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover max-w-sm">
                        <div className="h-48 overflow-hidden">
                            <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>   
                        </div>
                        <div className="p-1">
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        {/* tech used */}
                        <div className="p-1">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border-2 border-gray-700 rounded-full bg-gray text-gray-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        </div>
                        {/* link to project */}
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a 
                                href={project.demoUrl}
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20}/>
                                </a>
                                <a 
                                href={project.githubUrl}
                                target="_blank"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <GithubIcon size={20}/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank"
                href="https://github.com/MidhunMathew169">
                    Check My Github<ArrowRight size={16}/>
                </a>
            </div>
            </div>
        </section>
    )
}

export default ProjectsSection;