/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-19 09:57:07
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-19 10:10:24
 * @FilePath: /my-app/src/route/unAuthorized/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import NoAuthSvg from "../../static/main/noAuth.svg";
export default function UnAuthorized() {
    return (
        <div className="flex flex-col text-center justify-center items-center">
            <img className="w-[30rem] h-[30rem]" src={NoAuthSvg} alt="" />
            <div className="text-[#333] text-[2rem]">
                <p>抱歉，您没有权限访问该页面</p>
                <p>请联系管理员开通权限！</p>
                <p className="text-[#6195DE]"><a href="/">返回首页</a></p>
            </div>
        </div>
    )
}