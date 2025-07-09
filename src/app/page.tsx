import Container from "@/components/Container";
import Header from "@/components/header";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link href={'#'} className="w-full h-full overflow-hidden rounded-xl">
          <Image
            className="group-hover:scale-105 object-cover object-center transition w-full h-full"
            src={"/images/bryen_0.png"}
            alt="Next.js Logo"
            width={1200}
            height={720}
            loading="eager"
            fetchPriority="high"
            priority
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 block text-sm/tight" dateTime="2025-04-20">20/04/2025 10:00</time>
          <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
            <Link href={'#'}>Lorem ipsum dolor</Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Soluta odio sit voluptatum possimus illo. Incidunt ab
            labore quia nihil voluptatibus laborum asperiores mollitia
            blanditiis iste similique libero, obcaecati exercitationem
            magni!
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader className="mt-10" />}>
        <PostsList />
      </Suspense>

      <footer>
        <h2>Footer</h2>
      </footer>
    </Container>
  );
}
