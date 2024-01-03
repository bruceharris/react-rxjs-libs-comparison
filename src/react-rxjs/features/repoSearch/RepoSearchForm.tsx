import { Box, Button, TextField, styled } from '@mui/material'
import { useState } from 'react'
import {
  INITIAL_ORG,
  INITIAL_REPO,
  setPageText,
  setRepo,
  usePage,
} from '../../state'

const Row = styled(Box)({
  display: 'flex',
  gap: '8px',
})

export function RepoSearchForm() {
  const [org, setOrg] = useState(INITIAL_ORG)
  const [repoName, setRepoName] = useState(INITIAL_REPO)
  const page = usePage()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Row>
        <TextField
          label="Org"
          value={org}
          onChange={e => setOrg(e.target.value)}
        />
        <TextField
          label="Repo"
          value={repoName}
          onChange={e => setRepoName(e.target.value)}
        />
        <Button
          onClick={() => {
            setRepo({ org, repo: repoName })
          }}
        >
          Load Repo
        </Button>
      </Row>
      <Row>
        <TextField
          label="Issues Page"
          value={page}
          onChange={e => setPageText(e.target.value)}
        />
        <Button>Jump to Page</Button>
      </Row>
    </Box>
  )
}
