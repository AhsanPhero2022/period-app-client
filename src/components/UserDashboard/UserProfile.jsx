import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { NoteModul } from './UserProfileFeauturs/NoteModul';

const UserProfile = () => {

  const backgroundImageUrl = 'https://i.postimg.cc/Fst52HjH/butter-flye.png';

  
  return (
    <div
    className="w-full h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="grid  lg:grid-cols-12 gap-4 p-14 ">
        <div className="w-full py-4 relative lg:col-span-4 mx-auto rounded-lg bg-white px-12">
          <div className="absolute top-3 left-4">
            <PencilSquareIcon className="w-6 h-6 " />
          </div>
          <div>
            <img
              className="w-40 h-40 mx-auto rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBiJlL5EfxtQHZg4JQMuwZXKI5kIPT94hsqXnTiUNsQ&s"
              alt=""
            />
            <h1 className="text-3xl my-8 text-center">Abir Alamin</h1>
            <NoteModul/>
          </div>
        </div>
        <div className=" lg:col-span-8 bg-white rounded-lg">
          <div className="p-4 space-y-3">
            <h1 className="font-bold text-3xl">Generale Information</h1>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <tbody>
                  <tr>
                    <td>Roll</td>
                    <td>: 125</td>
                  </tr>
                  <tr>
                    <td>Age</td>
                    <td>: 20</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>: Male</td>
                  </tr>
                  <tr>
                    <td>Blood</td>
                    <td>: A+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default UserProfile;
