export const SEARCH_QUERY = "SEARCH_QUERY"
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS"

export const searchQuery = (query) => ({
  type: SEARCH_QUERY,
  query
})

export const receiveSearchResults = (suggestions) => ({
  type: RECEIVE_SEARCH_RESULTS,
  suggestions
})
