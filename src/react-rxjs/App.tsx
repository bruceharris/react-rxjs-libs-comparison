import { Subscribe } from "@react-rxjs/core";
import { RepoSearchForm } from "./features/repoSearch/RepoSearchForm";
import { IssuesList } from "./features/issuesList/IssuesList";

function App() {
  return (
    <>
      <Subscribe>
        <RepoSearchForm />
      </Subscribe>
      <Subscribe fallback={<>loading</>}>
        <IssuesList />
      </Subscribe>
    </>
  );
}

export default App;
