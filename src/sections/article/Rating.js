import Button from '../../common/Button';
import { rating } from '../../utils/rating';
import { useQuery } from '../../utils/hooks/useQuery';
import { useState } from 'react';

const Rating = ({ id, setUserRanting }) => {
    const [userRating, setUserRating] = useState({});
    const { _ } = useQuery({
        method: 'put',
        endpoint: '/api/recipe/' + id,
        data: userRating,
    });

    const sendRating = (value) => {
        setUserRating({ rating: value });
        setUserRanting(value);
    };

    return (
        <div>
            {rating &&
                rating.map((point) => (
                    <Button
                        key={rating.value}
                        onClick={() => sendRating(point.value)}
                        btnName="⭐"
                        aria-label="star for rating"
                    />
                ))}
        </div>
    );
};

export default Rating;
