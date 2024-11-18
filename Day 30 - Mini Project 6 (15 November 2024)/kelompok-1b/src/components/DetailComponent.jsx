import React from "react";
import Typography from "./Typography";
import Article1 from "../assets/AssetsBlogPages/Article1.png";

export default function DetailComponent() {
  return (
    <div className="bg-off-white">
      <div className="container mx-auto flex flex-col items-center">
        <Typography
          variant="bodycopy"
          className="bg-peach-red-100 text-white py-1 px-4 rounded-2xl mt-10 mb-5"
        >
          tag
        </Typography>
        {/* article title */}
        <Typography variant="h2" color="text-black" className="mb-5">
          Judul Article
        </Typography>
        <div className="flex flex-row gap-4 items-center mb-5">
          {/* author */}
          <Typography className="font-bold text-gray-500" variant="bodycopy">
            author
          </Typography>
          <span> | </span>
          {/* date */}
          <Typography className="font-bold text-gray-500" variant="bodycopy">
            date
          </Typography>
          <span>|</span>
          <Typography className="font-bold text-gray-500" variant="bodycopy">
            Share to :
          </Typography>
        </div>

        {/* options share */}
        <div className="flex flex-row gap-5">
          <a
            href="#"
            className="flex flex-row gap-2 border-2 border-peach-red-100 p-2 rounded-md text-white hover:bg-red-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="black" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
            </svg>
            <Typography
              variant="small"
              className="text-black flex items-center"
            >
              Facebook
            </Typography>
          </a>
          <a
            href="#"
            className="flex flex-row gap-2 border-2 border-peach-red-100 p-2 rounded-md text-white hover:bg-red-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="black" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
            <Typography
              variant="small"
              className="text-black flex items-center"
            >
              Twitter
            </Typography>
          </a>
        </div>
        <div className="mt-10">
          {/* img article */}
          <div className="flex justify-center">
            <img
              src={Article1}
              alt="article picture"
              className="w-[80%] md:w-full"
            />
          </div>
          <div className="mt-10 mb-10 px-10 md:px-36">
            <Typography variant="bodycopy">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Explicabo possimus, cupiditate, in obcaecati qui officiis labore
              nostrum odio quasi nulla quam atque. Excepturi tempore illum
              mollitia, sit iste ipsa eaque? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Vitae quis voluptatem quibusdam,
              dignissimos ullam voluptates, iusto assumenda earum porro deserunt
              non fuga culpa facere eum odio. Modi pariatur veniam cumque. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ipsam molestias
              rem, consequuntur tenetur architecto harum libero placeat
              excepturi cupiditate suscipit quidem aspernatur velit accusantium
              qui est tempore eligendi quisquam quia. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Magnam dolor animi assumenda harum
              odit voluptatum maiores sunt eveniet dolorum. Nisi quae ipsam cum.
              Ratione facilis blanditiis deleniti quam alias voluptate! Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis id
              ullam repellendus in. Et placeat fugit delectus. Commodi, officia.
              Nihil dolore facere qui. Temporibus cupiditate perspiciatis
              mollitia natus adipisci voluptatibus? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Eos esse voluptatum atque neque
              totam maxime delectus. Quaerat, magni soluta voluptas doloremque,
              recusandae totam aliquam facere eius quasi iusto excepturi
              commodi?
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
