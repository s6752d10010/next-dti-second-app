import Link from "next/link";

export default function MenuBar() {
  return (
    <>
      <div className="flex justify-center gap-4 pt-6 bg-green-800 text-white">
        <Link href="/"> หน้าแรก</Link>
        <Link href="/login"> เข้าสู่ระบบ</Link>
        <Link href="/major"> สาขาวิฃา</Link>
        <Link href="/contact"> ติดต่อ</Link>
        <Link href="/about"> เกี่ยวกับ</Link>

      </div>
    </>
  );
}