import Image from "next/image"

export default function Portfolio() {

  const projects = [
    {
      title: "E-Commerce Website",
      image: "/images/project1.png",
    },
    {
      title: "Mobile App UI Design",
      image: "/images/project2.png",
    },
    {
      title: "Corporate Business Website",
      image: "/images/project3.png",
    },
    {
      title: "Brand Identity Design",
      image: "/images/project4.png",
    },
    {
      title: "Startup Landing Page",
      image: "/images/project5.png",
    },
    {
      title: "Portfolio Website",
      image: "/images/project6.png",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6">

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Our Portfolio</h2>
        <p className="mt-4 text-gray-600">
          Here are some of the projects we have worked on for our clients.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-md"
          >

            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={350}
              className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold">
                {project.title}
              </h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}