
const initialPlayer = ({
  name: "Unknown",
  storage: [
    {name: "water",
    amount: 1000}
],
})

function player(state = initialPlayer, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default player