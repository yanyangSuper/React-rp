/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-05-29 17:05:17
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-03 14:58:25
 * @FilePath: /my-app/src/view/practice/sonpr.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default function SonPr({decree, handleClick}) {

    const changeDecree = () => {
      decree = '改变Porps';
      console.log(decree);
    }
  return (
    <div>
      <h1>子组件</h1>
      <p>{decree}</p>
      <button onClick={() => handleClick('99')}>改变Porps</button>
    </div>
  );
}