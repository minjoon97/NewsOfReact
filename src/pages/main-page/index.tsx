import { useQuery } from "@tanstack/react-query";
import { fetchReactNews } from "../../logic/fetchReactNews";
import { Wrapper } from "./indexCss";

const MainPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["reactNews"],
    queryFn: fetchReactNews,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  console.log(data);
  return <Wrapper></Wrapper>;
};

export default MainPage;
