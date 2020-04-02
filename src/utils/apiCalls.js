export const fetchNeighborhoodData = (signal) => {
  return fetch('https://vrad-api.herokuapp.com/api/v1/areas', { signal })
    .then(response => response.json())
    .then(data => {
      const promises = data.areas.map(area => {
        return fetch('https://vrad-api.herokuapp.com' + area.details)
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
  return fetch('https://vrad-api.herokuapp.com/api/v1/listings', { signal })
      .then(res => res.json())
}

export const fetchAreaListingsData = (id, signal) => {
  return fetch(`https://vrad-api.herokuapp.com/api/v1/areas/${id}`, { signal })
      .then(res => res.json())
      .then(data => data.listings)
      .then(listings => {const promises = listings.map(listing => {
        return fetch('https://vrad-api.herokuapp.com' + listing)
                .then(res => res.json())
          })
          return Promise.all(promises)
        })
}

export const fetchListingDetailsData = (id, signal) => {
  return fetch(`https://vrad-api.herokuapp.com/api/v1/listings/${id}`, { signal })
      .then(res => res.json())
}