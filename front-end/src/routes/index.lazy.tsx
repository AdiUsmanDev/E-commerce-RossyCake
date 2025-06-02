import React from "react";
import { createLazyFileRoute } from "@tanstack/react-router";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GridItem from "@/components/GridItem";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { GuestLayouts } from "@/components/Layouts/GuestLayout";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <GuestLayouts>
        <div className="container mx-auto px-10 lg:px-28 pt-24 md:py-5 flex flex-col gap-10">
          <HeroSection />
          <Categories />
          <NewArrival />
          <Adds />
          <Promotion />
        </div>
      </GuestLayouts>
    </>
  );
}
const Categories = () => {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-center font-semibold text-3xl">Kategori</h1>
        <div className="list-categories ">
          <ul className="grid grid-cols-1 grid-rows-4 gap-4 md:grid-cols-11 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem]  xl:grid-rows-2   ">
            <GridItem
              // area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              area="md:[grid-area:1/1/1/7] xl:[grid-area:1/1/2/4]  xl:h-[30rem] "
              icon={
                <Box className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Produk Rossi Cake"
              description="Running out of copy so I'll write anything."
            />

            <GridItem
              area="md:[grid-area:2/1/2/7] xl:[grid-area:1/5/2/8]  xl:h-[30rem]  "
              icon={
                <Lock className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Kue"
              description="It's the best money you'll ever spend"
            />

            <GridItem
              // area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              area="md:[grid-area:1/7/3/12] xl:[grid-area:1/9/2/12]  xl:h-[30rem] "
              icon={
                <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Pencairan Bonus"
              description="I'm not even kidding. Ask my mom if you don't believe me."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

const Adds = () => {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="list-categories ">
          <ul className="grid grid-cols-1 grid-rows-4 gap-4  md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem]  xl:grid-rows-2   ">
            <GridItem
              // area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              area="md:[grid-area:1/1/1/7] xl:[grid-area:1/1/6/8]   "
              icon={
                <Box className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Produk Rossi CAke"
              description="Running out of copy so I'll write anything."
            />

            <GridItem
              area="md:[grid-area:2/1/2/7] xl:[grid-area:1/8/3/13]    "
              icon={
                <Lock className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Rossi Cake"
              description="It's the best money you'll ever spend"
            />

            <GridItem
              // area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              area="md:[grid-area:1/7/3/12] xl:[grid-area:3/8/6/13]   "
              icon={
                <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
              }
              title="Pencairan Bonus"
              description="I'm not even kidding. Ask my mom if you don't believe me."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

function CardProduct() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] md:w-[20rem] w-[15rem]  p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
        <img
          src="/img/sevel.png"
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Seven Element Coffee
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Beli </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            Rp 95.000
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}

const NewArrival = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="text-center font-semibold text-3xl">Produk Baru</h1>
      <ul className="list-product w-full border-none  ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent className="border-none ">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 border-none py-10"
              >
                <div className="p-1">
                  <CardContent className="flex  items-center justify-center p-6 border-none">
                    <CardProduct />
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ul>
    </div>
  );
};

function HeroSection() {
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1558024343-9998298c7ce9?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx9YmlydGhkYXklMjBjYWtlfHwwfHwwfHwwfDA&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      alt: "Kue Ulang Tahun Cantik dengan Lilin",
      caption:
        "Rayakan momen spesial Anda dengan kue ulang tahun yang tak terlupakan.",
    },
    {
      src: "https://images.unsplash.com/photo-1560343090-f0409f9c11a9?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNha2VzfHwwfHwwfHwwfDA&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      alt: "Berbagai Macam Kue Lezat Tertata",
      caption:
        "Nikmati pilihan kue lezat kami, dibuat dengan bahan-bahan terbaik.",
    },
    {
      src: "https://images.unsplash.com/photo-1519572038579-b36338136824?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNha2VzfHwwfHwwfHwwfDA&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      alt: "Close-up Kue dengan Taburan Buah Segar",
      caption: "Kelezatan buah segar dalam setiap gigitan kue kami.",
    },
    {
      src: "https://images.unsplash.com/photo-1606491941579-8ca5a86c39f2?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJyZWFkfHwwfHwwfHwwfDA&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      alt: "Roti Tawar Empuk yang Baru Matang",
      caption:
        "Aroma roti tawar hangat untuk sarapan atau teman minum kopi Anda.",
    },
    {
      src: "https://images.unsplash.com/photo-1553531384-29c173d8d774?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNha2VzfHwwfHwwfHwwfDA&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      alt: "Kue Cokelat dengan Dekorasi Elegan",
      caption: "Kemewahan rasa cokelat dalam setiap kreasi kue elegan kami.",
    },
  ];
  return (
    <div className="w-full ">
      <Carousel className="w-full  ">
        <CarouselContent>
          {heroImages.map((item, index) => (
            <CarouselItem key={index}>
              <div className="">
                <Card>
                  <CardContent className="flex h-[30rem]  items-center justify-center p-6 rounded-none">
                    <img
                      src={item.src}
                      alt={item.alt || "Gambar hero section"}
                      
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

const Promotion = () => {
  const promoData = [
    {
      id: 1,
      productName: "Rossi Cake Special",
      imageUrl: "/img/diskon.jpg", // Replace with actual image path or URL
      imageAlt: "Special discount on Rossi Cakes",
      promoTitle: "Promo 50% OFF",
      description:
        "Enjoy a delicious Rossi Cake at half the price. Limited time offer!",
    },
    {
      id: 2,
      productName: "Weekend Bakery Delight",
      imageUrl: "/img/promo-bakery.jpg", // Example: another image
      imageAlt: "Weekend bakery promotion",
      promoTitle: "Buy 1 Get 1 Free",
      description:
        "Grab any pastry and get another one absolutely free this weekend.",
    },
    {
      id: 3,
      productName: "New Coffee Blend",
      imageUrl: "/img/coffee-promo.jpg", // Example: another image
      imageAlt: "New coffee blend promotion",
      promoTitle: "Introductory Price!",
      description:
        "Try our new signature coffee blend at a special introductory price.",
    },
    // Add more promo items here
  ];
  return (
    <div className="flex flex-col gap-5 justify-center items-center py-10">
      {" "}
      {/* Added some vertical padding to the section */}
      <h1 className="text-center font-semibold text-3xl">Promo</h1>
      <Carousel
        opts={{
          align: "start",
          loop: true, // Added loop for a better carousel experience
        }}
        className="w-full max-w-6xl px-4" // Added max-width and horizontal padding for better responsiveness
      >
        <CarouselContent className="border-none">
          {promoData.map((item) => (
            <CarouselItem
              key={item.id}
              className="md:basis-1/2 lg:basis-1/3 border-none py-10"
            >
              <div className="p-1 h-full">
                {" "}
                {/* Added h-full to ensure consistent card height if needed */}
                <Card className="h-full flex flex-col">
                  {" "}
                  {/* Added h-full and flex structure for consistent card height */}
                  <CardHeader className="p-4">
                    {" "}
                    {/* Adjusted padding */}
                    <CardTitle className="text-xl">
                      {item.productName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 flex-grow flex flex-col md:flex-row gap-4 items-center">
                    {" "}
                    {/* Adjusted padding and flex-grow */}
                    <div className="md:w-2/5 w-full flex-shrink-0">
                      <img
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        className="w-full h-48 md:h-full object-cover rounded-md" // Adjusted height and object-fit
                      />
                    </div>
                    <div className="md:w-3/5 w-full flex flex-col gap-3 items-start justify-center">
                      <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                        {item.promoTitle}
                      </h3>{" "}
                      {/* Example: Emphasized promo title */}
                      <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                        {" "}
                        {/* Example: line-clamp for consistent text length */}
                        {item.description}
                      </p>
                      <button className="mt-auto bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </span>
                        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10">
                          {" "}
                          {/* Adjusted padding for button */}
                          <span>Claim Sekarang</span>
                          <svg
                            fill="none"
                            height="16"
                            viewBox="0 0 24 24"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.75 8.75L14.25 12L10.75 15.25"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-2 md:ml-0" />{" "}
        {/* Adjusted positioning for smaller screens */}
        <CarouselNext className="mr-2 md:mr-0" />{" "}
        {/* Adjusted positioning for smaller screens */}
      </Carousel>
    </div>
  );
};
