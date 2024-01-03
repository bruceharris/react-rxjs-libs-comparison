import { Avatar, Box, Typography } from '@mui/material'
import { User } from '../../api/githubAPI'

interface UserAvatarProps {
  user: User
  orientation?: 'vertical' | 'horizontal'
  link?: boolean
  classes?: { [key: string]: string }
}

export const UserWithAvatar = ({ user, link = true }: UserAvatarProps) => {
  const contents = (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Avatar src={user.avatar_url} sx={{ marginX: 'auto' }} />
      <Typography variant="subtitle2">{user.login}</Typography>
    </Box>
  )

  if (link) {
    return <a href={`https://github.com/${user.login}`}>{contents}</a>
  }
  return <span>{contents}</span>
}
