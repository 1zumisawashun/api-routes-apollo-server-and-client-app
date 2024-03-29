import Link from "next/link";

export default function Pages() {
  return (
    <div>
      This is a static page goto <Link href="/">dynamic</Link> page.
    </div>
  );
}
