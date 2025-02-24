import Link from "next/link";
import { Wrapper, MainButton } from "./indexCss";

export default function Home() {
  return (
    <Wrapper>
      <Link href="/main">
        <MainButton>메인페이지로 이동</MainButton>
      </Link>
    </Wrapper>
  );
}
