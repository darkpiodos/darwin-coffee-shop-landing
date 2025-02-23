"use client";
import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import { MdKeyboardArrowDown } from "react-icons/md";

import {
  GiCoffeeBeans,
  GiWaterGallon,
  GiMilkCarton,
  GiHamburger,
  GiIceCreamCone,
  GiAlliedStar,
  GiRotaryPhone,
  GiHamburgerMenu,
  GiShoppingBag,
} from "react-icons/gi";

import Image from "next/image";
const cafemenu = [
  {
    name: "Coffee",
    description: "Explore the rich world of coffee with our selection",
    href: "#",
    icon: GiCoffeeBeans,
  },
  {
    name: "MilkTeas",
    description: "Indulge in our delightful milk teas",
    href: "#",
    icon: GiMilkCarton,
  },
  {
    name: "Snacks",
    description: "Perfect bites to accompany your drink",
    href: "#",
    icon: GiIceCreamCone,
  },
  {
    name: "Desserts",
    description: "Satisfy your sweet tooth with our delightful desserts",
    href: "#",
    icon: GiHamburger,
  },
  {
    name: "Drinks",
    description: "Refresh yourself with our variety of drinks",
    href: "#",
    icon: GiWaterGallon,
  },
];
const callsToAction = [
  { name: "Best Sellers", href: "#", icon: GiAlliedStar },
  { name: "Call Us", href: "#", icon: GiRotaryPhone },
];

export default function Headers() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Image
              src="/assets/logo/darwincoffee.png"
              alt="Darwin's Logo"
              width={200}
              height={100}
              className="w-[120px] sm:w-[130px] md:w-[140px] lg:w-[180px] h-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <GiHamburgerMenu aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold text-gray-900">
              Cafe Menu
              <MdKeyboardArrowDown
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {cafemenu.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-lime-500"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-lg font-semibold text-gray-900">
            About Us
          </a>
          <a href="#" className="text-lg font-semibold text-gray-900">
            Find Us
          </a>
          <a href="#" className="text-lg font-semibold text-gray-900">
            Darwin's Catering
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end group items-center">
          <button
            type="button"
            className="relative inline-flex items-center justify-center w-10 h-10 mr-3 overflow-hidden text-sm font-medium text-black bg-neutral-100 rounded-full shadow- transition-transform transform group-hover:scale-105 group-hover:bg-neutral-50 group-hover:text-black"
          >
            <GiShoppingBag className="w-5 h-5" />
            <span className="sr-only">View Cart</span>{" "}
          </button>
        </div>

        <div className="hidden lg:flex lg:justify-end group items-center">
          <button
            type="button"
            className="relative inline-flex items-center justify-center px-6 py-3 mr-2 overflow-hidden text-md font-medium text-white bg-black/90 rounded-md shadow-xl transition-transform transform group-hover:scale-105"
          >
            Buy Gift Vouchers
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="/assets/logo/darwincoffee.png"
                alt="Darwin's Logo"
                width={140}
                height={100}
                className=""
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <GiHamburgerMenu aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Cafe Menu
                    <MdKeyboardArrowDown
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...cafemenu, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Find Us
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Darwin's Catering
                </a>
              </div>

              <div className="pb-3 pt-6">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center px-6 py-3 mr-2 overflow-hidden text-sm font-medium text-black bg-neutral-100 rounded-md shadow-lg transition-transform transform group-hover:scale-105 w-full"
                >
                  {" "}
                  <GiShoppingBag className="w-4 h-4 mr-2" />
                  View Cart
                </button>
              </div>

              <div className="">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center px-6 py-3 mr-2 overflow-hidden text-sm font-medium text-white bg-black/90 rounded-md shadow-lg transition-transform transform group-hover:scale-105 w-full"
                >
                  Buy Gift Vouchers
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
