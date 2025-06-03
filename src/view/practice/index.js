/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-05-29 11:32:59
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-03 15:04:58
 * @FilePath: /my-app/src/view/practice/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import SonPr from "./sonpr";
export default function Practice(props) {

  /**
   * React 路由模式，路由传参
   * 路由传参法二：params方式
   * 路由路径中使用:styl语法和useParams()来读取
   * 类似vue的params传参
   * 路由传参法二： query方式传参 /practice?id=1&name=yangyang
   * useSearchParams '使读取和操作搜索参数变得很容易
   * 
   */

  /**
   * react父子组件 通过props传参
   * context 可以跨级传参
   * 在react中需要保持组件的干净
   * 很重要的点高阶组件和状态提升
   * 不直接改变props 而是用的状态去替换
   * 引起页面渲染必须通过状态的变化，普通变量并不会引起页面重新渲染，没有双向绑定的说法，都是通过时间来驱动setState钩子
   * 状态提升
   * 状态提升，将多个组件的state提升到最近的公共父组件中，然后通过props传递给子组件
   */

  const params = useParams();
  console.log(params, 'params');

  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams, 'searchParams');
  let id = searchParams.get("id");
  console.log(id, 'id');

  let navigate = useNavigate();

  const decreeContent = '战士战北海，妇幼入阁门';
  const [decreeStr, setDecree] = useState('刑天舞干戚');

  const handleClick = (data) => {
    console.log(data, 'data');
    setDecree(decreeContent);
  };
  return (
    <>
      <h1>practice</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        返回首页
      </button>

      <br></br>
      <SonPr decree={decreeStr} handleClick={handleClick}></SonPr>
    </>
  );
}