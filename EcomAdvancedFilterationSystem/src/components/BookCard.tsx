import { Link } from "react-router-dom";

type BookCardProps = {
  id: string;
  title: string;
  images: string;
  price: number;
};

const BookCard: React.FC<BookCardProps> = ({
  id,
  title,
  images,
  price,
}: BookCardProps) => {
  return (
    <div className="border p-4 rounded">
      <Link to={`/product/${id}`}>
        <img
          src={images[0]}
          alt={title}
          className="w-full h-32 object-cover mb-2"
        />
        <h2 className="font-bold">{title}</h2>
        <p>${price}</p>
      </Link>
    </div>
  );
};

export default BookCard;
