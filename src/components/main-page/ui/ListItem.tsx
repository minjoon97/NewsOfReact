import { GitHubRelease } from "@/shared/types/githubReleaseType";
import { List } from "./indexCss";

interface ListItemProps {
  listData: GitHubRelease;
}

const ListItem = ({ listData }: ListItemProps) => {
  return <List>{listData.created_at}</List>;
};

export default ListItem;
