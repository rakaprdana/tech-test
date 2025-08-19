import Display from "../../assets/image/gettyimages-1388398423-612x612.jpg";

export const AdvantageSection = () => {
  return (
    <section className="relative w-full h-[600px]  text-whiteCustom flex items-center justify-center">
      <img
        src={Display}
        alt="Torque & Tune Workshop"
        className="absolute w-[55%] right-0 object-cover"
      />
      <div className="relative w-[50%] mr-[28rem] mt-72">
        <h1 className="text-3xl md:text-4xl font-bold text-botton mb-6 ">
          Advantage
        </h1>
        <p className="bg-foreBackground bg-opacity-90 text-lg md:text-xl leading-relaxed p-6 shadow-lg">
          Servis motor di bengkel{" "}
          <span className="font-semibold">Torque & Tune</span>
          menawarkan berbagai keuntungan yang membuat pengalaman perawatan
          kendaraan jadi lebih optimal dan terpercaya. Dengan teknisi
          berpengalaman dan peralatan modern, bengkel ini mampu menangani
          berbagai jenis motor dengan presisi tinggi, mulai dari servis ringan
          hingga perbaikan kompleks. Selain itu, Torque & Tune dikenal dengan
          transparansi harga dan diagnosa yang jujur, sehingga pelanggan tidak
          perlu khawatir akan biaya tersembunyi atau perbaikan yang tidak perlu.
          Waktu pengerjaan yang efisien dan ruang tunggu yang nyaman juga
          menjadi nilai tambah, menjadikan bengkel ini pilihan ideal bagi
          pemilik motor yang mengutamakan kualitas, kecepatan, dan kenyamanan
          dalam satu paket layanan.
        </p>
      </div>
    </section>
  );
};
