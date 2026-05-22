import {
  type LucideIcon,
  Home,
  Database,
  Lock,
  HardDrive,
  Code2,
  Radio,
  Server,
  Sparkles,
  ChartLine,
  BarChart3,
  Settings,
  Rocket,
  SquarePen,
  Download,
  BookOpen,
  CreditCard,
} from 'lucide-react';

export interface DashboardSecondaryMenuItem {
  id: string;
  label: string;
  href: string;
}

export interface DashboardPrimaryMenuItem {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  onClick?: () => void;
  external?: boolean;
  sectionEnd?: boolean;
  secondaryMenu?: DashboardSecondaryMenuItem[];
}

export const dashboardStaticMenuItems: DashboardPrimaryMenuItem[] = [
  {
    id: 'dashboard',
    label: '仪表盘',
    href: '/dashboard',
    icon: Home,
  },
  {
    id: 'authentication',
    label: '身份认证',
    href: '/dashboard/authentication',
    icon: Lock,
    secondaryMenu: [
      {
        id: 'users-list',
        label: '用户',
        href: '/dashboard/authentication/users',
      },
      {
        id: 'auth-methods',
        label: '认证方式',
        href: '/dashboard/authentication/auth-methods',
      },
      {
        id: 'email',
        label: '邮件',
        href: '/dashboard/authentication/email',
      },
    ],
  },
  {
    id: 'database',
    label: '数据库',
    href: '/dashboard/database',
    icon: Database,
  },
  {
    id: 'storage',
    label: '存储',
    href: '/dashboard/storage',
    icon: HardDrive,
    sectionEnd: true,
  },
  {
    id: 'sql-editor',
    label: 'SQL 编辑器',
    href: '/dashboard/sql-editor',
    icon: SquarePen,
  },
  {
    id: 'functions',
    label: '函数',
    href: '/dashboard/functions',
    icon: Code2,
  },
  {
    id: 'realtime',
    label: '实时通信',
    href: '/dashboard/realtime',
    icon: Radio,
  },
  {
    id: 'ai',
    label: '模型网关',
    href: '/dashboard/ai/overview',
    icon: Sparkles,
  },
  {
    id: 'compute',
    label: '计算',
    href: '/dashboard/compute',
    icon: Server,
  },
  {
    id: 'payments',
    label: '支付',
    href: '/dashboard/payments',
    icon: CreditCard,
    sectionEnd: true,
  },
  {
    id: 'logs',
    label: '日志',
    href: '/dashboard/logs',
    icon: ChartLine,
  },
];

export const dashboardSettingsMenuItem: DashboardPrimaryMenuItem = {
  id: 'settings',
  label: '设置',
  href: '',
  icon: Settings,
};

export const dashboardDeploymentsMenuItem: DashboardPrimaryMenuItem = {
  id: 'deployments',
  label: '部署',
  href: '/dashboard/deployments',
  icon: Rocket,
};

export const dashboardAnalyticsMenuItem: DashboardPrimaryMenuItem = {
  id: 'analytics',
  label: '分析',
  href: '/dashboard/analytics',
  icon: BarChart3,
};

// d_test + cloud-hosting only: navigates to the Install InsForge route.
export const dashboardDTestInstallMenuItem: DashboardPrimaryMenuItem = {
  id: 'dtest-install',
  label: '安装',
  href: '/dashboard/install',
  icon: Download,
};

// d_test + cloud-hosting only: opens the docs site in a new tab.
export const dashboardDTestDocMenuItem: DashboardPrimaryMenuItem = {
  id: 'dtest-doc',
  label: '文档',
  href: 'https://docs.insforge.dev/introduction',
  icon: BookOpen,
  external: true,
};
