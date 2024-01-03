import { Box, Divider, Typography } from '@mui/material'
import { Issue } from '../../../api/githubAPI'
import { UserWithAvatar } from '../../components/UserWithAvatar'
import { shorten } from '../../../utils/stringUtils'
import { IssueLabels } from '../../components/IssueLabels'

export const IssueListItem = ({
  number,
  title,
  labels,
  user,
  comments,
  body = '',
}: Issue) => {
  const pluralizedComments = comments === 1 ? 'comment' : 'comments'
  const onIssueClicked = () => {}

  return (
    <>
      <Box sx={{ display: 'flex', gap: 1, padding: 1 }}>
        <UserWithAvatar user={user} />
        <Box>
          <a href="#comments" onClick={onIssueClicked}>
            <Typography variant="body1">#{number}</Typography>
            <Typography variant="body2">{title}</Typography>
          </a>
          <br /> ({comments} {pluralizedComments})<p>{shorten(body)}</p>
          <IssueLabels labels={labels} />
        </Box>
      </Box>
      <Divider />
    </>
  )
}
