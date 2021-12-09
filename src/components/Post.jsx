const Post = ({ id, url, desc }) => {
  return (
    <div
      key={id}
      className="bg-white w-full rounded-md shadow-md h-auto py-3 px-3 my-5"
    >
      <div className="w-full h-16 flex items-center  justify-between">
        <div className="flex">
          <img
            className="rounded-full w-10 h-10 mr-3"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="gif"
          />
          <div>
            <h3 className="text-md font-semibold">Vaibhav Tiwari</h3>
            <p className="text-xs text-gray-500">30 min ago</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p>{desc}</p>
        <img className="rounded-md" src={url} alt="" />
      </div>
    </div>
  );
};

export default Post;
