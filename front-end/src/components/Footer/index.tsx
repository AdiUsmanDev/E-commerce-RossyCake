import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
} from "@tabler/icons-react";
import { Input } from "@/components/ui/input"; // Asumsi dari shadcn/ui
import { Button } from "@/components/ui/button"; // Asumsi dari shadcn/ui
import { Link } from "@tanstack/react-router";

// Komponen kecil untuk tautan agar tidak berulang
const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      to={href}
      className="text-gray-600 dark:text-gray-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300"
    >
      {children}
    </Link>
  </li>
);

// Komponen kecil untuk ikon sosial
const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300"
  >
    {children}
  </a>
);

export const Footer = () => {
  return (
    <footer className="relative bg-rose-50 dark:bg-neutral-900 pt-20">
      {/* Elemen Visual: Gelombang Frosting SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[60px] md:h-[100px] w-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-current text-white dark:text-neutral-950"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Kolom 1: Tentang Rossi Cake */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Rossi Cake
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Menghadirkan kelezatan dalam setiap potongan. Dibuat dengan cinta
              dan bahan-bahan pilihan terbaik.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Jelajahi
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/">Beranda</FooterLink>
              <FooterLink href="/shop">Produk Kami</FooterLink>
            </ul>
          </div>

          {/* Kolom 3: Informasi Kontak */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <IconMapPin size={18} className="mt-1 text-rose-500" />
                <span className="text-gray-600 dark:text-gray-400">
                  Jl. Mendalo Darat, Jambi Luar Kota, Kab. Muaro Jambi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconMail size={18} className="text-rose-500" />
                <a
                  href="mailto:RossiCake@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-rose-600"
                >
                  RossiCake@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone size={18} className="text-rose-500" />
                <a
                  href="https://wa.me/628123456789"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-rose-600"
                >
                  +62 812-3456-789
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Langganan Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Dapat Info & Diskon
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Jadilah yang pertama tahu tentang produk baru dan penawaran
              spesial!
            </p>
            <div className="flex items-center gap-2">
              <Input
                type="email"
                placeholder="Email Anda"
                className="bg-white dark:bg-neutral-800 border-gray-300 dark:border-neutral-700"
              />
              <Button
                size="icon"
                className="bg-rose-500 hover:bg-rose-600 flex-shrink-0"
              >
                <IconSend size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bagian Bawah Footer: Copyright & Ikon Sosial */}
        <div className="border-t border-gray-200 dark:border-neutral-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Rossi Cake. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <SocialIcon href="#">
              <IconBrandWhatsapp size={22} />
            </SocialIcon>
            <SocialIcon href="#">
              <IconBrandInstagram size={22} />
            </SocialIcon>
            <SocialIcon href="#">
              <IconBrandFacebook size={22} />
            </SocialIcon>
            <SocialIcon href="#">
              <IconBrandTiktok size={22} />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};
