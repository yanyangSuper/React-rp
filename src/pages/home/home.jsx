import UserIcon from "../../static/main/user.png";
import "./home.css"
export default function Home() {
  return (
    <div className="home-container">
      <div className="header h-14 bg-[#0B81E1] text-[#FFFFFF] flex justify-between items-center xl:px-80">
        <div className="cursor-pointer">源建通（湖北）科技有限公司欢迎您！</div>
        <div className="header-right flex items-center">
            <div className="login flex items-center px-10 cursor-pointer">
                <img src={UserIcon} className="w-[1.25rem] h-[1.5rem] pr-1" alt="" />
                <span>个人中心</span>
            </div>
            <div className="login cursor-pointer">
                <span>注册</span>
            </div>
        </div>
      </div>
      <div className="banner">
        <div className="bannerCover">

        </div>
        <div className="bannerText"></div>
      </div>
    </div>
  )
}