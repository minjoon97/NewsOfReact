"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchReactNews } from "./logic/fetchReactNews";
import { GitHubRelease } from "@/shared/types/githubReleaseType";
import ListItem from "./ui/ListItem";
import { Wrapper } from "./indexCss";

const MainPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["reactNews"],
    queryFn: fetchReactNews,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  console.log(data);
  return (
    <Wrapper>
      <ul>
        {data.map((v: GitHubRelease, i: number) => (
          <ListItem key={i} listData={v}></ListItem>
        ))}
      </ul>
    </Wrapper>
  );
};

export default MainPage;
