import React, { useCallback, useState } from 'react';
import styles from './assets/reviewItem.module.scss';
import classNames from 'classnames';
import { Review } from '../../../../types/reviews';
import ConfirmationModal from '../../../../components/ConfirmationModal/ConfirmationModal';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { deleteReviewSelector } from '../../../../store/selectors/deleteReview';
import { useDispatch } from '../../../../hooks/dispatch';
import { deleteReview, fetchReviews } from '../../../../store/thunks/reviews-thunk';
import Spinner from '../../../../components/Spinner/Spinner';

interface ReviewItemProps {
    review: Review
}

const ReviewItem: React.FunctionComponent<ReviewItemProps> = ({review}) => {
    const {loading, error} = useTypedSelector(deleteReviewSelector);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const onClickHandler = useCallback(() => {
        console.log('click');
        setShowModal(true);
    }, []);

    const closeModal = () => {
        setShowModal(false);
    };

    const handleConfirm = (id: string) => {
        setShowModal(false);
        dispatch<any>(deleteReview(id))
            .unwrap()
            .then(() => {
                dispatch<any>(fetchReviews());
            });
        // TODO: delete item action
    };

    return (
        <>
            {loading ? (
                <div className="card text-dark bg-light mb-3">
                    <div className="card-body">
                        <Spinner />
                    </div>
                </div>
            ) : (
                <div className="card text-dark bg-light mb-3">
                    <div className="card-header d-flex align-items-center">
                        <div className="flex-grow-1">
                            <div>{ review.id }</div>
                        </div>
                        <button className='btn btn-danger btn-sm ms-1' onClick={onClickHandler}>Delete</button>
                        <ConfirmationModal
                            show={showModal}
                            handleClose={closeModal}
                            handleDecline={closeModal}
                            handleConfirm={() => handleConfirm(review.id)}  />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{ review.name }</h5>
                        <p className="card-text">{ review.review }</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ReviewItem;
