
const AddService = () => {
    return (
        <div className="mt-10">
            <form>
            <div>
            <h3 className="mb-2">Name</h3>
            <input
              name="name"
              type="text"
              className="px-2 py-1 border border-gray-400 outline-none"
              placeholder="Enter you name..." required
            />
          </div>
            </form>
        </div>
    );
};

export default AddService;