import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import { ThemeProvider } from "@/contexts/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    applicationName: "Sanchari Mandal | Portfolio",
    title: "Sanchari Mandal | Portfolio",
    description: "Portfolio by Sanchari",
    keywords: [
        "Sanchari Mandal",
        "Sanchari portfolio",
        "web developer portfolio",
        "full-stack developer",
        "frontend developer",
        "backend developer",
        "React developer",
        "Next.js developer",
        "JavaScript portfolio",
        "developer projects",
        "UI/UX designer",
    ],
    authors: [
        { name: "Sanchari Mandal", url: "https://github.com/msanchariii" },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light">
            <body className={inter.className}>
                {/* <GsapProvider> */}
                <ThemeProvider>
                    <div className="relative">
                        <Cursor />
                        {/* <StarsBackground /> */}
                        <main className="relative z-10">{children}</main>
                    </div>
                </ThemeProvider>
                {/* </GsapProvider> */}
            </body>
        </html>
    );
}

// export const metadata = {
//     applicationName: "Sanchari Mandal | Full-Stack Developer Portfolio",
//     title: "Sanchari Mandal | Full-Stack Developer & Web Designer",
//     description: "Explore the portfolio of Sanchari Mandal, a passionate full-stack web developer and designer. Showcasing projects, skills, and experience in building modern, responsive web applications.",
//     keywords: [
//         "Sanchari Mandal",
//         "Sanchari portfolio",
//         "web developer portfolio",
//         "full-stack developer",
//         "frontend developer",
//         "backend developer",
//         "React developer",
//         "Next.js developer",
//         "JavaScript portfolio",
//         "developer projects",
//         "UI/UX designer",
//     ],
//     authors: [
//         { name: "Sanchari Mandal", url: "https://github.com/msanchariii" },
//     ],
//     creator: "Sanchari Mandal",
//     publisher: "Sanchari Mandal",
//     openGraph: {
//         title: "Sanchari Mandal | Full-Stack Developer Portfolio",
//         description: "Check out Sanchari Mandal's portfolio, featuring web development projects, technical skills, and design expertise.",
//         url: "https://your-portfolio-domain.com",
//         siteName: "Sanchari Mandal Portfolio",
//         images: [
//             {
//                 url: "https://your-portfolio-domain.com/og-image.png",
//                 width: 1200,
//                 height: 630,
//                 alt: "Sanchari Mandal Portfolio Preview",
//             },
//         ],
//         locale: "en_US",
//         type: "website",
//     },
// };
