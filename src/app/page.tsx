import Container from "@/components/Container";
import Header from "@/components/header";
import { PostFeatured } from "@/components/PostFeatured";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader className="mt-10" />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader className="mt-10" />}>
        <PostsList />
      </Suspense>

      <footer>
        <h2>Footer</h2>
      </footer>
    </Container>
  );
}
