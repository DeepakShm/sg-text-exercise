import IgIcon from "../assets/svg/insta.svg";
import LikeIcon from "../assets/svg/like.svg";
import CommentIcon from "../assets/svg/comment.svg";

export type CardType = {
  img: string;
  href: string;
  title: string;
  body: string;
  likes: string;
  comments: string;
};

export type SocialCardPropType = {
  rowReverse: boolean;
  card: CardType;
  testimoni: string;
};

function SocialCard({ rowReverse, card, testimoni }: SocialCardPropType) {
  return (
    <div className={`min-h-52 sc-card lg:flex justify-between ${rowReverse && "flex-row-reverse"}`}>
      <div className="card flex-1 md:flex flex-row gap-6 ">
        <div className="card-img relative p-3 bg-white shadow-2xl">
          <img className="object-cover w-full h-full lg:aspect-square " src={card.img} alt="social_1" />
          <a href={card.href} className="block absolute top-0 right-0 p-3 bg-secondary">
            <IgIcon />
          </a>
        </div>
        <div className="card-body lg:p-8 p-4 bg-white shadow-2xl flex flex-col flex-1">
          <h5 className="text-xl">{card.title}</h5>
          <p className="font-gill text-xs mt-4">{card.body}</p>
          <div className="mt-auto">
            <ul className="flex gap-5 justify-end">
              <li className="space-x-1 inline-flex items-center text-sm">
                <LikeIcon />
                <span>{card.comments}</span>
              </li>
              <li className="space-x-1 inline-flex items-center text-sm">
                <CommentIcon />
                <span>{card.comments}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 self-center">
        {testimoni && (
          <p className={`w-auto lg:w-2/4 lg:mt-0 mt-5 text-sm font-gill font-thin ${!rowReverse && "lg:ml-auto"}`}>
            {testimoni}
          </p>
        )}
      </div>
    </div>
  );
}

export default SocialCard;
