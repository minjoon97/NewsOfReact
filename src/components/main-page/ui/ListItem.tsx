import { GitHubRelease } from "@/shared/types/githubReleaseType";
import { List } from "./indexCss";
import ReactMarkdown from "react-markdown";

interface ListItemProps {
  listData: GitHubRelease;
}

const ListItem = ({ listData }: ListItemProps) => {
  return (
    <List>
      <h1>{listData.name}</h1>
      <p>{listData.created_at}</p>
      <div>
        <ReactMarkdown>{listData.body}</ReactMarkdown>
      </div>
    </List>
  );
};

export default ListItem;
