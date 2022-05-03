import Link from "next/link";
import userData from "@constants/data";

export default function Logo() {
    return (
        <div className="flex flex-col">
            <Link href="/">
                <a>
                    <h1 className="font-semibold text-xl dark:text-gray-100">
                        { userData.name }
                    </h1>
                    <p className="text-base font-light text-gray-500 dark:text-gray-300">
                        { userData.designation }
                    </p>
                </a>
            </Link>
        </div>
    )
}
