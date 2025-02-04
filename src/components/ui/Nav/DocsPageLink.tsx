import Link from "next/link";

export const DocsPageLink = () => {
  return (
    <Link
      href="/docs/welcome"
      className="instill-text-body flex text-instillGrey80 hover:text-instillBlue50"
    >
      <p className="my-auto">Documentation</p>
    </Link>
  );
};
