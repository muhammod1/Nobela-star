import React, { useState } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { preloaded } from "../../Data/Home";

const ImgGen = () => {
  const [search, setSearch] = useState("nature");
  const [perPage] = useState(30);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleChange(event) {
    const search = event.target.value;
    setSearch(search);
  }
  // function noOfPics(event) {
  //   const perPage = event.target.value;
  //   setPerPage(perPage);
  // }

  function handleSubmit(event) {
    event.preventDefault();
    const url =
      "https://api.pexels.com/v1/search?query=" +
      search +
      "&per_page=" +
      perPage;
    const access_token =
      //  process.env.IMAGE_ACCESS_TOKEN
      "D9sbG8MmrhaBmSEofBqhPqhntBZL0ai6neOokjnSpD6K0cemU54LFF7P";
    axios
      .get(url, {
        headers: {
          Authorization: `${access_token}`,
        },
      })
      .then((data) => {
        console.log(data);
        setResult(data.data.photos);
        console.log(data.data.photos);
        setLoading(false);
      });
  }

  const breakpoints = {
    default: 3,
    1100: 3,
    700: 2,
  };

  return (
    <div className="w-full">
      <div className="relative ">
        <div className="relative h-full w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="hidden tablet:block min-w-full min-h-full w-auto h-full"
            id="myVideo"
          >
            <source
              src="https://www.videezy.com/assets/videezy/masthead-video.mp4"
              type="video/mp4"
            />
            <source
              src="https://www.videezy.com/assets/videezy/masthead-video.webm"
              type="video/webm"
            />
            Your browser does not support HTML5 video.
          </video>
          <div className="w-[250vw]">
            <video
              autoPlay
              muted
              loop
              className="tablet:hidden min-w-full min-h-full w-auto h-full"
              id="myVideo"
            >
              <source
                src="https://www.videezy.com/assets/videezy/masthead-video.mp4"
                type="video/mp4"
              />
              <source
                src="https://www.videezy.com/assets/videezy/masthead-video.webm"
                type="video/webm"
              />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
        <div className="absolute top-0 w-full bg-linear-bg z-50">
          <NavBar text="Use other AI" link="/speechRec" />
        </div>
        <div className=" absolute top-0 h-full w-full bg-linear-bg" />
        <div className=" absolute top-0 h-full w-full flex  ">
          <div className="relative mx-auto  flex top-[35%] mobile:top-[30%] w-[92%] max-w-[700px]">
            <form onSubmit={handleSubmit} className="mx-auto w-full">
              <div className="flex flex-col">
                <p className="text-[#fff] mx-auto mb-4 text-[20px] mobile:text-[25px] table:text-[28px] font-[700]">
                  Free HD Stock Footage !
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <div className="mobile:w-[70%]">
                    <input
                      onChange={handleChange}
                      className="py-1 px-2 mobile:py-1.5 w-full mobile:px-3 border-2 border-[#fff] rounded-md outline-none bg-[#fff]"
                      placeholder="e.g: food, city, anything..."
                      type="text"
                    />
                  </div>
                  <div className="w-fit mobile:w-[25%]">
                    <input
                      type="submit"
                      value="Search"
                      className=" hover:bg-[#fff] w-full hover:text-[#417ac0] font-semibold py-1 px-4 mobile:py-1.5 mobile:px-5 bg-[#417ac0] transition border-2 hover:border-[#417ac0] text-[#fff] rounded-md cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-10 py-8 px-3 tablet:px-4 max-w-[1200px] mx-auto">
        <p className="text-[22px] font-semibold mb-8 ">Free HD photos</p>
        {loading ? (
          <>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {preloaded.map((search) => (
              <div
                key={search.id}
                className="rounded-[20px] overflow-hidden"
              >
                <img variant="top" src={search.img} alt="img" />
              </div>
            ))}
          </Masonry>
          </>
        ) : (
          <>
          <p className="text-[24px] tablet:text-[30px] text-center mb-8 font-bold capitalize italic">{search}</p>
            <Masonry
              breakpointCols={breakpoints}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {result.map((search) => (
                <div
                  key={search.id}
                  className="rounded-[20px] overflow-hidden"
                >
                  <img
                    variant="top"
                    src={search.src.large2x
                    }
                    alt={search.photographer}
                  />
                </div>
              ))}
            </Masonry>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ImgGen;
