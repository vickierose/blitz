export const getLevel = (levelNumber) => {
  fetch(`http://localhost:3000/levels/${levelNumber}`)
  .then(res => res.json())
  .catch(err => console.log(err))
}