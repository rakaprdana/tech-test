import Display from "../../assets/image/montir2.jpg";

export const AboutSection = () => {
  const stats = [
    { value: "15+", label: "Tahun Pengalaman" },
    { value: "1000+", label: "Pelanggan Puas" },
    { value: "50+", label: "Proyek Modifikasi" },
    { value: "24/7", label: "Layanan Darurat" },
  ];
  return (
    <section className="bg-whiteCustom pr-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <img src={Display} alt="Bengkel Torque & Tune" className="w-full" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-textBold">
            Tentang <span className="text-botton">Torque & Tune</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Kami adalah bengkel motor yang berdedikasi memberikan pelayanan
            terbaik untuk perawatan, perbaikan, dan modifikasi kendaraan Anda.
            Dengan tim mekanik berpengalaman, kami selalu memastikan setiap
            motor dan mobil dalam kondisi prima serta siap menemani perjalanan
            Anda.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md transition text-center"
              >
                <h3 className="text-lg font-semibold text-textBold">
                  {item.value}
                </h3>
                <p className="text-sm text-textParagraf">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
