import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  ShoppingCart,
  DollarSign,
  Car,
  Building,
  Hotel,
  FileText,
  Calculator,
  ClipboardList,
  BarChart2,
  PieChart,
  UserPlus,
  ActivitySquare,
  Cog,
  HelpCircle,
  Bell
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Content",
      menus: [

        {
          href: "/offers",
          label: "Offer Management",
          active: pathname.includes("/offers"),
          icon: ShoppingCart,
          submenus: [
            {
              href: "/offers/active",
              label: "Active Offers",
              active: pathname === "/offers/active"
            },
            {
              href: "/offers/create",
              label: "Create Offer",
              active: pathname === "/offers/create"
            }
          ]
        },
        {
          href: "/pricing",
          label: "Pricing Management",
          active: pathname.includes("/pricing"),
          icon: DollarSign,
          submenus: [
            {
              href: "/pricing/list",
              label: "Price List",
              active: pathname === "/pricing/list"
            },
            {
              href: "/pricing/update",
              label: "Update Prices",
              active: pathname === "/pricing/update"
            }
          ]
        },
        {
          href: "/drivers",
          label: "Driver Compensation",
          active: pathname.includes("/drivers"),
          icon: Users,
          submenus: [
            {
              href: "/drivers/compensation",
              label: "Compensation Plans",
              active: pathname === "/drivers/compensation"
            },
            {
              href: "/drivers/payments",
              label: "Payments",
              active: pathname === "/drivers/payments"
            }
          ]
        },
        {
          href: "/vehicles",
          label: "Vehicle Management",
          active: pathname.includes("/vehicles"),
          icon: Car,
          submenus: [
            {
              href: "/vehicles/list",
              label: "Vehicle List",
              active: pathname === "/vehicles/list"
            },
            {
              href: "/vehicles/maintenance",
              label: "Maintenance",
              active: pathname === "/vehicles/maintenance"
            }
          ]
        },
        {
          href: "/database",
          label: "Databases",
          active: pathname.includes("/database"),
          icon: Building,
          submenus: [
            {
              href: "/database/cities",
              label: "City Database",
              active: pathname === "/database/cities"
            },
            {
              href: "/database/hotels",
              label: "Hotel Database",
              active: pathname === "/database/hotels"
            }
          ]
        },
        {
          href: "/documents",
          label: "Document Management",
          active: pathname.includes("/documents"),
          icon: FileText,
          submenus: [
            {
              href: "/documents/generate",
              label: "Generate PDF",
              active: pathname === "/documents/generate"
            },
            {
              href: "/documents/templates",
              label: "Templates",
              active: pathname === "/documents/templates"
            }
          ]
        },
        {
          href: "/calculations",
          label: "Calculation System",
          active: pathname.includes("/calculations"),
          icon: Calculator,
          submenus: []
        },
        {
          href: "/orders",
          label: "Order Management",
          active: pathname.includes("/orders"),
          icon: ClipboardList,
          submenus: [
            {
              href: "/orders/active",
              label: "Active Orders",
              active: pathname === "/orders/active"
            },
            {
              href: "/orders/history",
              label: "Order History",
              active: pathname === "/orders/history"
            }
          ]
        },
        {
          href: "/reports",
          label: "Reports",
          active: pathname.includes("/reports"),
          icon: BarChart2,
          submenus: [
            {
              href: "/reports/sales",
              label: "Sales Report",
              active: pathname === "/reports/sales"
            },
            {
              href: "/reports/profit",
              label: "Profit Margin Generator",
              active: pathname === "/reports/profit"
            }
          ]
        },
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/users",
          label: "User Management",
          active: pathname.includes("/users"),
          icon: UserPlus,
          submenus: [
            {
              href: "/users/list",
              label: "User List",
              active: pathname === "/users/list"
            },
            {
              href: "/users/roles",
              label: "Roles and Permissions",
              active: pathname === "/users/roles"
            }
          ]
        },
        {
          href: "/activity",
          label: "Activity Log",
          active: pathname.includes("/activity"),
          icon: ActivitySquare,
          submenus: []
        },
        {
          href: "/settings",
          label: "System Settings",
          active: pathname.includes("/settings"),
          icon: Cog,
          submenus: [
            {
              href: "/settings/general",
              label: "General Settings",
              active: pathname === "/settings/general"
            },
            {
              href: "/settings/notifications",
              label: "Notifications",
              active: pathname === "/settings/notifications"
            }
          ]
        },
        {
          href: "/help",
          label: "Help & Documentation",
          active: pathname.includes("/help"),
          icon: HelpCircle,
          submenus: []
        }
      ]
    }
  ];
}