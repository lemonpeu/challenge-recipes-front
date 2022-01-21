import Button from '../../common/Button';
import { rating } from '../../utils/rating';
import { putData } from '../../utils/hooks/putData';

const Rating = ({ id }) => {
    const sendData = async (userRating) => {
        await putData(userRating, id);
    };

    return (
        <div>
            {rating &&
                rating.map((point) => (
                    <Button
                        key={rating.value}
                        onClick={() => sendData(point.value)}
                        btnName="⭐"
                        aria-label="star for rating"
                    />
                ))}
        </div>
    );
};

export default Rating;
