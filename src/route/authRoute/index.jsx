/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2025-06-19 09:49:55
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2025-06-19 10:39:42
 * @FilePath: /my-app/src/route/authRoute/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Navigate, useLocation } from 'react-router-dom';

export default function AuthRoute({children, requiredPermissions = []}) {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('token') || '虚假登录';
  const userPermissions = JSON.parse(localStorage.getItem('permissions') || '["admin"]');
  
  /**
   * 方法一：根据传入的权限列表，判断当前用户是否具有这些权限
   */
  
  console.log(requiredPermissions, '当前路由', location);

  /**
   * 方法二：根据当前路由和用户的权限列表，判断当前用户是否具有这些权限

   */
  //   // 获取当前路由信息
//   const currentPath  = location.pathname || '';

  // 检查权限
  const hasRequiredPermissions = requiredPermissions.every(
    permission => userPermissions.includes(permission)
  );
  
  // 未登录
  if (!isAuthenticated) {
    // 保存原始访问路径，登录后可跳回
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  
  // 无权限
  if (requiredPermissions.length && !hasRequiredPermissions) {
    // 返回无权限页面
    return <Navigate to="/unauthorized" replace />;
  }
  
  return children;
}