import React from 'react';
import styles from './assets/reviewItem.module.scss';
import classNames from 'classnames';
import { Review } from '../../../../types/reviews';

interface ReviewItemProps {
    review: Review
}

const ReviewItem: React.FunctionComponent<ReviewItemProps> = ({review}) => {
    return (
        <div className={styles.reviewItem}>
            <p>{ review.name }</p>
            <p>{ review.review }</p>
            <p>id: { review.id }</p>
        </div>
    );
};

export default ReviewItem;
