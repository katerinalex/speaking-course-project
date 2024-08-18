import './comment.scss';

type Props = {
  name: string,
  review: string
}

export const CommentCard: React.FC<Props> = ({
  name,
  review,
}) => {
  return (
    <div className='comment'>
      <div>
        <h2 className='comment__title'>
          {name}
        </h2>
      </div>
      <div>
        <p className='comment__paragraph'>
          {review}
        </p>
      </div>

    </div>
  )
}