import React from "react";

const reviews = [
  {
    name: "Alicent Hightower",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4UlS1Ehv87B7_HRdQWlKz8Jw13A0zxuiuQ&s",
    consultation: "Skin care",
    date: "20 January 2023",
    review:
      "Might be a bit early to confirm, but yes I can see noticeable difference in my hairfall. Will write again after using it for longer periods.",
    rating: 5,
  },
  {
    name: "Alicent Hightower",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4UlS1Ehv87B7_HRdQWlKz8Jw13A0zxuiuQ&s",
    consultation: "Pregnancy",
    date: "20 January 2023",
    review:
      "Might be a bit early to confirm, but yes I can see noticeable difference in my hairfall. Will write again after using it for longer periods.",
    rating: 5,
  },
];

const StarRating = ({ count }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${
            index < count ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.431 8.214 1.196-5.941 5.787 1.401 8.177L12 18.897l-7.342 3.861 1.401-8.177-5.941-5.787 8.214-1.196z" />
        </svg>
      ))}
    </div>
  );
};

const FeaturedReviews = () => {
  return (
    <div className="bg-[#FEFDF9] rounded-lg shadow-md mx-auto border-grey-900 border-solid border-2">
      <h2 className="text-xl font-bold mb-4 bg-[#F8F9E9] rounded-t-lg p-4">
        Featured Reviews <span className="text-gray-500">(102)</span>
      </h2>
      <div className="space-y-6 p-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex space-x-4 border-grey-900 border-solid border-2"
          >
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-xl">{review.name}</h3>
                <span className="text-m text-gray-500">{review.date}</span>
              </div>
              <p className="text-m text-gray-500 mb-2">
                Consulted for {review.consultation}
              </p>
              <StarRating count={review.rating} />
              <p className="text-m text-gray-700 mt-2">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedReviews;
