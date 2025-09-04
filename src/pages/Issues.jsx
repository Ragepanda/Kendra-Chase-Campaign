import Issue from "../components/Issue";
import IssueButton from "../components/IssueButton";
import issueData from "../assets/issueData.json";

function Issues() {
  return (
    <div className="w-full h-full">
      <div className="gap-4 my-8 w-full h-auto flex flex-wrap justify-center">
        {issueData.map((issue) => (
          <IssueButton issueId={issue.issueId} title={issue.title} />
        ))}
      </div>
      <div className="w-full flex flex-col gap-8 px-8">
        {issueData.map((issue) => (
          <Issue
            issueId={issue.issueId}
            title={issue.title}
            paragraphs={issue.paragraphs}
            proposals={issue.proposals}
          />
        ))}
      </div>
    </div>
  );
}
export default Issues;
