import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData =[
    {
        title: "Trang Chủ",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Quản Lý Vé",
        icon: <ConfirmationNumberIcon />,
        link: "/ticket"
    },
    {
        title: "Đối Soát Vé",
        icon: <LocalActivityIcon />,
        link: "/checkingticket"
    },
    {
        title: "Cài Đặt",
        icon: <SettingsIcon />,
        link: "/setting"
    },
] 
