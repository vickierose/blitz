export const getLevel = (levelNumber) => {
  return fetch(`${process.env.API_BASE_URL}/levels/${levelNumber}`)
  .then(res => res.json())
  .catch(err => console.log(err))
}