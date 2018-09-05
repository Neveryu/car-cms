import $ from 'jquery'

/**
 * 获取车辆信息列表
 * @return {[type]} [description]
 */
function getCarList(index, count) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: '/getcarList',
      methos: 'get',
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

export { getCarList }
