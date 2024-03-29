import React, { Dispatch, useEffect } from 'react';
import styles from './assets/reviewsList.module.scss';
import classNames from 'classnames';
import ReviewItem from '../reviewItem/reviewItem';
import { Review } from '../../../../types/reviews';
import { reviewsSelector } from '../../../../store/selectors/reviews';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useDispatch } from '../../../../hooks/dispatch';
import { fetchReviews } from '../../../../store/thunks/reviews-thunk';
import { addReviewSelector } from '../../../../store/selectors/addReview';
import Spinner from '../../../../components/Spinner/Spinner';

interface Props {}

const ReviewsList: React.FunctionComponent<Props> = () => {
    const {review} = useTypedSelector(addReviewSelector);
    const {loading, reviews} = useTypedSelector(reviewsSelector);
    const dispatch = useDispatch();
    console.log(review);

    useEffect(() => {
        // TODO: Any
        dispatch<any>(fetchReviews())
        // TODO: remove unwrap
            .unwrap()
            .then((res: any) => {
                console.log('fetchReviews');
            });
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <Spinner />
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
