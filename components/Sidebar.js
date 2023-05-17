import {HomeIcon, 
        HashtagIcon,
        InboxIcon,
        BookmarkIcon,
        ClipboardIcon,
        BellIcon,
        UserIcon,
        DotsCircleHorizontalIcon
    } from "@heroicons/react/outline";
import Image from "next/image";

export default function Sidebar() {
    return (
        <div className="h-full hidden sm:flex flex-col fixed xl:ml-24">
            <nav className="h-full relative xl:space-y-1.5">
                <div className="flex justify-center items-center xl:justify-start py-3 xl:p-3">
                    <Image src={"/assets/twitter-logo.png"} width={34} height={34}/>
                </div>
                <SidebarLink text={"Home"} Icon={HomeIcon} />
                <SidebarLink text={"Explore"} Icon={HashtagIcon} />
                <SidebarLink text={"Notification"} Icon={BellIcon} />
                <SidebarLink text={"Messages"} Icon={InboxIcon} />
                <SidebarLink text={"Bookmarks"} Icon={BookmarkIcon} />
                <SidebarLink text={"Profile"} Icon={UserIcon} />
                <SidebarLink text={"More"} Icon={DotsCircleHorizontalIcon} />
                <button className="hidden xl:inline bg-[#1d9bf0]
                    rounded-full h-[52px] w-[200px] text-lg font-bold
                    mt-2">
                    Tweet
                </button>
                <div className="absolute bottom-0">User</div>
            </nav>
        </div>
    )
}

function SidebarLink({text, Icon}) {
    return (
        <li className="hoverAnimation flex mb-3 xl:justify-start 
        justify-center items-center text-xl space-x-3">
            <Icon className="h-7"/>
            <span className="hidden xl:inline">{text}</span>
        </li>
    )
}