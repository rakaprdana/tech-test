import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-textBold text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Alamat */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Torque & Tune
          </h3>
          <p className="flex items-start gap-2">
            <MapPin className="w-5 h-5 mt-1 text-red-500" />
            <span>Jl. Otomotif No. 123, Jakarta, Indonesia</span>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Phone className="w-5 h-5 text-red-500" />
            <span>+62 812-3456-7890</span>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Mail className="w-5 h-5 text-red-500" />
            <span>info@torqueandtune.com</span>
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Ikuti Kami</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-500 transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Tentang Kami
          </h3>
          <p className="text-sm leading-relaxed">
            Torque & Tune adalah bengkel terpercaya yang menyediakan layanan
            perbaikan, modifikasi, hingga perawatan motor dengan teknisi
            profesional dan peralatan modern.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-textParagraf">
        © {new Date().getFullYear()} Torque & Tune. All rights reserved.
      </div>
    </footer>
  );
};
