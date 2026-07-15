import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link><ChevronRight size={14} /><span aria-current="page">{current}</span>
    </nav>
  );
}
