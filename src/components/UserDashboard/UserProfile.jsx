/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Calendar from "../../calendar/Calendar";


function UserProfile() {

 
  return (
    <div className="grid my-8 gap-4 lg:grid-cols-3">
      <div className=" w-[330px]  bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 rounded-lg ms-2">
        <div className=" ">
          <Avatar
            className="mx-auto mt-4"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="User Avatar"
          />
          <h2 className="text-center text-2xl font-semibold">Dr. Navila</h2>
          <p className="text-center">Javeri</p>
          <div className="flex justify-between px-4">
            <div className="">
              <p>DOB</p>
              <p>08/5/2023</p>
              <div>
                <p>Age</p>
                <p>22 y. 4m</p>
              </div>
            </div>

            <div>
              <p>height</p>
              <p>168 inch</p>
              <div>
                <p>Wight</p>
                <p>5'9</p>
              </div>
            </div>
          </div>
        </div>
        {/* Profile button */}
        <div className="mt-20 mx-6">
          <button className="btn bg-gradient-to-l from-slate-500 to-slate-200 text-slate-600 border border-slate-400 w-full px-12">
            send message
          </button>
        </div>
      </div>
      <div className="ms-24 ps-5 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 rounded-lg">
        <div className="mt-3">
          <h2>Home Address</h2>
          <p>123 Broadway </p>
        </div>
        <div className="mt-3">
          <h2>Home Address</h2>
          <p>123 Broadway </p>
        </div>
        <div className="mt-3">
          <h2>Home Address</h2>
          <p>123 Broadway </p>
        </div>
        <div className="mt-3">
          <h2>Home Address</h2>
          <p>123 Broadway </p>
        </div>
        <div className="mt-3">
          <h2>Home Address</h2>
          <p>123 Broadway </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="">
          <div className="w-60 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
            <div className="col-span-2 text-lg font-bold capitalize rounded-md">
              Hello world
            </div>
            <div className="col-span-2 rounded-md">
              Using Lorem ipsum to focus attention on graphic elements in a
              webpage design
            </div>
          </div>
        </div>
        <div className="">
          <div className=" ">
            <div className="w-60 bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
              <div className="col-span-2 text-lg font-bold capitalize rounded-md">
                Hello world
              </div>
              <div className="col-span-2 rounded-md">
                Using Lorem ipsum to focus attention on graphic elements in a
                webpage design
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* text area */}
      
     {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-success" onClick={()=>document.getElementById('my_modal_5').showModal()}>Add Note</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="my-2">
    <input type="text" placeholder="Title" className="input input-bordered input-success  max-w-xs" />
     <Calendar></Calendar>
    </div>
    <textarea className="textarea textarea-success w-full" placeholder="Add Your Daily Note"></textarea>
    <div className="modal-action">
      <form method="dialog">
      
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
      {/* Text are end*/}
    </div>
  );
}

export default UserProfile;
