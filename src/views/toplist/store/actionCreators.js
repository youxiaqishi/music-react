import axios from 'axios'
import { TOPLIST } from './actionTypes'
import { toplistUrl } from '../../../config/api'

const getToplistAction = data => ({
  type: TOPLIST,
  payload: data,
})

export const fetchToplist = () => (dispatch) => {
  axios.get(toplistUrl).then((res) => {
    const { data } = res
    dispatch(getToplistAction(data.result))
  })
}
