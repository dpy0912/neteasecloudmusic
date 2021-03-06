import api from './Interface'

/**
 * 发送评论
 * @param {*} params t: 1 发送, 2 回复
 * @param {*} params type: 数字 , 资源类型 ,   0: 歌曲  1: mv, 2: 歌单,  3: 专辑 , 歌单 , 4: 电台,  5: 视频， 6：动态                                                                                         
 * @param {*} params id: 对应资源 id
 * @param {*} params content: 要发送的内容
 * @param {*} params commentId: 回复的评论id (回复评论时必填)
 * 调用例子 : /comment?t=1&type=1&id=5436712&content=test (往广岛之恋 mv 发送评论: test)
 * 注意：如给动态发送评论，则不需要传 id，需要传动态的 threadId,如：/comment?t=1&type=6&threadId=A_EV_2_6559519868_32953014&content=test
 * @returns 
 */
export const sendComment = params => api.get(`/comment`, {
    params
})

/**
 * 给评论点赞
 * @param {*} params 说明 : 调用此接口 , 传入 type, 资源 id, 和评论 id cid 和 是否点赞参数 t 即可给对 应评论点赞 ( 需要登录 )
 * @param {*} params id : 资源 id, 如歌曲 id,mv id
 * @param {*} params cid : 评论 id                                                                                 
 * @param {*} params t : 是否点赞 ,1 为点赞 ,0 为取消点赞
 * @param {*} params type: 数字 , 资源类型 ,   0: 歌曲  1: mv, 2: 歌单,  3: 专辑 , 歌单 , 4: 电台,  5: 视频， 6：动态     
 * @param {*} params commentId: 回复的评论id (回复评论时必填)
 * 调用例子 : /comment/like?id=29178366&cid=12840183&t=1&type=0 对应给 https://music.163.com/#/song?id=29178366 最热门的评论点赞
 * 注意： 动态点赞不需要传入 id 参数，需要传入动态的 threadId 参数,
 * 如：/comment/like?type=6&cid=1419532712&threadId=A_EV_2_6559519868_32953014&t=0， threadId 可通过 /event，/user/event 接口获取
 * @returns 
 */
export const commentLike = params => api.get(`/comment/like`, {
    params
})

/**
 * 热门评论
 * @param {*} params id: 资源 id
 * @param {*} params type: 数字 , 资源类型 ,   0: 歌曲  1: mv, 2: 歌单,  3: 专辑 , 歌单 , 4: 电台,  5: 视频                                                                                            
 * @param {*} params limit: 取出评论数量 , 默认为 20
 * @param {*} params offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @param {*} params before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
 * @returns 
 */
export const getHotCommentList = params => api.get(`/comment/hot`, {
    params
})

/**
 * 歌单评论
 * @param {*} params id: 歌单 id
 * @param {*} params limit: 取出评论数量 , 默认为 20
 * @param {*} params offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @param {*} params before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
 * @returns 
 */
export const getCommentList = params => api.get(`/comment/playlist`, {
    params
})