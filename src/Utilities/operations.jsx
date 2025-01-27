import 'font-awesome/css/font-awesome.min.css';

export const getStarRating = (vote) => {
    const fullStars = Math.floor(vote);
    const emptyStars = 5 - fullStars;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={i} className="fa fa-star" style={{ color: 'aqua' }}></i>);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<i key={i} className="fa fa-star-o" style={{ color: 'aqua' }}></i>);
    }
    return stars;
}; 
