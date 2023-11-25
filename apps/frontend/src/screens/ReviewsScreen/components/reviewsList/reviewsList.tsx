import React, { useEffect } from 'react';
import styles from './assets/reviewsList.module.scss';
import classNames from 'classnames';
import ReviewItem from '../reviewItem/reviewItem';
import { Review } from '../../../../types/reviews';
import { reviewsSelector } from '../../../../store/selectors/reviews';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { fetchReviews } from '../../../../store/thunks/reviews-thunk';
import { addReviewSelector } from '../../../../store/selectors/addReview';

interface Props {}

const ReviewsList: React.FunctionComponent<Props> = () => {
    const {review} = useTypedSelector(addReviewSelector);
    const {loading, reviews} = useTypedSelector(reviewsSelector);
    const dispatch = useDispatch();
    console.log(review);

    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch]);

    useEffect(() => {
        if (review?.id) {
            console.log(review, ' -- review');
            dispatch(fetchReviews());
        }
    }, [review, dispatch]);

    return (
        <>
            {loading ? (
                <div className=''>
                    spinner
                </div>
            ) : (reviews.length) ? ( 
                <div className={styles.reviewsList}>
                    {reviews.map((review: Review, idx: number) => {
                        return (
                            <ReviewItem key={idx} review={review} />
                        )
                    })}
                </div>
            ) : (
                <div className='text-center'>No Results</div>
            )}
        </>
    );
};

export default ReviewsList;
