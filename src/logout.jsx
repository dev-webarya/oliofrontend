import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user')) || {};

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
            >
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                        {user?.firstName?.[0]?.toUpperCase() || 'U'}
                    </span>
                </div>
                <span className="hidden md:inline-block text-sm font-medium">
                    {user?.firstName || 'User'}
                </span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 border-b">
                        <p className="text-sm font-medium text-gray-900">{user?.firstName} {user?.lastName}</p>
                        <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>

                    <a
                        href="#profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        <i className="fas fa-user mr-2"></i> Profile
                    </a>

                    <a
                        href="#settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        <i className="fas fa-cog mr-2"></i> Settings
                    </a>

                    <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                        <i className="fas fa-sign-out-alt mr-2"></i> Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Logout;