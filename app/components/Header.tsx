"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion"; // Import Framer Motion hooks
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navigation = [
    { name: "Our Websites", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Reviews", href: "#" },
];

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    // Framer Motion scroll hook
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(
        scrollY,
        [0, 100], // Scroll range
        ["rgba(13, 43, 43, 0)", "rgba(13, 43, 43, 0.9)"] // From transparent to dark green with 90% opacity
    );

    // Add blur effect when scrolled
    const blur = useTransform(
        scrollY,
        [0, 100], // Scroll range
        ["blur(0px)", "blur(8px)"] // From no blur to 8px blur
    );

    // Close sidebar if clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node) &&
                overlayRef.current &&
                !overlayRef.current.contains(event.target as Node)
            ) {
                setIsSidebarOpen(false);
            }
        };

        if (isSidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen]);

    return (
        <>
            {/* Header with backdrop-filter */}
            <motion.div
                style={{
                    backgroundColor,
                    backdropFilter: blur,
                }}
                className="z-50 right-0 top-0 sticky max-w-[1920px] mx-auto"
            >
                <div className="w-full max-w-[1718px] mx-auto pt-5 px-3 2xl:px-0">
                    {/* Overlay */}
                    {isSidebarOpen && (
                        <div
                            ref={overlayRef}
                            className="fixed  w-4/5 md:w-1/2 inset-0 z-40"
                            onClick={() => setIsSidebarOpen(false)}
                        ></div>
                    )}

                    {/* Less than lg View */}
                    <div className="flex lg:hidden justify-between items-center py-2 xl:py-6 px-0 lg:px-12">
                        <div>
                            <Link href="/">
                                <Image
                                    src="/images/logo.png"
                                    alt="main_logo"
                                    width={170}
                                    height={32}
                                    className="w-28 md:w-32 xl:w-40 object-contain"
                                />
                            </Link>
                        </div>

                        {/* Hamburger Menu */}
                        <div>
                            <button
                                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                className="text-white lg:p-2 rounded-full hover:bg-gray-700"
                            >
                                <HiMenuAlt3 size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Desktop View */}
                    <div className="hidden lg:flex lg:justify-between items-center py-4 w-full">
                        <div>
                            <Link href="/">
                                <Image
                                    src="/images/logo.png"
                                    alt="main_logo"
                                    width={373}
                                    height={82}
                                    className="h-auto w-1/2 2xl:w-[373px] object-cover"
                                />
                            </Link>
                        </div>
                        <div className="lg:space-x-9 xl:space-x-16 lg:flex hidden items-center">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="relative text-white text-base xl:text-[19px] font-extrabold"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link href="#" className="bg-light-green rounded-xl border-[5px] border-transparent px-8 font-neue text-base xl:text-[19px] pt-1 xl:pt-2.5 xl:pb-0.5 text-[#032727]">
                                Talk to us
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Sidebar (outside of the backdrop-filter element) */}
            <motion.div
                ref={sidebarRef}
                initial={{ x: "-100%" }}
                animate={{ x: isSidebarOpen ? 0 : "-100%" }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                className="fixed top-0 left-0 h-full w-4/5 md:w-1/2 z-50 bg-dark-green" // Add background color to sidebar
            >
                <div className="py-14 px-8">
                    <div className="flex flex-col h-full">
                        <div className="relative flex justify-start items-center">
                            <Link href="/">
                                <Image
                                    src="/images/logo.png"
                                    alt="main_logo"
                                    width={170}
                                    height={32}
                                    className="w-40 md:w-44 object-contain"
                                />
                            </Link>
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="text-white p-2 hover:bg-gray-700 absolute right-2 -top-10"
                            >
                                <HiX size={24} />
                            </button>
                        </div>
                        <div className="flex-grow mt-8 space-y-5">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block text-white hover:text-gray-300 lg:text-sm xl:text-base font-normal"
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="lg:hidden block mt-10">
                            <Link href="#" className="bg-light-green rounded-xl border-[5px] border-transparent px-7 font-neue text-[19px] pt-3 pb-2.5 text-[#032727]">
                                Talk to us
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}