import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/main">
        <button>메인페이지로 이동</button>
      </Link>
    </div>
  );
}
