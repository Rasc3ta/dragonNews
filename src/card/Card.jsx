import PropTypes from "prop-types";
import { CiShare2, CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";

const Card = ({ news }) => {
  const { author, title, details, rating, total_view, image_url } = news;

  return (
    <div className=" ">
      {/* author and date */}
      <div className="flex flex-nowrap items-center justify-between px-5 py-2 bg-bgGray">
        {/*author  */}

        <div className="flex flex-nowrap items-center gap-4">
          <img src={author.img} className="w-[40px] h-[40px] rounded-full" />
          <div>
            <h1 className="font-semibold text-[16px]">
              {author?.name ? author.name : "unknown"}
            </h1>
            <p className="text-sm">
              {author.published_date
                ? author.published_date.split(" ")[0]
                : "unknown"}
            </p>
          </div>
        </div>
        {/* icons  */}

        <div className=" flex flex-nowrap items-center ">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      {/* body */}
      <div className="p-5">
        <h1 className="font-bold text-xl ">{title}</h1>
        <img src={image_url} className="my-4" />
        <p className="text-[16px] ">
          {details.slice(0, (details.length / 3).toFixed(0))}
        </p>
        <Link
          to={`/news/${news._id}`}
          className="text-[16px] text-orange-400 font-semibold hover:underline"
        >
          read more
        </Link>
      </div>
      <div>
        <div className="flex flex-nowrap items-center justify-between text-lg p-5">
          <span>Rating: {rating.number}</span>
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  news: PropTypes.object,
};

export default Card;
