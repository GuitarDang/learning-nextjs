import { useRouter } from "next/router";
import * as React from "react";

export interface PostDetailPage {}

export default function PostDetailPage(props: PostDetailPage) {
  const router = useRouter();
  return (
    <div>
      <h1>Post detail page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
