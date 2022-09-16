import React from 'react'
import PieChartIcon from '@mui/icons-material/PieChart';
import LocalActivityRoundedIcon from '@mui/icons-material/LocalActivityRounded';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import FeedRoundedIcon from '@mui/icons-material/FeedRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import CardMembershipRoundedIcon from '@mui/icons-material/CardMembershipRounded';

export const SidebarData=[
    {
        title:"Overview",
        icon:<PieChartIcon/>,
        link:"/Overview"
    },
    {
        title:"Tickets",
        icon:<LocalActivityRoundedIcon/>,
        link:"/Tickets"
    },
    {
        title:"Ideas",
        icon:<EmojiObjectsRoundedIcon/>,
        link:"/Overview"
    },
    {
        title:"Contacts",
        icon:<RecentActorsRoundedIcon/>,
        link:"/Overview"
    },
    {
        title:"Agents",
        icon:<AssignmentIndRoundedIcon/>,
        link:"/Overview"
    },
    {
        title:"Articles",
        icon:<FeedRoundedIcon/>,
        link:"/Overview"
    },
    {
        title:"Settings",
        icon:<SettingsRoundedIcon/>,
        link:"/Overview"
    },
    {
        title:"Subscription",
        icon:<CardMembershipRoundedIcon/>,
        link:"/Overview"
    },
]
