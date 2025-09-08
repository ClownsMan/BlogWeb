// 处理2025-09-04T03:36:37.000Z时间为 YYYY-MM-DD HH:mm:ss 类型
export const convertISOToDateTime = (isoString: string, type: string = 'all') => {
  // 创建一个 Date 对象
  const date = new Date(isoString);

  // 获取年、月、日
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份是从 0 开始的
  const day = String(date.getDate()).padStart(2, '0');

  // 获取小时、分钟、秒
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // 拼接成目标格式
  return `${year}-${month}-${day} ${type === 'all' ? `${hours}:${minutes}:${seconds}` : ''}`;
}