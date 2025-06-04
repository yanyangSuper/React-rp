/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-05-29 11:32:59
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-04 15:44:32
 * @FilePath: /my-app/src/view/practice/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import SonPr from "./sonpr";
import { useImmer } from 'use-immer';
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

  /**
   * reducer状态管理
   * 1.reducer是一个纯函数，不能修改state，只能返回新的state
   * 2.reducer返回新的state，state会改变
   * 3.reducer返回新的state，state会改变，state改变，页面重新渲染
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

  // useState
  /**
   * 使用setState(number + 1)
   * state的快照值，每次setState都会重新渲染页面，但是不会立即更新，是异步的
   * 使用setState(number => number + 1)立即更新函数
   * 两种更新方式混合使用会立即更新
   * 更新对象
   * 更新数组
   */
  let [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  // 依赖前一个state,可以合并为一个状态，类似计算属性
  const number3 = number + 3;

  // 多次调用结果只有一次，react会进行批处理
  // setNumber(number + 1);中的number + 1会被缓存，不会立即更新，而是等待下一次setNumber(number + 1)
  const changeNum = () => {
    setNumber(number + 1);
    setNumber(number + 1);
    setNumber(number + 1);
  };

  // 函数式更新, 函数式更新会立即更新
  const changeNum2 = () => {
    setNumber(n => n + 1);
    setNumber(n => n + 1);
    setNumber(n => n + 1);
  };

  // 函数式更新和setState(number + 1)混合使用，会立即更新
  const changeNum3 = () => {
    setNumber(n => n + 1);
    // console.log(number, 'number');
    setNumber(number + 1);
    setNumber(n => n + 1);
  };

  // setState(number + 1)在前函数式更新在后
  const changeNum4 = () => {
    setNumber(number + 1);
    setNumber(n => n + 1);
    setNumber(42);
    setNumber(n => n + 1);
  };

  // 立即获取更新结果，更改两个state，后一个状态依赖前一个state
  const changeNum5 = () => {
    // setNumber(number + 1);
    // 这种更新没用，因为number + 1会被缓存，不会立即更新，此时number值为0
    // setNumber2(number);

    // 必须使用函数更新
    setNumber(n => {
      const newVal = n + 1;
      setNumber2(newVal + 3);
      return newVal;
    });
  };

  /***
   * 更新对象值
   * 直接修改state的值虽然会改变值但是页面是不会变化的
   * 使用对象展开运算符，会改变对象值，页面会变化加setData
   * 使用状态处理函数immer
   * 
   */
  const [person, setPerson] = useState({
    name: "yangyang",
    age: 18,
  });

  const changeName = () => {
    // person.name = "丹尼";
    // console.log(person, 'person');
    // number = 99;
    // console.log(number, 'number');
    setPerson({
      ...person,
      name: "daniel",
    });
  }

  // !immer函数处理对象
 const [girl, setGirl] = useImmer({
  name: "yuanyuan",
  age: 16,
  hobby: ["reading", "swimming"],
});

const changeGirl = () => {
  setGirl(draft => {
    draft.name = "daniel";
    draft.age = 19;
  });
};
  

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
      <p>state快照值：{number}</p>
      <p>setDate(number + 1)式更新</p>
      <button onClick={changeNum}>+3</button>
      <p>立即更新函数更新</p>
      <button onClick={changeNum2}>+3</button>
      <p>setDate和立即更新函数混和</p>
      <button onClick={changeNum3}>+3</button>
      <p>setDate(number + 1)在前</p>
      <button onClick={changeNum4}>+3</button>
      <p>立即获取更新结果，更改两个state，后一个状态依赖前一个state</p>
      <button onClick={changeNum5}>依赖更新</button>
      <p>{number2}</p>
      <p>是不是{number3}</p>
      <div>
        <p>{number}</p>
        <p>{person.name}</p>
        <p>{person.age}</p>
      </div>
      <button onClick={changeName}>改变名称</button>
      <div>
        <p>{girl.name}</p>
        <p>{girl.age}</p>
      </div>
      <button onClick={changeGirl}>改变那女孩</button>
      <SonPr decree={decreeStr} handleClick={handleClick}></SonPr>
    </>
  );
}