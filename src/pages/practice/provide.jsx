/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-05 16:36:04
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-05 16:36:24
 * @FilePath: /my-app/src/view/practice/provide.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export default function Provide() {
    return (
        <Provider store={store}>
            <Page />
        </Provider>
    );
}