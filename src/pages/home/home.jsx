/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-18 15:17:28
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-19 17:11:31
 * @FilePath: /my-app/src/pages/home/home.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import UserIcon from "../../static/main/user.png";
import Logo from "../../assets/home/logo.png";
import "./home.css";
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
export default function Home() {
  return (
    <div className="home-container">
      <div className="header h-14 bg-[#0B81E1] text-[#FFFFFF] flex justify-between items-center xl:px-80">
        <div className="cursor-pointer">源建通（湖北）科技有限公司欢迎您！</div>
        <div className="header-right flex items-center">
          <div className="login flex items-center px-10 cursor-pointer">
            <img
              src={UserIcon}
              className="w-[1.25rem] h-[1.5rem] pr-1"
              alt=""
            />
            <span>个人中心</span>
          </div>
          <div className="login cursor-pointer">
            <span>注册</span>
          </div>
        </div>
      </div>
      <div className="banner bg-[url('http://47.113.110.199:8080/bg.jpg')] bg-cover">
        <div className="bannerCover h-56 xl:px-80 bg-white/[.6] relative">
          <div className="search-bar pt-8 flex justify-between items-center">
            <div className="search-left flex items-center">
              <img src={Logo} className="w-56 h-24" alt="" />
              <div className="flex items-center mt-7">
                <div className="line h-14 w-0.5 bg-[#0B81E1] mx-5"></div>
                <div className="logo-text text-[#0B81E1] text-2xl font-normal">
                  <div>南水北调水源区</div>
                  <div>建筑产业供应链平台</div>
                </div>
              </div>
            </div>
            <div className="search-right flex items-center">
              <Input placeholder="请输入项目名称" />
              <Button icon={<SearchOutlined />}>搜索</Button>
            </div>
          </div>
          <div className="menus flex justify-between items-center absolute bottom-0 left-0 xl:px-80 w-full">
            <div className="menu-item first-menu cursor-pointer">首页</div>
            <div className="menu-item cursor-pointer">项目资源</div>
            <div className="menu-item cursor-pointer">劳务服务</div>
            <div className="menu-item cursor-pointer">招标服务</div>
            <div className="menu-item cursor-pointer">建材商城</div>
            <div className="menu-item cursor-pointer">企业认证</div>
          </div>
        </div>
        <div className="bannerTex h-28 w-[53.25rem] bg-[#EBEBEB] absolute bottom-0 left-0 flex justify-around items-center xl:mx-80 mb-24 opacity-70 rounded-[1rem] text-[56px] text-[#0B81E1]">
          <span>联通政企</span>
          <span>融通内外</span>
          <span>畅通供需</span>
        </div>
      </div>
    </div>
  );
}
