import Button from '../../common/Button';
import { rating } from '../../utils/rating';
import { useQuery } from '../../utils/hooks/useQuery';
import { useState } from 'react';

const Rating = ({ id, setUserRating }) => {
    const [ratingVal, setRatingVal] = useState({});
    const { _ } = useQuery({
        method: 'put',
        endpoint: '/api/recipe/' + id,
        data: ratingVal,
    });

    const sendRating = (value) => {
        setRatingVal({ rating: value });
        setUserRating(value);
    };

    return (
        <div>
            {rating &&
                rating.map((point, index) => (
                    <Button
                        key={index}
                        onClick={() => sendRating(point.value)}
                        btnName="⭐"
                        aria-label="star for rating"
                    />
                ))}
        </div>
    );
};

export default Rating;
