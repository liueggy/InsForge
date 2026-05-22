export const zhCNTranslations: Record<string, string> = {
  'Dashboard': '仪表盘',
  'Authentication': '身份认证',
  'Users': '用户',
  'Auth Methods': '认证方式',
  'Email': '邮件',
  'Database': '数据库',
  'Storage': '存储',
  'SQL Editor': 'SQL 编辑器',
  'Functions': '函数',
  'Realtime': '实时通信',
  'Model Gateway': '模型网关',
  'Compute': '计算',
  'Payments': '支付',
  'Logs': '日志',
  'Settings': '设置',
  'Deployments': '部署',
  'Analytics': '分析',
  'Install': '安装',
  'Doc': '文档',
  'Connect': '连接',
  'Admin': '管理员',
  'Administrator': '管理员',
  'Sign Out': '退出登录',
  'Sign In': '登录',
  'Sign in': '登录',
  'Signing in...': '登录中...',
  'Insforge Admin': 'Insforge 管理员',
  'Sign in to access your dashboard': '登录以进入管理面板',
  'Enter your admin credentials to continue': '请输入管理员账号密码继续',
  'Password': '密码',
  'Enter your password': '请输入密码',
  'Use the credentials configured in your .env file': '使用 .env 中配置的账号密码',
  'Self-hosted Backend as a Service': '自托管后端平台',
  'Agent': '智能体',
  'Connected': '已连接',
  'Connect Project': '连接项目',
  'Project Settings': '项目设置',
  'Project Information': '项目信息',
  'Project Name': '项目名称',
  'Project URL': '项目 URL',
  'API Key': 'API Key',
  'Version': '版本',
  'Delete Project': '删除项目',
  'Cancel': '取消',
  'Loading...': '加载中...',
  'Loading…': '加载中…',
  'No data': '暂无数据',
  'Unknown': '未知',
  'Current': '当前',
  'Upgrade': '升级',
  'Upgrading...': '升级中...',
  'Rotate': '轮换',
  'Rotate Key': '轮换密钥',
  'Rotate API Key': '轮换 API Key',
  'Rotating...': '轮换中...',
  'Apply Changes': '应用更改',
  'Applying...': '应用中...',
  'Compute & Disk': '计算与磁盘',
  'Loading compute options...': '正在加载计算配置...',
  'Observability': '可观测性',
  'CPU Usage': 'CPU 使用率',
  'Memory Usage': '内存使用率',
  'Network In': '网络入站',
  'Network Out': '网络出站',
  'Disk Usage': '磁盘使用率',
  'AVG': '平均',
  'MAX': '最大',
  'LATEST': '最新',
  'Create': '创建',
  'Edit': '编辑',
  'Delete': '删除',
  'Save': '保存',
  'Update': '更新',
  'Confirm': '确认',
  'Close': '关闭',
  'Search': '搜索',
  'Refresh': '刷新',
  'Copy': '复制',
  'Copied!': '已复制！',
  'Open': '打开',
  'Name': '名称',
  'Type': '类型',
  'Status': '状态',
  'Actions': '操作',
  'Created At': '创建时间',
  'Updated At': '更新时间',
  'Description': '描述',
  'General': '通用',
  'Overview': '概览',
  'Configuration': '配置',
  'Permissions': '权限',
  'Channels': '频道',
  'Messages': '消息',
  'Customers': '客户',
  'Subscriptions': '订阅',
  'Payment History': '支付历史',
  'Catalog': '目录',
};

const sortedTranslations = Object.entries(zhCNTranslations).sort((a, b) => b[0].length - a[0].length);

function translateTextValue(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return value;

  const exact = zhCNTranslations[trimmed];
  if (exact) {
    return value.replace(trimmed, exact);
  }

  let translated = trimmed;
  for (const [source, target] of sortedTranslations) {
    const escaped = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    translated = translated.replace(new RegExp(`\\b${escaped}\\b`, 'g'), target);
  }

  return translated === trimmed ? value : value.replace(trimmed, translated);
}

function translateNode(node: Node): void {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = translateTextValue(node.textContent ?? '');
    return;
  }

  if (!(node instanceof HTMLElement)) return;

  for (const attr of ['placeholder', 'title', 'aria-label']) {
    const value = node.getAttribute(attr);
    if (value) node.setAttribute(attr, translateTextValue(value));
  }

  for (const child of Array.from(node.childNodes)) {
    translateNode(child);
  }
}

export function installZhCNRuntimeTranslator(): void {
  if (typeof window === 'undefined') return;

  const run = () => translateNode(document.body);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of Array.from(mutation.addedNodes)) {
        translateNode(node);
      }

      if (mutation.type === 'characterData') {
        translateNode(mutation.target);
      }
    }
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}
