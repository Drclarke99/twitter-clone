import {HomeIcon, 
        HashtagIcon,
        InboxIcon,
        BookmarkIcon,
        ClipboardIcon,
        BellIcon,
        UserIcon,
        DotsCircleHorizontalIcon,
        DotsHorizontalIcon
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
                <div className="
                bottom-0
                hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer
                absolute flex justify-center items-center xl:p-3 space-x-3">
                    <img className="2-10 h-10 rounded-full"
                    src="/assets/pfp.png" />
                    <div className="hidden xl:inline">
                        <h1 className="font-bold whitespace-nowrap">name</h1>
                        <h1 className="text-gray-500">@username</h1>
                    </div>
                    <DotsHorizontalIcon className="h-5 hidden xl:inline"/>
                </div>
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