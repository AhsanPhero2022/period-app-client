/* eslint-disable no-unused-vars */
import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import EditIcon from '@material-ui/icons/Edit';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ListIcon from '@material-ui/icons/List';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';


function UserProfile() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
    <div className="bg-white p-8 rounded-md shadow-md w-96">
      <div className="flex justify-center mb-6">
        <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="User Avatar" />
      </div>
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">John Doe</h2>
        <p className="text-gray-500">Web Developer</p>
      </div>
      <div className="flex justify-between mb-6">
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md">
          <EditIcon className="mr-2" />
          Edit Profile
        </button>
        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md">
          <CalendarTodayIcon className="mr-2" />
          View Calendar
        </button>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Daily Activities</h3>
        <ul className="text-gray-600">
          <li className="flex items-center mb-2">
            <ListIcon className="mr-2" />
            Meeting with the team
          </li>
          <li className="flex items-center mb-2">
            <LocalActivityIcon className="mr-2" />
            Code review at 2:00 PM
          </li>
          <li className="flex items-center">
            <LocalActivityIcon className="mr-2" />
            Daily standup at 10:00 AM
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default UserProfile