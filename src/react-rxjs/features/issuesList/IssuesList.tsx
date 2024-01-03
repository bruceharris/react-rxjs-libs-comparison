import { Box } from '@mui/material'
import { useIssues } from '../../state'
import { IssueListItem } from './IssuesListItem'

export function IssuesList() {
  const { issues } = useIssues()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {issues.map(issue => (
        <IssueListItem key={issue.id} {...issue} />
      ))}
    </Box>
  )
}
