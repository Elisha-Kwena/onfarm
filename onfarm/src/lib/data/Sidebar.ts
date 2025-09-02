import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export const sideBarMenuItems = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: SpaceDashboardIcon,
        link: "/dashboard"
    },
    {
        id: "products",
        label: "Products Center",
        icon: InventoryIcon,
        submenu: [
            {id: "ecosystem", label: "Whole Ecosystem", link: "/products"},
            {id: "short-term", label: "Short-Term Investment", link: "/products/short-term"},
            {id: "long-term", label: "Long-Term Investment", link: "/products/long-term"},
            {id: "earnings", label: "Claim Earnings", link: "/products/earnings"}
        ]
    },
    {
        id: "funds",
        label: "Transactions",
        icon: AccountBalanceWalletIcon,
        submenu: [
            {id: "withdraw-account", label: "Withdraw Account", link: "/funds/withdrawal-account"},
            {id: "withdraw", label: "Withdraw funds", link: "/funds/withdraw"},
            {id: "deposit", label: "Deposit funds", link: "/funds/deposit"},
            {id: "Discount", label: "Discount", link: "/funds/discount"},
        ]
    },
    {
        id: "distributor",
        label: "Become Distributor",
        icon: AssignmentIndIcon,
        link: "/distributor"
    },
    {
        id: "invite",
        label: "Agent Commission",
        icon: SupervisedUserCircleIcon,
        link: "/agent"
    },
    {
        id: "profile",
        label: "Profile Settings", 
        icon: ManageAccountsIcon,
        submenu: [
            {id: "password", label: "Change Password", link: "/change-password"},
            {id: "logout", label: "Logout", link: "/logout"}
        ]
    },
];