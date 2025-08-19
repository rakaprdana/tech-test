import { Wrench, Settings, Droplets, Sparkles } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      title: "Perbaikan Mesin",
      desc: "Layanan perbaikan mesin untuk menjaga performa motor tetap optimal.",
      icon: <Wrench className="w-8 h-8 text-botton" />,
    },
    {
      title: "Modifikasi",
      desc: "Ubah tampilan dan performa motor sesuai gaya dan kebutuhan Anda.",
      icon: <Sparkles className="w-8 h-8 text-botton" />,
    },
    {
      title: "Ganti Oli",
      desc: "Penggantian oli berkualitas untuk memperpanjang umur mesin.",
      icon: <Droplets className="w-8 h-8 text-botton" />,
    },
    {
      title: "Service Berkala",
      desc: "Perawatan rutin agar motor selalu dalam kondisi prima.",
      icon: <Settings className="w-8 h-8 text-botton" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-textBold mb-4">
          Layanan Kami
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Kami menyediakan berbagai layanan profesional untuk menjaga dan
          meningkatkan performa motor Anda.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-whiteCustom rounded-2xl p-6 shadow hover:shadow-lg transition group"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-red-100 rounded-full group-hover:bg-red-200 transition">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-textBold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
