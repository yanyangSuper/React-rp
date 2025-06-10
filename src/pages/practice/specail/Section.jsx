/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-06 10:01:43
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-06 11:03:21
 * @FilePath: /my-app/src/view/practice/specail/Section.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useContext } from 'react';
import {tierContext} from './tierContext.js'
export default function Section({children}) {
    // 会获取最近的Context值
    const tier = useContext(tierContext);
    return (
        <tierContext.Provider value={tier + 1}>
            <section className="section">
                {children}
            </section>
        </tierContext.Provider>
    )
}