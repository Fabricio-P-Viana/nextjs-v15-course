import PostCoverImage from "../PostCoverImage";
import PostHeading from "../PostHeading";

export function PostFeatured() {
  const slug = 'example'
  const postLink= `/post/${slug}`;

  return (
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostCoverImage
          linkProps={{
            href: postLink,
          }}
          imagemProps={{
            src: "/images/bryen_9.png",
            alt: "Next.js Logo",
            width: 1200,
            height: 720,
            loading: "eager",
            fetchPriority: "high",
            priority: true,
          }}
        />
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 block text-sm/tight" dateTime="2025-04-20">20/04/2025 10:00</time>
          <PostHeading url={postLink} as="h1">quia nihil voluptatibu</PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Soluta odio sit voluptatum possimus illo. Incidunt ab
            labore quia nihil voluptatibus laborum asperiores mollitia
            blanditiis iste similique libero, obcaecati exercitationem
            magni!
          </p>
        </div>
      </section>
  )
}
