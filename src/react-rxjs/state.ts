import { createSignal } from '@react-rxjs/utils'
import { bind } from '@react-rxjs/core'
import { map, startWith, switchMap, withLatestFrom } from 'rxjs'
import { getIssues } from '../api/githubAPI'

export const INITIAL_ORG = 'facebook'
export const INITIAL_REPO = 'react'

export interface Repo {
  org: string
  repo: string
}

const [repo$, setRepo] = createSignal<Repo>()

const [pageText$, setPageText] = createSignal<string>()

const [usePage, page$] = bind(
  pageText$.pipe(
    map(val => {
      const parsed = parseInt(val, 10)
      return Number.isFinite(parsed) && parsed >= 1 ? parsed : 1
    }),
    startWith(1)
  )
)

export { setRepo, setPageText, usePage }

export const [useIssues, issues$] = bind(
  repo$.pipe(
    startWith({ org: INITIAL_ORG, repo: INITIAL_REPO }),
    withLatestFrom(page$),
    map(([{ org, repo }, page]) => getIssues(org, repo, page)),
    switchMap(issues$ => issues$)
  )
)
