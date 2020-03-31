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