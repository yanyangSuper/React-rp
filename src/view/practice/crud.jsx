/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-04 16:11:46
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-04 16:24:14
 * @FilePath: /my-app/src/view/practice/crud.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from "react";
export default function Crud() {
    const [task, setTask] = useState([
        {  name: 'yangyang', age: 22, sex: 'boy' }
    ])
    console.log(task);

    return (
        <div>
            <div>
                <input type="text" />
                <button>添加</button>
            </div>
            <div>
                {
                    task.map((item, index) => {
                        return (
                            <div key={index}>
                                <input type="text" value={item.name} />
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}