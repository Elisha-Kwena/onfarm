import React, { useState } from 'react';

export default function ChangePasswordForm() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reEnterNewPassword, setReEnterNewPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would add your logic to handle password change
        console.log('Old Password:', oldPassword);
        console.log('New Password:', newPassword);
        console.log('Re-entered New Password:', reEnterNewPassword);

        // Add validation logic here
        if (newPassword !== reEnterNewPassword) {
            alert("New passwords do not match!");
            return;
        }

        // Add API call to change password here
        alert("Password change attempted!");
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mx-auto w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Change Password</h3>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Old Password</label>
                    <input
                        type="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 bg-gray-100"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">New Password</label>
                    <input
                        type="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 bg-gray-100"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Re-enter New Password</label>
                    <input
                        type="password"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 bg-gray-100"
                        value={reEnterNewPassword}
                        onChange={(e) => setReEnterNewPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 bg-gradient-to-r from-teal-400 to-teal-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:from-teal-500 hover:to-teal-700 transition-colors duration-200"
                >
                    Confirm Change
                </button>
            </form>
        </div>
    );
}
