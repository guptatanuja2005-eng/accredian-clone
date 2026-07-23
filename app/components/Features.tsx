export default function Features() {
  const features = [
    {
      title: "Scalable Solutions",
      desc: "Grow your business with flexible and scalable architecture.",
    },
    {
      title: "Secure Platform",
      desc: "Enterprise-grade security to protect your data.",
    },
    {
      title: "Fast Performance",
      desc: "Optimized systems for lightning fast speed.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">
        Our Features
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-6 shadow-lg rounded-xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}