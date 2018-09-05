// import myaxios from '@/common/request'

/**
 * 获取车辆信息列表
 * @return {[type]} [description]
 */
function getCarList(index, count) {
  return $.ajax({
    url: '/getcarList',
    methos: 'get',
    data: {
      index,
      count
    }
  })
}

export { getCarList }
