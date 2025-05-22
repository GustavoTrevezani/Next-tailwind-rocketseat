import GithubProfile from "@/components/github-profile";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
        assumenda, rem ullam laudantium iure optio aut repudiandae numquam,
        suscipit illo harum voluptatum, beatae amet sapiente quos molestiae
        dolores illum? Eligendi.
      </p>
      <Suspense fallback={<p>Loading...</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  );
}
