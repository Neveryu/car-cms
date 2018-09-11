import $ from 'jquery'

/**
 * 获取用户信息列表
 * @return {[type]} [description]
 */
function getCustomerList(index, count) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: '/getCustomerList',
      type: 'post',
      data: {
        index,
        count
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

export { getCustomerList }
