import { ASTProvidor } from "../util/contextProvidor";
import InputPage from "../components/inputPage";
import MarkdownPage from "../components/markdownPage";
import "../style/webPage.scss";

export default function Sheet() {
  return (
    <>
      <ASTProvidor>
        <div className="webPage">
          <InputPage />
          <MarkdownPage />
        </div>
      </ASTProvidor>
    </>
  );
}
