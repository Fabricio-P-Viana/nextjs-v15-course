import { postRepository } from "@/repositories/post";

export default async function PostsList() {
  const posts = await postRepository.findAll();
  return (
    <>
      {posts.map((post) => (
        <div key={post.id} className="p-4 border-b">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="">{post.author}</p>
        </div>
      ))}
    </>
  );
}
