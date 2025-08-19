import Display from "../../assets/image/IMG_7295.webp";
import { ButtonBooking } from "../elements/ui/btn-booking";

export const HeroSection = () => {
  return (
    <>
      <div className="relative font-sans text-gray-900">
        <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
          <img
            src={Display}
            alt="Torque & Tune"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Torque & Tune Motor Workshop
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Servis motor cepat, terpercaya, dan berkualitas untuk performa
              maksimal.
            </p>
          </div>
          <ButtonBooking />
        </section>
      </div>
    </>
  );
};
