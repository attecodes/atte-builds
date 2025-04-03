import { FC, useCallback, useEffect, useState } from "react";
import classNames from "classnames";

import Image from "next/image";

import axios from "axios";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Text } from "components/Text";
import { GoogleReview } from "lib/queries";

import * as styles from "./styles";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    partialVisibilityGutter: 60,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
};
const CustomRightArrow = ({ onClick }: { onClick: () => void }) => (
  <button className="customArrow rightArrow" onClick={onClick}>
    &gt;
  </button>
);

const CustomLeftArrow = ({ onClick }: { onClick: () => void }) => (
  <button className="customArrow leftArrow" onClick={onClick}>
    &lt;
  </button>
);
export const GoogleReviews: FC = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);

  const fetchReviews = useCallback(async () => {
    try {
      const response = await axios.get("/api/google-reviews");
      if (response.data) {
        setReviews(response.data);
      }
    } catch (err) {
      setReviews([]);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  const renderStars = useCallback((count: number) => {
    return "★".repeat(count) + "☆".repeat(5 - count);
  }, []);

  const renderProfilePicture = useCallback(
    (clientName: string, clientImage?: string) => {
      return clientImage ? (
        <div className="image">
          <Image
            src={clientImage}
            alt="client image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : (
        <Text t="h1">{clientName.charAt(0).toUpperCase()}</Text>
      );
    },
    []
  );

  return (
    <div className={styles.googleReviews}>
      {reviews.length > 0 ? (
        <div className="carousel-container">
          <Carousel
            className="carousel-test"
            responsive={responsive}
            infinite={true}
            itemClass="carousel-item"
            arrows={true}
            focusOnSelect={true}
            customRightArrow={
              <CustomRightArrow
                onClick={() => {
                  /* handle click */
                }}
              />
            }
            customLeftArrow={
              <CustomLeftArrow
                onClick={() => {
                  /* handle click */
                }}
              />
            }
          >
            {reviews.map((review) => (
              <div key={review.datePublished} className="card">
                <div className="card-head">
                  <div
                    className={classNames(
                      "card-left",
                      `bg-${Math.floor(Math.random() * 8) + 1}`
                    )}
                  >
                    {renderProfilePicture(
                      review.clientName,
                      review.clientImageUrl
                    )}
                  </div>
                  <div className="card-right">
                    <Text>{review.clientName}</Text>
                    <Text>{review.clientOccupation}</Text>
                  </div>
                </div>
                <Text className="big-quote">{review.review}</Text>
                <Text>
                  Rating{" "}
                  <span className="stars">{renderStars(review.stars)}</span>
                </Text>
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        <Text>Trouble retrieving reviews.</Text>
      )}
    </div>
  );
};
