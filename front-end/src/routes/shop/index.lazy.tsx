import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Slash } from "lucide-react";
import { useEffect, useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GuestLayouts } from "@/components/Layouts/GuestLayout";

export const Route = createLazyFileRoute("/shop/")({
  component: RouteComponent,
});

const HeaderMarket = () => {
  const [open, setOpen] = useState(false);
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSearchChange = (val: string) => {
    const trimmed = val.trim();
    setValueSearch(val);
    setOpen(trimmed.length > 0);
  };
  const [count, setCount] = useState(0);

  const cards = [
    {
      description: "Lana Del Rey",
      title: "Summertime Sadness",
      src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Lana Del Rey, an iconic American singer-songwriter, is celebrated
            for her melancholic and cinematic music style. Born Elizabeth
            Woolridge Grant in New York City, she has captivated audiences
            worldwide with her haunting voice and introspective lyrics. <br />{" "}
            <br /> Her songs often explore themes of tragic romance, glamour,
            and melancholia, drawing inspiration from both contemporary and
            vintage pop culture. With a career that has seen numerous critically
            acclaimed albums, Lana Del Rey has established herself as a unique
            and influential figure in the music industry, earning a dedicated
            fan base and numerous accolades.
          </p>
        );
      },
    },
    {
      description: "Babbu Maan",
      title: "Mitran Di Chhatri",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Babu Maan, a legendary Punjabi singer, is renowned for his soulful
            voice and profound lyrics that resonate deeply with his audience.
            Born in the village of Khant Maanpur in Punjab, India, he has become
            a cultural icon in the Punjabi music industry. <br /> <br /> His
            songs often reflect the struggles and triumphs of everyday life,
            capturing the essence of Punjabi culture and traditions. With a
            career spanning over two decades, Babu Maan has released numerous
            hit albums and singles that have garnered him a massive fan
            following both in India and abroad.
          </p>
        );
      },
    },

    {
      description: "Metallica",
      title: "For Whom The Bell Tolls",
      src: "https://assets.aceternity.com/demos/metallica.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Metallica, an iconic American heavy metal band, is renowned for
            their powerful sound and intense performances that resonate deeply
            with their audience. Formed in Los Angeles, California, they have
            become a cultural icon in the heavy metal music industry. <br />{" "}
            <br /> Their songs often reflect themes of aggression, social
            issues, and personal struggles, capturing the essence of the heavy
            metal genre. With a career spanning over four decades, Metallica has
            released numerous hit albums and singles that have garnered them a
            massive fan following both in the United States and abroad.
          </p>
        );
      },
    },
    {
      description: "Led Zeppelin",
      title: "Stairway To Heaven",
      src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Led Zeppelin, a legendary British rock band, is renowned for their
            innovative sound and profound impact on the music industry. Formed
            in London in 1968, they have become a cultural icon in the rock
            music world. <br /> <br /> Their songs often reflect a blend of
            blues, hard rock, and folk music, capturing the essence of the 1970s
            rock era. With a career spanning over a decade, Led Zeppelin has
            released numerous hit albums and singles that have garnered them a
            massive fan following both in the United Kingdom and abroad.
          </p>
        );
      },
    },
    {
      description: "Mustafa Zahid",
      title: "Toh Phir Aao",
      src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
      ctaText: "Play",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
            renowned for its intense storyline and powerful performances.
            Directed by Mohit Suri, the film has become a significant work in
            the Indian film industry. <br /> <br /> The movie explores themes of
            love, redemption, and sacrifice, capturing the essence of human
            emotions and relationships. With a gripping narrative and memorable
            music, &quot;Aawarapan&quot; has garnered a massive fan following
            both in India and abroad, solidifying Emraan Hashmi&apos;s status as
            a versatile actor.
          </p>
        );
      },
    },
  ];
  return (
    <>
      <div className="header  flex-col md:flex-row  flex justify-between  flex-wrap gap-5  ">
        <div className="path ">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex justify-end relative md:w-1/2 items-center ">
          <div className="searching  h-10">
            <Command className=" rounded-lg border  shadow-md md:min-w-[450px]  h-fit ">
              <CommandInput
                value={valueSearch}
                placeholder="Type a command or search..."
                onValueChange={handleSearchChange}
              />
              <CommandList className={`  ${open ? "block" : "hidden"} h-fit  `}>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem disabled>
                    <Calculator />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>
                    <User />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
          <Modal>
            <ModalTrigger className="col-span-1 lg:col-span-2   group/modal-btn">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <span>Keranjang</span>
              </HoverBorderGradient>
            </ModalTrigger>
            <ModalBody className="overflow-y-auto">
              <ModalContent>
                <h4 className="text-lg md:text-2xl  text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                  Keranjang
                </h4>
                <ScrollArea className="h-[25rem]  rounded-md border">
                  {cards.map((card, id) => (
                    <motion.div
                      layoutId={`card-${card.title}-${id}`}
                      key={`card-${card.title}-${id}`}
                      // onClick={() => setActive(card)}
                      className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                      <div className="flex gap-4 flex-row ">
                        <motion.div layoutId={`image-${card.title}-${id}`}>
                          <img
                            width={100}
                            height={100}
                            src={card.src}
                            alt={card.title}
                            className="h-7 w-auto md:h-14 md:w-14 rounded-lg object-cover object-top"
                          />
                        </motion.div>
                        <div>
                          <motion.h3
                            layoutId={`title-${card.title}-${id}`}
                            className="font-medium text-neutral-800 dark:text-neutral-200  text-left"
                          >
                            {card.title}
                          </motion.h3>
                          <motion.p
                            layoutId={`description-${card.description}-${id}`}
                            className="text-neutral-600 dark:text-neutral-400  text-left"
                          >
                            {card.description}
                          </motion.p>
                        </div>
                      </div>

                      <div className="flex gap-3 justify-center md:justify-end  ">
                        <Button
                          onClick={() => {
                            count != 0 && setCount(count - 1);
                          }}
                        >
                          -
                        </Button>
                        <Input
                          id="width"
                          value={count}
                          className="text-center w-1/5"
                        />
                        <Button onClick={() => setCount(count + 1)}>+</Button>
                      </div>
                    </motion.div>
                  ))}
                </ScrollArea>
                <hr />
                <motion.div
                  // onClick={() => setActive(card)}
                  className="p-4 flex  flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                >
                  <div className="flex flex-col gap-4   ">
                    <motion.p className=" text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                      Total Quantity
                    </motion.p>
                    <motion.p className=" text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                      Total PV
                    </motion.p>
                    <motion.p className=" text-neutral-800 dark:text-neutral-200 text-center md:text-left">
                      Diskon
                    </motion.p>
                    <motion.h3 className="text-neutral-600 font-medium dark:text-neutral-400 text-center md:text-left">
                      Total harga
                    </motion.h3>
                  </div>

                  <div className="flex flex-col w-1/4 gap-4  ">
                    <motion.p className="font-medium text-neutral-800 dark:text-neutral-200 text-center ">
                      10
                    </motion.p>
                    <motion.p className="font-medium text-neutral-800 dark:text-neutral-200 text-center ">
                      10
                    </motion.p>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a fruit" />
                      </SelectTrigger>
                      <SelectContent modal={true}>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <motion.h3 className="text-neutral-600 font-medium dark:text-neutral-400 text-center ">
                      RP 1.000.000
                    </motion.h3>
                  </div>
                </motion.div>
              </ModalContent>
              <ModalFooter className="gap-4">
                <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                  Buat Pesanan
                </button>
                <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-32">
                  Bayar Sekarang
                </button>
              </ModalFooter>
            </ModalBody>
          </Modal>
        </div>
      </div>
      <div className="body"></div>
    </>
  );
};

