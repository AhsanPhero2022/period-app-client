import Calendar from "./Calendar";

export const NoteModul = () => {
  return (
    <div >
      <button
        className="btn text-white btn-success w-full"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Add a note
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="my-2">
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered input-success  max-w-xs"
            />
            <Calendar></Calendar>
          </div>
          <textarea
            className="textarea textarea-success w-full"
            placeholder="Add Your Daily Note"
          ></textarea>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
