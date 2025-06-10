/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-06 10:01:28
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-06 10:56:40
 * @FilePath: /my-app/src/view/practice/specail/Heading.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useContext } from 'react';
import {tierContext} from './tierContext.js'
export default function Heading({ level, children }) {
    const tier = useContext(tierContext);
  switch (tier) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('未知的 level：' + level);
  }
}
