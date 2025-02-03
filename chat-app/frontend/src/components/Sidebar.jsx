import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { Users, MessageSquare } from "lucide-react";

import SidebarSkeleton from "./skeletons/SidebarSkeleton";

const Sidebar = () => {
    const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
    const { onlineUsers } = useAuthStore();
    const [showOnlineOnly, setShowOnlineOnly] = useState(false);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const filteredUsers = showOnlineOnly
        ? users.filter((user) => onlineUsers.includes(user._id))
        : users;

    if (isUsersLoading) return <SidebarSkeleton />;

    // Channel général
    const generalChannel = {
        _id: "general",
        fullName: "Canal général",
        profilePic: "/avatar.png"
    };

    return (
        <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
            <div className="border-b border-base-300 w-full p-5">
                <div className="flex items-center gap-2">
                    <Users className="size-6" />
                    <span className="font-medium hidden lg:block">Contacts</span>
                </div>
                {/* Filtre en ligne */}
                <div className="mt-3 hidden lg:flex items-center gap-2">
                    <label className="cursor-pointer flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={showOnlineOnly}
                            onChange={(e) => setShowOnlineOnly(e.target.checked)}
                            className="checkbox checkbox-sm"
                        />
                        <span className="text-sm">Utilisateurs en ligne</span>
                    </label>
                    <span className="text-xs text-zinc-500">({onlineUsers.length - 1} en ligne)</span>
                </div>
            </div>

            <div className="overflow-y-auto w-full py-3">
                {/* Bouton pour le canal général */}
                <button
                    onClick={() => setSelectedUser(generalChannel)}
                    className={`
                        w-full p-3 flex items-center gap-3
                        hover:bg-base-300 transition-colors
                        ${selectedUser?._id === generalChannel._id ? "bg-base-300 ring-1 ring-base-300" : ""}
                    `}
                >
                    <div className="relative mx-auto lg:mx-0">
                        <MessageSquare className="w-12 h-12 text-gray-500" />
                    </div>

                    {/* Info du canal général */}
                    <div className="hidden lg:block text-left min-w-0">
                        <div className="font-medium truncate">{generalChannel.fullName}</div>
                        <div className="text-sm text-zinc-400">Discussion globale</div>
                    </div>
                </button>

                {/* Liste des utilisateurs */}
                {filteredUsers.map((user) => (
                    <button
                        key={user._id}
                        onClick={() => setSelectedUser(user)}
                        className={`
                            w-full p-3 flex items-center gap-3
                            hover:bg-base-300 transition-colors
                            ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}
                        `}
                    >
                        <div className="relative mx-auto lg:mx-0">
                            <img
                                src={user.profilePic || "/avatar.png"}
                                alt={user.name}
                                className="w-12 h-12 max-w-12 max-h-12 object-cover rounded-full"
                            />
                            {onlineUsers.includes(user._id) && (
                                <span
                                    className="absolute bottom-0 right-0 size-3 bg-green-500 
                                    rounded-full ring-2 ring-zinc-900"
                                />
                            )}
                        </div>

                        {/* User info */}
                        <div className="hidden lg:block text-left min-w-0">
                            <div className="font-medium truncate">{user.fullName}</div>
                            <div className="text-sm text-zinc-400">
                                {onlineUsers.includes(user._id) ? "En ligne" : "Hors ligne"}
                            </div>
                        </div>
                    </button>
                ))}

                {filteredUsers.length === 0 && (
                    <div className="text-center text-zinc-500 py-4">Personne en ligne.</div>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
