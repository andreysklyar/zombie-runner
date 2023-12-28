import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';
import * as yup from 'yup';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { createReview, generateReview } from '../../../../store/thunks/reviews-thunk';
import { NewReview } from '../../../../types/reviews';
import { addReviewSelector } from '../../../../store/selectors/addReview';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from 'react-bootstrap';
import { ControledInput } from '../../../../components/inputs/ControledInput';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { useEffectOnce } from '../../../../hooks/use-effect-once';
import { ControledTextarea } from '../../../../components/inputs/ControledTextarea';
import { generateReviewSelector } from '../../../../store/selectors/generateReview';

interface Props {
}

interface FormData extends NewReview {};

const ReviewForm: React.FunctionComponent<Props> = () => {
  const gpt = process.env.REACT_APP_CHAT_GPT;
  const {loading, review} = useTypedSelector(addReviewSelector);
  const {loading: aiLoading, review: aiReview} = useTypedSelector(generateReviewSelector);
  // TODO: check ThunkDispatch
  const dispatch = useDispatch<ThunkDispatch<any, NewReview, any>>();
  const dispatchAi = useDispatch<ThunkDispatch<any, string, any>>();
  
  const validationSchema = yup.object().shape({
    name: yup.string()
        .min(3, 'Must be 3 characters minimum')
        .max(15, 'Must be 15 characters or less')
        .required('required'),
    review: yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('required'),
  });

  useEffectOnce(() => {
    console.log('useEffectOnce');
  }, []);

  const {
    setValue,
    setError,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  });

  // Submit
  const onSubmitHandler = useCallback(async (data: FormData) => {
    console.log(data, " data");
    dispatch(createReview(data));
  }, []);
  console.log(errors, ' all errors');

  // GPT
  const generatePositiveText = useCallback(async () => {
    const res = await dispatchAi(generateReview(true));
    // setError("review", error: "some error");
    console.log(res, ' res');
  }, []);

  const generateNegativeText = useCallback(() => {
    dispatchAi(generateReview(false));
  }, []);

  useEffect(() => {
    setValue("review", aiReview);
  }, [aiReview, dispatchAi]);

  return (
    <Form
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <ControledInput
        type="text"
        name="name"
        placeholder="Name"
        containerClass='mb-3'
        control={control}
        error={errors.name} />
      <ControledTextarea
        type="text"
        name="review"
        placeholder="Feedback"
        containerClass='mb-3'
        control={control}
        error={errors.review} />
      {gpt && (
        <div className="btn-group btn-group-sm mb-5" role="group">
          <div
              className={classNames(
                aiLoading
                ? 'disabled'
                : '',
                'btn btn-success'
            )}
            onClick={generatePositiveText}> 
            Generate positive review
          </div>
          <div
              className={classNames(
                aiLoading
                ? 'disabled'
                : '',
                'btn btn-danger'
            )}
            onClick={generateNegativeText}> 
            Generate negative review
          </div>
        </div>
      )}
      {/* todo: update disabled condition  */}
      <div>
        <button className='btn btn-primary' type="submit" disabled={ loading || aiLoading }> 
          Submit
        </button>
      </div>
      <div>
        {loading && (
          <div>addding new item.....</div>
        )}
      </div>
      <div>
        {review && (
          <div>---------<br /><b>last item added</b>: <br /> {review.name}<br /> {review.review}<br /> {review.id}</div>
        )}
      </div>
    </Form>
  );
};

export default ReviewForm;
