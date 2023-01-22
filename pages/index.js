import Head from "next/head";
import { Inter } from "@next/font/google";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Image from "next/image";
import HeroSection from "@/Components/Banner";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Rulrr App</title>
			</Head>
			<Header />
			<HeroSection />
		 
		</>
	);
}
