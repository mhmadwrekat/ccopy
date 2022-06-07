import React, { useState } from 'react'
import moment from 'moment'
import 'moment/locale/ar'
const ForYou = ({ for_you, title, description, color, subscripe }) => {
  const for_you_img =
    for_you?.important_data.stories_media_url.length > 0
      ? for_you.important_data.stories_media_url[0]
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
  //const [subs, setSubscripe] = useState(false)

  // const subscription = (subscripe) => {
  //   subscripe ? (subscripe = true) : (subscripe = false)
  //   return subscripe
  // }
  return (
    <React.Fragment>
      <section className="mx-auto w-11/12 pt-5 lg:w-9/12 lg:pt-2">
        <div className="flex lg:mt-10 ">
          <h1
            className={`text-${color} px-1 font-TSExtra text-3xl lg:text-4xl`}
          >
            {title}{' '}
          </h1>
          {subscripe !== null &&
            (subscripe ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-2 mt-1 h-7 w-7 hover:cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-2 mt-1 h-7 w-7 hover:cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ))}
        </div>
        <p className="text-gray-400 px-1 pb-5 font-TSmedium text-base">
          {description}
        </p>

        <section className="grid gap-5  sm:grid-cols-1 lg:grid-cols-2">
          <section>
            <div id="card">
              <div className="">
                {for_you_img &&
                  (for_you_img.includes('youtube') ||
                  for_you_img.includes('youtu.be') ? (
                    <img
                      src={`https://img.youtube.com/vi/${retrieve_youtube_code(
                        for_you_img
                      )}/0.jpg`}
                      alt={for_you.important_data.stories_headlines}
                      className="h-56 w-full rounded-lg lg:h-96"
                      // layout="responsive"
                      // width={300}
                      // quality={50}
                      // height={235}
                      // priority
                      // loading="eager"
                      // placeholder="blur"
                      // blurDataURL={`https://img.youtube.com/vi/${retrieve_youtube_code(
                      //   for_you_img
                      // )}/0.jpg`}
                    />
                  ) : (
                    <img
                      src={for_you_img}
                      alt={for_you.important_data.stories_headlines}
                      className="h-56 w-full rounded-lg lg:h-96"
                      // layout="responsive"
                      // quality={50}
                      // width={300}
                      // height={235}
                      // priority
                      // loading="eager"
                      // placeholder="blur"
                      // blurDataURL={for_you_img}
                    />
                  ))}
              </div>
            </div>
            <div className="px-1 py-1">
              <h3 className=" py-1 text-right font-TSmedium text-base tracking-tight	hover:underline ">
                {for_you.category_name}
              </h3>
              <div className="mb-1 font-TSbold text-xl">
                {for_you.important_data.stories_headlines}
              </div>
              <div>
                <p
                  className=" text-gray-400 font-TSmedium
                  text-xs"
                >
                  منذ{' '}
                  {moment(for_you.important_data.published_on).fromNow(true)}
                </p>
              </div>
            </div>
          </section>
          <section className="grid grid-cols-2 gap-5">
            {for_you.data.slice(0, 4).map((item) => {
              return (
                <section key={item._id}>
                  {/*console.log(item.stories_headlines)}
                  {console.log(item._id)*/}
                  <div id="card">
                    {item.stories_media_url[0] &&
                      (item.stories_media_url[0].includes('youtube') ||
                      item.stories_media_url[0].includes('youtu.be') ? (
                        <img
                          src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                            item.stories_media_url[0]
                          )}/0.jpg`}
                          alt={item.stories_headlines}
                          className="h-36 w-96 rounded-md lg:h-40"
                          // quality={25}
                          // layout="responsive"
                          // width={100}
                          // height={60}
                          // priority
                          // loading="eager"
                          // placeholder="blur"
                          // blurDataURL={`https://img.youtube.com/vi/${retrieve_youtube_code(
                          //   item.stories_media_url[0]
                          // )}/0.jpg`}
                        />
                      ) : (
                        <img
                          src={item.stories_media_url[0]}
                          alt={item.stories_headlines}
                          className="h-36 w-96 rounded-md lg:h-40"

                          // quality={25}
                          // layout="responsive"
                          // width={100}
                          // height={60}
                          // priority
                          // loading="eager"
                          // placeholder="blur"
                          // blurDataURL={item.stories_media_url[0]}
                        />
                      ))}
                    <div className="px-1 py-1">
                      <h3 className="py-1 text-right font-TSmedium text-xs tracking-tight hover:underline lg:text-sm">
                        {for_you.category_name}
                      </h3>
                      <div className="mb-1 h-20 font-TSbold text-sm lg:mb-0 lg:h-11 lg:text-sm">
                        {item.stories_headlines}
                      </div>
                      <p
                        className=" text-gray-400 font-TSmedium
                  text-xs"
                      >
                        منذ {moment(item.published_on).fromNow(true)}
                      </p>
                    </div>
                  </div>
                </section>
              )
            })}
          </section>
        </section>
      </section>
    </React.Fragment>
  )
}

export default ForYou