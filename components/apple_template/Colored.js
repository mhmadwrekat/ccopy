import React, { useState } from 'react'
import moment from 'moment'
import 'moment/locale/ar'

const Colored = ({
  title,
  important_news,
  desc_color,
  fill_color,
  text_color,
  card_color,
  theme,
  description,
}) => {
  const important_news_img =
    important_news?.data[0]?.stories_media_url.length > 0
      ? important_news.data[0].stories_media_url[0]
      : null

  // function to return the youtube code to show the thumbnail
  function retrieve_youtube_code(link) {
    let code = ''
    // check for watch videos
    if (link.includes('watch/')) {
      code = link.split('watch/')[1]
      return code
    } else if (link.includes('watch?')) {
      // check for regular youtube videos
      code = link.split('watch?')[1]
      const youtube_code_for_thumbnail = code?.split('v=')[1]
      return youtube_code_for_thumbnail?.split('&')[0]
    }
    // (link.includes('youtu.be'))
    else {
      // check for Link without watch
      code = link.split('youtu.be/')[1]
      return code
    }
  }
  const defaultLike = false
  const [like, setLike] = useState(defaultLike)

  const handleLike = () => {
    setLike(!like)
  }
  return (
    <React.Fragment>
      <section className={`${text_color} mx-auto w-11/12 lg:w-10/12`}>
        <>
          <div className="flex justify-between">
            <div className="my-3 mt-1 lg:mt-2">
              <h1
                className={`${text_color} mt-5 font-TSExtra text-2xl lg:text-4xl`}
              >
                {title}{' '}
              </h1>
              {description && (
                <p
                  className={`${desc_color} hidden w-full px-1 pb-5 font-TSmedium text-lg lg:grid lg:text-xl`}
                >
                  {description}
                </p>
              )}
            </div>
            <div className="my-1 mt-1 flex lg:mt-5">
              <p className="mt-5 font-TSbold text-lg lg:text-xl">عرض الجميع</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${fill_color} mt-4 mr-2 h-9 w-9 font-TSbold text-4xl lg:mt-3 lg:h-11 lg:w-11 lg:text-xl`}
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {description && (
            <p
              className={`${desc_color} grid w-full px-1 pb-2 font-TSmedium text-lg lg:hidden lg:text-xl`}
            >
              {description}
            </p>
          )}
          <section className="w-12/12 lg:w-12/12 mx-auto">
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
              <section>
                <div
                  id="card"
                  className={`${card_color} rounded-lg border-2 border-Purp200 shadow-lg`}
                >
                  <div>
                    <h3
                      className={`${theme} text-white rounded-t-md pr-5 pt-1.5 pb-0.5 text-right font-TSbold text-base hover:underline lg:pr-8`}
                    >
                      {important_news.section_name}
                    </h3>{' '}
                  </div>
                  <div className="relative max-w-full">
                    {/* {console.log(important_news_img)} */}
                    {important_news_img &&
                      (important_news_img.includes('youtube') ||
                      important_news_img.includes('youtu.be') ? (
                        <img
                          loading="eager"
                          src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                            important_news_img
                          )}/0.jpg`}
                          alt={important_news.data[0].stories_headlines}
                          className="relative h-56 w-full object-cover lg:h-80"
                        />
                      ) : (
                        <img
                          loading="eager"
                          src={important_news_img}
                          alt={important_news.data[0].stories_headlines}
                          className=" h-56 w-full object-cover lg:h-80"
                        />
                      ))}
                    <div className="bg-white text-black absolute bottom-2 left-2 rounded-full p-1">
                      {like ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=" h-7 w-7 cursor-pointer opacity-70"
                          fill="#FF0000"
                          viewBox="0 0 24 24"
                          stroke="#FF0000"
                          strokeWidth="2"
                          onClick={() => {
                            handleLike()
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=" h-7 w-7 cursor-pointer opacity-70"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          onClick={() => {
                            handleLike()
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div
                    className=" my-2 flex justify-between px-2.5
                  font-TSlight text-sm
                  "
                  >
                    <p>
                      <b className="text-red-600 font-TSbold">
                        {important_news?.data[0]?.publisher_name}
                      </b>
                    </p>
                    <p className="font-TSbold">
                      قبل{' '}
                      {moment(important_news?.data[0]?.published_on).fromNow(
                        true
                      )}
                    </p>
                  </div>
                  <div className="px-2.5 pt-2 pb-0.5">
                    <div className="mb-2 font-TSExtra text-2xl lg:h-16">
                      {important_news?.data[0]?.stories_headlines}
                    </div>
                    <p className="hidden h-36 font-TSmedium text-base lg:grid lg:h-28">
                      {important_news?.data[0]?.stories_content.slice(0, 330)}
                      .......
                    </p>
                    <p className="grid h-24 font-TSmedium text-base lg:hidden lg:h-28">
                      {important_news?.data[0]?.stories_content.slice(0, 170)}
                      .....
                    </p>
                    <div className="my-1 flex  justify-between pt-2.5">
                      <button
                        className={`rounded-lg py-0.5 font-TSExtra text-GRAY200 hover:text-RED`}
                      >
                        اقرأ المزيد
                      </button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-9 w-9 cursor-pointer "
                        viewBox="0 0 20 20"
                        fill="#7F7F7F"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </section>
              <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {important_news.data.slice(1, 5).map((item) => {
                  return (
                    <section key={item._id}>
                      <div
                        className={`${card_color} rounded-lg border-2 border-Purp200 shadow-lg`}
                        id="card"
                      >
                        <div>
                          <h3
                            className={`${theme} text-white rounded-t-md pr-3 pt-1.5 pb-0.5 text-right font-TSSemi text-base hover:underline lg:pr-5`}
                          >
                            {important_news.section_name}
                          </h3>{' '}
                        </div>
                        <section className={`${card_color} flex lg:grid`}>
                          <div className="relative mr-2 h-auto w-72 py-2 lg:mr-0 lg:h-auto lg:w-auto lg:py-0">
                            {item.stories_media_url[0] &&
                              (item.stories_media_url[0].includes('youtube') ||
                              item.stories_media_url[0].includes('youtu.be') ? (
                                <img
                                  loading="eager"
                                  src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                    item.stories_media_url[0]
                                  )}/0.jpg`}
                                  alt={item.stories_headlines}
                                  className="
                                mx-auto
                                h-32 
                                w-40 object-cover md:h-full md:w-full lg:h-28 lg:w-full"
                                />
                              ) : (
                                <img
                                  loading="eager"
                                  src={item.stories_media_url[0]}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-32 w-40 object-cover md:h-full md:w-full lg:h-28 lg:w-full"
                                />
                              ))}
                            <div className="bg-white text-black absolute bottom-5 left-1 rounded-full p-1 lg:bottom-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className=" h-4 w-4 cursor-pointer opacity-70"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                            </div>
                          </div>

                          <div className="hidden justify-between px-2.5 pt-2 font-TSlight text-xs lg:flex">
                            <p>
                              <b className="text-red-600 font-TSExtra">
                                {item.publisher_name}
                              </b>
                            </p>
                            <p className="font-TSExtra">
                              قبل {moment(item.published_on).fromNow(true)}
                            </p>
                          </div>

                          <div className=" py-1.5 px-3 sm:mb-0 lg:mb-1 lg:h-20 lg:px-2 lg:py-2">
                            <div className="my-3 mb-2 font-TSbold text-sm md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-9 lg:text-sm">
                              {item.stories_headlines}
                            </div>
                            <div className="my-3 mb-2 font-TSmedium text-xs md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-20 lg:pt-1.5 lg:text-sm">
                              {item.stories_content.slice(0, 80)}....
                            </div>
                          </div>
                        </section>

                        <div className="flex justify-between px-4 font-TSlight text-xs lg:hidden">
                          <p>
                            <b className=" text-red-600 font-TSExtra">
                              {item.publisher_name}
                            </b>
                          </p>
                          <p className="font-TSExtra">
                            قبل {moment(item.published_on).fromNow(true)}
                          </p>
                        </div>

                        <div className=" mx-auto w-11/12 pt-1 opacity-60"></div>
                        <div className="mx-2.5 flex justify-between pt-1 lg:pt-2">
                          <button
                            className={`$rounded-lg py-0.5 font-TSExtra text-sm text-GRAY200 hover:text-RED`}
                          >
                            اقرا المزيد
                          </button>{' '}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-9 w-9 cursor-pointer "
                            viewBox="0 0 20 20"
                            fill="#7F7F7F"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </div>
                      </div>
                    </section>
                  )
                })}
              </section>
            </section>
          </section>
        </>
      </section>
    </React.Fragment>
  )
}
export default Colored
