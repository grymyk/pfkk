import React from 'react'
import Link from "next/link";

export default function MobuleMenu() {
    return (
        <div className="space-x-8 block md:hidden mt-4">
            <Link href="/about">
                <a className="text-base font-normal text-gray-600 dark:text-gray-300">
                    About 1
                </a>
            </Link>
            <Link href="/portfolio">
                <a className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Portfolio
                </a>
            </Link>
            <Link href="/polygraphy">
                <a className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Polygraphy
                </a>
            </Link>
            <Link href="/contact">
                <a className="text-base font-normal text-gray-600 dark:text-gray-300">
                    Contact
                </a>
            </Link>
        </div>
    )
}
