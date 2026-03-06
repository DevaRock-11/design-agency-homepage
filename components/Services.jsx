import { FaPalette, FaCode, FaBullhorn, FaMobileAlt } from "react-icons/fa";

export default function Services() {

  const services = [
    {
      icon: <FaPalette size={40} />,
      title: "UI/UX Design",
      description:
        "We design beautiful and user-friendly interfaces that improve user experience and engagement.",
    },
    {
      icon: <FaCode size={40} />,
      title: "Web Development",
      description:
        "We build fast, scalable, and modern web applications using the latest technologies.",
    },
    {
      icon: <FaBullhorn size={40} />,
      title: "Digital Marketing",
      description:
        "Grow your brand with powerful SEO, marketing strategies, and online presence.",
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "App Development",
      description:
        "We create high-performance mobile apps for Android and iOS platforms.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6">

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-4 text-gray-600">
          We offer a wide range of digital solutions to help businesses grow
          and succeed in the modern world.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <div className="text-indigo-600 flex justify-center mb-4">
              {service.icon}
            </div>

            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {service.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}