const ListProduct = () => {
  return (
    <>
      <div className="categories pt-10 flex justify-between ">
        <div className="flex  justify-start  flex-wrap  text-center gap-2">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Herbs</span>
          </HoverBorderGradient>

          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Health Food & Beverages</span>
          </HoverBorderGradient>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Cosmetics </span>
          </HoverBorderGradient>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Home Care</span>
          </HoverBorderGradient>
        </div>
      </div>
      <div className="listProducts grid grid-col-1 md:grid-cols-3 xl:grid-cols-5 gap-7 p-5 h-screen overflow-auto my-10">
        {Array.from({ length: 25 }).map((_, index) => (
          <>
            <CardProduct key={index} />
          </>
        ))}
      </div>
    </>
  );
};

function CardProduct() {
  return (
    <div className="rounded-[22px] max-w-sm  p-1 sm:p-10 bg-white dark:bg-zinc-900  border border-gray-700">
      {/* <BackgroundGradient className="rounded-[22px] max-w-sm p-1 sm:p-10 bg-white dark:bg-zinc-900  "> */}
      <img
        src="/img/sevel.png"
        alt="jordans"
        height="400"
        width="400"
        className="object-contain"
      />
      <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
        Air Jordan 4 Retro Reimagined
      </p>

      <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
        <span>Buy now </span>
        <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
          $100
        </span>
      </button>
      {/* </BackgroundGradient> */}
    </div>
  );
}

function RouteComponent() {
  return (
    <GuestLayouts>
      <div className="relative container mx-auto px-5 lg:px-28 lg:py-10 pt-24">
        <HeaderMarket />
        <ListProduct />
      </div>
    </GuestLayouts>
  );
}
