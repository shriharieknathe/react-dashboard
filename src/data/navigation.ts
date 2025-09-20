import { 
  LayoutDashboard, 
  ShoppingCart, 
  GraduationCap,
  User,
  Settings,
  Building2,
  FileText,
  Share2,
  Briefcase,
  type LucideIcon 
} from 'lucide-react'

export interface NavItem {
  id: string
  label: string
  path?: string
  icon?: LucideIcon
  children?: NavItem[]
}

export interface NavSection {
  id: string
  label?: string
  isHorizontal?: boolean
  items: NavItem[]
}

export const navigationData: NavSection[] = [
  {
    id: 'shortcuts',
    isHorizontal: true,
    items: [
      { id: 'favorites', label: 'Favorites' },
      { id: 'recently', label: 'Recently' },
    ]
  },
  {
    id: 'main',
    items: [
      { id: 'overview', label: 'Overview', path: '/' },
      { id: 'projects', label: 'Projects', path: '/projects' },
    ]
  },
  {
    id: 'dashboards',
    label: 'Dashboards',
    items: [
      { 
        id: 'default', 
        label: 'Default', 
        icon: LayoutDashboard,
        children: [
          { id: 'default-overview', label: 'Overview', path: '/' },
          { id: 'default-analytics', label: 'Analytics', path: '/analytics' },
          { id: 'default-reports', label: 'Reports', path: '/reports' },
        ]
      },
      { 
        id: 'ecommerce', 
        label: 'eCommerce', 
        icon: ShoppingCart,
        children: [
          { id: 'ecommerce-products', label: 'Products', path: '/ecommerce/products' },
          { id: 'ecommerce-orders', label: 'Orders', path: '/ecommerce/orders' },
          { id: 'ecommerce-customers', label: 'Customers', path: '/ecommerce/customers' },
          { id: 'ecommerce-inventory', label: 'Inventory', path: '/ecommerce/inventory' },
        ]
      },
      { 
        id: 'projects-dash', 
        label: 'Projects', 
        icon: Briefcase,
        children: [
          { id: 'projects-active', label: 'Active Projects', path: '/projects/active' },
          { id: 'projects-completed', label: 'Completed', path: '/projects/completed' },
          { id: 'projects-team', label: 'Team Members', path: '/projects/team' },
          { id: 'projects-timeline', label: 'Timeline', path: '/projects/timeline' },
        ]
      },
      { 
        id: 'courses', 
        label: 'Online Courses', 
        icon: GraduationCap,
        children: [
          { id: 'courses-catalog', label: 'Course Catalog', path: '/courses/catalog' },
          { id: 'courses-enrolled', label: 'My Courses', path: '/courses/enrolled' },
          { id: 'courses-progress', label: 'Progress', path: '/courses/progress' },
          { id: 'courses-certificates', label: 'Certificates', path: '/courses/certificates' },
        ]
      },
    ]
  },
  {
    id: 'pages',
    label: 'Pages',
    items: [
      { 
        id: 'user-profile', 
        label: 'User Profile', 
        icon: User,
        children: [
          { id: 'profile-overview', label: 'Overview', path: '/profile' },
          { id: 'profile-projects', label: 'Projects', path: '/profile/projects' },
          { id: 'campaigns', label: 'Campaigns', path: '/profile/campaigns' },
          { id: 'documents', label: 'Documents', path: '/profile/documents' },
          { id: 'followers', label: 'Followers', path: '/profile/followers' },
        ]
      },
      { 
        id: 'account', 
        label: 'Account', 
        icon: Settings,
        children: [
          { id: 'account-settings', label: 'Settings', path: '/account/settings' },
          { id: 'account-billing', label: 'Billing', path: '/account/billing' },
          { id: 'account-security', label: 'Security', path: '/account/security' },
        ]
      },
      { 
        id: 'corporate', 
        label: 'Corporate', 
        icon: Building2,
        children: [
          { id: 'corporate-about', label: 'About', path: '/corporate/about' },
          { id: 'corporate-team', label: 'Team', path: '/corporate/team' },
          { id: 'corporate-careers', label: 'Careers', path: '/corporate/careers' },
        ]
      },
      { 
        id: 'blog', 
        label: 'Blog', 
        icon: FileText,
        children: [
          { id: 'blog-posts', label: 'Posts', path: '/blog/posts' },
          { id: 'blog-categories', label: 'Categories', path: '/blog/categories' },
          { id: 'blog-tags', label: 'Tags', path: '/blog/tags' },
        ]
      },
      { 
        id: 'social', 
        label: 'Social', 
        icon: Share2,
        children: [
          { id: 'social-feed', label: 'Feed', path: '/social/feed' },
          { id: 'social-messages', label: 'Messages', path: '/social/messages' },
          { id: 'social-notifications', label: 'Notifications', path: '/social/notifications' },
        ]
      },
    ]
  }
]
