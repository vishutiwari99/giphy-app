import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchGif } from "../http";
import { setGif, setId, setUrl } from "../store/post/postSlice";

const Gif = () => {
  const { gif } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const findGif = async () => {
      const { data } = await searchGif(search);
      setData(data.data);
    };
    findGif();
  }, [search]);

  const onClickHandler = (id, url) => {
    dispatch(setId(id));
    dispatch(setUrl(url));
    dispatch(setGif(!gif));
  };

  return (
    <React.Fragment>
      <div className="flex absolute flex-col overflow-y-auto bg-gray-400 border-2 p-2">
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter word to search gif"
          className="border-2 p-1"
        />
        <div className="flex flex-wrap m-2 ">
          {data.map((data) => (
            <div
              key={data.id}
              onClick={(e) => {
                onClickHandler(
                  data.id,
                  data && data.images.downsized_large.url
                );
              }}
              className="flex m-2  border-4"
            >
              <img
                className="w-12 h-12"
                src={data && data.images.downsized_large.url}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Gif;
