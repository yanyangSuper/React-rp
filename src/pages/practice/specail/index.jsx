/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-06 10:07:18
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-06 10:52:06
 * @FilePath: /my-app/src/view/practice/specail/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Heading from "./Heading";
import Section from "./Section";

// 嵌套组件插槽，实现自增
export default function Special() {
  return (
    <Section>
      <Heading>主标题</Heading>
      <Section>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Section>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Section>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
