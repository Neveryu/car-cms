import $ from 'jquery'

/**
 * Login
 * @return {[type]} [description]
 */
function login({ email, pwd }) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: '/login',
      type: 'post',
      data: {
        account: email,
        password: pwd
      },
      success: function(data) {
        resolve(data)
      },
      error: function(data) {
        reject(data)
      }
    })
  })
}

function logout(uid) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: '/logout',
      type: 'post',
      data: {
        uid
      },
      success: function(data) {
        resolve(data)
      },
      error: function(data) {
        reject(data)
      }
    })
  })
}

export { login, logout }
