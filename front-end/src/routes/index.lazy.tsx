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

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="container mx-auto px-10 lg:px-28 pt-24 md:py-5 flex flex-col gap-10">
        <HeroSection />
        <Categories />
        <NewArrival />
        <Adds />
        <Promotion />
      </div>
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
  return (
    <div className="w-full ">
      <Carousel className="w-full  ">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="">
                <Card>
                  <CardContent className="flex h-[30rem]  items-center justify-center p-6 rounded-none">
                    <span className="text-4xl font-semibold">{index + 1}</span>
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
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="text-center font-semibold text-3xl">Promo</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent className="border-none ">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 border-none py-10">
            <div className="p-1 ">
              <Card className="">
                <CardHeader className="p-3 ">Rossi Cake</CardHeader>
                <div className="flex p-2 ">
                  <CardTitle>
                    <img
                      src="/img/diskon.jpg"
                      alt="discount"
                      className="h-auto w-96"
                    />
                  </CardTitle>
                  <CardContent className="flex flex-col gap-3 items-start justify-center  ">
                    <span className="font-medium text-xl">Promo 50%</span>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Officia, voluptatum.
                    </p>
                    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                      <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </span>
                      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
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
                  </CardContent>
                </div>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
