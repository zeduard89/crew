export const getCategoryQuery = (queries: string): string | null => {
  const urlParams = new URLSearchParams(queries)
  return urlParams.get('category')
}

export const getSortQuery = (queries: string): string | null => {
  const urlParams = new URLSearchParams(queries)
  return urlParams.get('sort')
}

export const getSearchQuery = (queries: string): string | null => {
  const urlParams = new URLSearchParams(queries)
  return urlParams.get('q')
}
