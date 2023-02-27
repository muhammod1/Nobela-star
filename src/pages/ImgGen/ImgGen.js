import React, { useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const ImgGen = () => {
  const [search, setSearch] = useState("nature");
  const [perPage, setPerPage] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  function handleChange(event) {
    const search = event.target.value;
    setSearch(search);
  }
  function noOfPics(event) {
    const perPage = event.target.value;
    setPerPage(perPage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url =
      "https://api.pexels.com/v1/search?query=" +
      search +
      "&per_page=" +
      perPage;
    const access_token = process.env.IMAGE_ACCESS_TOKEN
      // "D9sbG8MmrhaBmSEofBqhPqhntBZL0ai6neOokjnSpD6K0cemU54LFF7P";
    axios
      .get(url, {
        headers: {
          Authorization: `${access_token}`,
        },
      })
      .then((data) => {
        console.log(data);
        setResult(data.data.photos);
        setLoading(false);
      });
  }

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
        <div className="absolute top-0 w-full bg-transparent z-50">
          <NavBar />
        </div>
        <div className=" absolute top-0 h-full w-full bg-linear-bg" />
        <div className=" absolute top-0 h-full w-full flex  ">
          <div className="relative mx-auto  flex top-[35%] mobile:top-[30%] w-[90%] max-w-[900px]">
            <form onSubmit={handleSubmit} className="mx-auto">
              <div className="flex flex-col">
                <p className="text-[#fff] mobile:mx-auto mb-4 text-[18px] mobile:text-[28px] font-[700]">
                  Free HD Stock Footage !
                </p>
                <div className="flex gap-4 flex-wrap">
                  <div className="">
                    <input
                      onChange={handleChange}
                      className="py-1 px-2 mobile:py-1.5 w-[100px] tablet:w-[150px]  mobile:px-3 border-2 border-[#fff] rounded-lg outline-none bg-[#fff]"
                      placeholder="Search..."
                      type="text"
                    />
                  </div>
                  <div className="">
                    <input
                      onChange={noOfPics}
                      name="deliveryNumber"
                      className="py-1 px-2 mobile:py-1.5 w-[100px] tablet:w-[150px]  mobile:px-3 border-2 border-[#fff] rounded-lg outline-none bg-[#fff]"
                      placeholder="No of Images"
                      type="text"
                    />
                  </div>
                  <div className="">
                    <input
                      type="submit"
                      value="Search"
                      className=" hover:bg-[#fff] hover:text-[#417ac0] font-semibold py-1 px-3 mobile:py-1.5 mobile:px-4 bg-[#417ac0] transition border-2 hover:border-[#417ac0] text-[#fff] rounded-lg cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-10 p-8">
          {loading ? (
            <div className="flex">
              <p className="mx-auto text-[28px] font-[700] text-center">Search and get your desire photos</p>
            </div>
          ) : (
            <>
        <p className="text-[22px] font-semibold mb-8 ">Free HD photos</p>
            <div className="flex gap-6 justify-center flex-wrap">

              {result.map((search) => (
                <div className="rounded-[20px] overflow-hidden">
                  <img
                    variant="top"
                    width={"300px"}
                    src={search.src.portrait}
                    alt={search.photographer}
                  />
                </div>
              ))}
        </div>
            </>
          )}
      </div>
      <Footer />
    </div>
  );
};

export default ImgGen;
