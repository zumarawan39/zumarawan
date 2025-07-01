  import { createClient } from "@/prismicio";
  import { SliceZone } from "@prismicio/react";
  import { components } from "@/slices";

  export default async function ExperiencePage() {
    const client = createClient();
    const page = await client.getSingle("experience");

    return (
      <div className="sm:px-4">
        {page?.data?.slices?.length > 0 ? (
          <SliceZone slices={page.data.slices} components={components} />
        ) : (
          <div>No experience slices found.</div>
        )}
      </div>
    );
  }
