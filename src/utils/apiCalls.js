export const fetchNeighborhoodData = (signal) => {
  return fetch('http://localhost:3001/api/v1/areas', { signal })
    .then(response => response.json())
    .then(data => {
      const promises = data.areas.map(area => {
        return fetch('http://localhost:3001' + area.details)
          .then(response => response.json())
          .then(data => {
            return {
              areaNickname: area.area,
              ...data
            }
          })
      })
      return Promise.all(promises)
    })
}

export const fetchAllListingsData = (signal) => {
  return fetch('http://localhost:3001/api/v1/listings', { signal })
      .then(res => res.json())
}

export const fetchAreaListingsData = (id, signal) => {
  return fetch(`http://localhost:3001/api/v1/areas/${id}`, { signal })
      .then(res => res.json())
      .then(data => data.listings)
      .then(listings => {const promises = listings.map(listing => {
        return fetch('http://localhost:3001' + listing)
                .then(res => res.json())
          })
          return Promise.all(promises)
        })
}

export const fetchListingDetailsData = (id, signal) => {
  return fetch(`http://localhost:3001/api/v1/listings/${id}`, { signal })
      .then(res => res.json())
}