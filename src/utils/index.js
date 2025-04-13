const TOKEN = 'TOKEN'
function getToken () {
  return localStorage.getItem(TOKEN)
}

function removeToken () {
  return localStorage.removeItem(TOKEN)
}

export {
  getToken,
  removeToken,
}
