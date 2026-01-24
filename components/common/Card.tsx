import Image from 'next/image';
import { CardProps } from '../../interfaces';

const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <div className="rounded-lg border shadow-sm p-4 bg-white">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title || 'Card image'}
          className="w-full h-48 object-cover rounded-md mb-4"
          width={500}
          height={192}
        />
      )}
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      {description && <p className="text-gray-600 mt-2">{description}</p>}
    </div>
  );
};

export default Card;
