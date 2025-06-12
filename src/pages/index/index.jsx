/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-12 10:47:22
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-12 15:29:13
 * @FilePath: /my-app/src/pages/index/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import buyerlogo from "../../static/buyerlogo.png";
import { Flex, Input, Tabs, Button } from "antd";
import {
  UserOutlined,
  ShoppingOutlined
} from '@ant-design/icons';
import { useState } from "react";
import './index.css'
export default function Index() {
  const items = [
    {
      key: '1',
      label: 'VENDORS',
      children: null,
    },
    {
      key: '2',
      label: 'NEW IN',
      children: null,
    },
    {
      key: '3',
      label: 'BEST OF BEST',
      children: null,
    },
    {
      key: '4',
      label: 'PROMOTION',
      children: null,
    },
    {
      key: '5',
      label: 'PREMUM',
      children: null,
    },
    {
      key: '6',
      label: 'LIVE',
      children: null,
    },
  ];
  const size = 'large';
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <div className="header w-full h-40 bg-gray-300">
        <Flex justify="space-around" align="center">
          <div className="header-left">
            <img className="w-30 h-30" src={buyerlogo} alt="" />
          </div>
          <div className="header-center mt-10">
            <div className="search-wrap text-[#2F639B]">
              <Input.Search placeholder="Search anthing" />
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
          </div>
          <div className="header-right flex flex-col items-center">
            <div className="flex items-center mb-3">
               <div className="mr-5"> 
                <UserOutlined />
                <span className="ml-2">Account</span>
               </div>
               <div>
                <ShoppingOutlined />
                <span className="ml-2">Shoping</span>
                </div>
            </div>
            {/* <Button type="primary" shape="round" color="#1C3B5E" size={size}>
            DROPSHIPPNG
          </Button> */}
          <div className="bg-[#1C3B5E] text-white text-center text-sm p-2 px-8 rounded-3xl">
            DROPSHIPPNG
          </div>
          </div>
        </Flex>
      </div>
      <div className="content"></div>
      <div className="footer"></div>
    </>
  );
}
