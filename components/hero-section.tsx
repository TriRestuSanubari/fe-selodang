"use client";

import { Button } from "@heroui/button";
import { FaFireAlt, FaShoppingCart } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { GiChiliPepper } from "react-icons/gi";
import heroKripik from "@/public/images/hero-keripik.jpg";
import Image from "next/image";
import Link from "next/link";
import useProfile from "@/hooks/useProfile";
import ModalConfirmBeseller from "./modal-confirm-beseller";
import { useDisclosure } from "@heroui/react";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";

const HeroSection = () => {
  const { dataUser } = useProfile();
  const { isOpen, onOpenChange } = useDisclosure();
  const isVerifiedSeller = dataUser?.Seller[0]?.verified;

  return (<section className="relative bg-gradient py-16 overflow-hidden">
    
      <ModalConfirmBeseller isOpen={isOpen} onOpenChange={onOpenChange} />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <TextEffect
              className="text-4xl lg:text-5xl font-bold text-foreground leading-tight"
              per="char"
              delay={0.5}
              preset="fade"
            >
              Keripik Cabe Selodang
            </TextEffect>

            <TextEffect
              className="text-4xl lg:text-5xl font-bold block bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent py-2 -mt-8"
              per="char"
              preset="fade"
              delay={0.5}
            >
              Langsung dari UMKM Lokal
            </TextEffect>

            {/* Description */}
            <TextEffect
              per="char"
              delay={1}
              segmentTransition={{
                duration: 0.3,
                type: "spring",
                bounce: 0.3,
              }}
              className="text-lg text-foreground-500 max-w-md"
            >
              Dapatkan keripik cabe renyah dan pedas khas Nusantara. Dibuat dari
              bahan pilihan, dikemas higienis, dan siap dinikmati kapan saja.
            </TextEffect>

            {/* Buttons */}
            <AnimatedGroup
              className="flex flex-col lg:flex-row gap-4"
              preset="slide"
              variants={{
                container: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05 },
                  },
                },
                item: {
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.2, type: "spring", bounce: 0.3 },
                  },
                },
              }}
            >
              <Button
                variant="shadow"
                size="lg"
                color="danger"
                className="text-white w-full bg-gradient-to-r from-red-500 to-orange-500 shadow-lg hover:opacity-90"
                as={Link}
                href="#products"
              >
                <FaShoppingCart className="w-5 h-5 mr-2" />
                Mulai Belanja
              </Button>

              {!isVerifiedSeller && dataUser?.role !== "superadmin" ? (
                <Button
                  variant="bordered"
                  size="lg"
                  className="w-full border-red-400 text-red-500 hover:bg-red-50"
                  onPress={() => {
                    onOpenChange();
                  }}
                >
                  Jadi Reseller
                </Button>
              ) : null}
            </AnimatedGroup>

            {/* Features */}
            <AnimatedGroup
              className="grid grid-cols-1 sm:grid-cols-4 gap-6 pt-8 items-start"
              preset="slide"
            >
              <div className="flex items-center space-x-3 min-h-[60px]">
                <div className="bg-red-500/10 p-2 rounded-lg">
                  <FiTruck className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-medium text-sm text-foreground">
                    Gratis Ongkir
                  </p>
                  <p className="text-xs text-muted-foreground">Min. Rp 50rb</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 min-h-[60px]">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <FaFireAlt className="w-5 h-5 text-orange-500" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-medium text-sm text-foreground">
                    Pedas Nikmat
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Rasa khas
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 min-h-[60px]">
                <div className="bg-yellow-500/10 p-2 rounded-lg">
                  <GiChiliPepper className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-medium text-sm text-foreground">
                    Dijamin Renyah
                  </p>
                  <p className="text-xs text-muted-foreground">100% Fresh</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 min-h-[60px]">
                <div className="bg-red-300/10 p-2 rounded-lg">
                  <FaShoppingCart className="w-5 h-5 text-red-400" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-medium text-sm text-foreground">
                    Produk Lokal
                  </p>
                  <p className="text-xs text-muted-foreground">Buatan UMKM</p>
                </div>
              </div>
            </AnimatedGroup>
          </div>

          {/* Right Image */}
          <div className="relative">
            <AnimatedGroup
              className="relative z-10"
              preset="slide"
              variants={{
                item: {
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1.2,
                      type: "spring",
                      bounce: 0.3,
                    },
                  },
                },
              }}
            >
              <div className="bg-gradient-to-br from-red-200/30 to-orange-100/20 rounded-3xl p-4">
                <Image
                  src={heroKripik}
                  alt="Keripik Cabe Selodang"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </AnimatedGroup>

            {/* Background Decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-red-400/30 to-orange-300/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
