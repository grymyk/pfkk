import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

export default function DesctopMenu() {
    const router = useRouter();
    const { asPath: path } = router;

    return (
        <div className="space-x-8 hidden md:block">
            <Link href="/about">
                <a
                    className = {`text-base  ${
                        path === "/about"
                            ? "text-gray-800 font-bold dark:text-gray-400"
                            : "text-gray-600 dark:text-gray-300 font-normal "
                    }`}
                >
                    About{" "}
                    { path === "/about" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-down inline-block h-3 w-3"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                        </svg>
                    )}
                </a>
            </Link>

            <Link href="/portfolio">
                <a
                    className={`text-base  ${
                        path === "/portfolio"
                            ? "text-gray-800 font-bold dark:text-gray-400"
                            : "text-gray-600 dark:text-gray-300 font-normal "
                    }`}
                >
                    Portfolio
                    { path === "/portfolio" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-down inline-block h-3 w-3"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                        </svg>
                    )}
                </a>
            </Link>

            <Link href="/polygraphy">
                <a
                    className={`text-base  ${
                        path === "/polygraphy"
                            ? "text-gray-800 font-bold dark:text-gray-400"
                            : "text-gray-600 dark:text-gray-300 font-normal "
                    }`}
                >
                    Polygraphy{" "}
                    {path === "/polygraphy" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-down inline-block h-3 w-3"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                        </svg>
                    )}
                </a>
            </Link>
            <Link href="/contact">
                <a
                    className={`text-base  ${
                        path === "/contact"
                            ? "text-gray-800 font-bold dark:text-gray-400"
                            : "text-gray-600 dark:text-gray-300 font-normal "
                    }`}
                >
                    Contact
                    {path === "/contact" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-down inline-block h-3 w-3"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                        </svg>
                    )}
                </a>
            </Link>
            <Link href="/price">
                <a
                    className = {`text-base  ${
                        path === "/price"
                            ? "text-gray-800 font-bold dark:text-gray-400"
                            : "text-gray-600 dark:text-gray-300 font-normal "
                    }`}
                >
                    Price{" "}
                    { path === "/price" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-arrow-down inline-block h-3 w-3"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                            />
                        </svg>
                    )}
                </a>
            </Link>
        </div>
    )
}
