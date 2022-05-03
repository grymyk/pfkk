import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Header({ customMeta }) {
    const router = useRouter();
    const { asPath: path } = router;

     const meta = {
        image: "/avatar.png",
        type: "website",
        ...customMeta,
     };

    return (
        <Head>
            <title>{ meta.title }</title>
            <meta name="robots" content="follow, index" />
            <meta content={ meta.description } name="description" />
            <meta property="og:url"
                  content={`https://yourwebsite.com${path}`}
            />
            <link rel="canonical"
                  href={`https://yourwebsite.com${path}`}
            />
            <meta property="og:title" content={ meta.title } />
            <meta property="og:description" content={ meta.description } />
            <meta property="og:type" content={ meta.type } />
            <meta property="og:site_name" content={ meta.title } />
            <meta property="og:image" content={ meta.image } />

            {/*<meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@mannupaaji" />
            <meta name="twitter:title" content={ meta.title } />
            <meta name="twitter:description" content={ meta.description } />
            <meta name="twitter:image" content={ meta.image } />*/}

            {meta.date && (
                <meta property="article:published_time"
                      content={ meta.date } />
            )}
        </Head>
    )
}
