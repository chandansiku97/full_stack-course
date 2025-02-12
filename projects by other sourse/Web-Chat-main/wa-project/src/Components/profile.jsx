import { ArrowLeft, CheckIcon, Edit2Icon, Loader2Icon } from 'lucide-react';
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './Theme_context';

function Profile(props) {
    const navigate = useNavigate();
    const { userData, logout, updateName, updateStatus, isUploading, error, updatePhoto } = useAuth();
    const [name, setName] = useState(userData?.name || "");
    const [status, setStatus] = useState(userData?.status || "");
    const { theme } = useTheme();
    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div className={`w-[30vw] min-w-[350px] h-full bg-white dark:bg-gray-900 text-black dark:text-white border border-gray-300 dark:border-gray-700 shadow-lg`}>
            {/* Top Bar */}
            <div className="bg-green-400 dark:bg-green-700 text-white py-4 px-4 text-lg flex items-center gap-6">
                <button onClick={props.onBack}>
                    <ArrowLeft />
                </button>
                <div>Profile</div>
            </div>

            {/* Profile Content */}
            <div className="w-full flex flex-col items-center justify-center py-16 gap-8">
                {/* Profile Picture */}
                <label
                    className={`group relative rounded-full overflow-hidden cursor-pointer ${
                        isUploading ? 'pointer-events-none' : ''
                    }`}
                >
                    <img
                        src={userData.profile_pic || '/default-user.png'}
                        alt="profile picture"
                        className="w-[160px] h-[160px] object-cover"
                    />
                    <input
                        type="file"
                        accept="image/png, image/gif, image/jpeg"
                        className="hidden"
                        onChange={(e) => {
                            updatePhoto(e.target.files?.[0]);
                        }}
                    />
                    {isUploading ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 z-10">
                            <Loader2Icon className="w-6 h-6 text-primary-dense animate-spin z-10" />
                        </div>
                    ) : (
                        <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/30 z-10">
                            <Edit2Icon className="w-6 h-6 text-white" />
                        </div>
                    )}
                </label>

                {/* Error Message */}
                {error && <p className="text-red-600 text-sm">{error}</p>}

                {/* Name Input */}
                <div className="flex flex-col w-full px-6">
                    <label className="text-sm text-gray-700 mb-2">Your Name</label>
                    <div className="flex items-center w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2">
                        <input
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            className="w-full bg-transparent focus:outline-none"
                            placeholder="Enter your name..."
                        />
                        <button onClick={() => updateName(name)}>
                            <CheckIcon className="w-5 h-5 text-green-500" />
                        </button>
                    </div>
                </div>

                {/* Status Input */}
                <div className="flex flex-col w-full px-6">
                    <label className="text-sm text-gray-700 dark:text-gray-300  mb-2">Status</label>
                    <div className="flex items-center w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2">
                        <input
                            value={status}
                            onChange={(e) => {
                                setStatus(e.target.value);
                            }}
                            className="w-full bg-transparent focus:outline-none"
                            placeholder="Update your status..."
                        />
                        <button onClick={() => updateStatus(status)}>
                            <CheckIcon className="w-5 h-5 text-green-500" />
                        </button>
                    </div>
                </div>

                {/* Logout Button */}
                <button
                    className="mt-8 px-4 py-3 rounded bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800  text-white"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Profile;
