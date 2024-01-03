import { Label } from '../../api/githubAPI'

interface IssueLabelsProps {
  labels: Label[]
}

export const IssueLabels = ({ labels }: IssueLabelsProps) => (
  <div>
    {labels.map(label => (
      <span key={label.id}>{label.name}</span>
    ))}
  </div>
)
