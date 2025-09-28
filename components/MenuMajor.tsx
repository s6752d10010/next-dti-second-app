import Link from "next/link";

export default function MenuMajor() {
  return (
    <>
      <div className="flex justify-center gap-4 pt-6 text-blue-600">
        <Link href="/major"> หน้าหลักสาขา</Link>
        <Link href="major/acc"> acc</Link>
        <Link href="major/dm"> dm</Link>
        <Link href="major/dti"> dti</Link>
        <Link href="major/marketing"> marketing</Link>

      </div>
    </>
  );
}