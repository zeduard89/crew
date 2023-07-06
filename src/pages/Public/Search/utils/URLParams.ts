import { type ShowState } from '../interface'

interface URLParamsProps {
  showState: ShowState
}

export const URLParams = ({ showState }: URLParamsProps): URLSearchParams => {
  const params = new URLSearchParams()

  if (showState.category !== 'All Projects') {
    params.append('category', showState.category)
  } else {
    params.append('category', 'all')
  }

  params.append('sort', showState.sort)
  params.append('q', showState.search)
  params.append('s', '100')
  params.append('p', '0')
  params.append('country', 'all')

  return params
}
