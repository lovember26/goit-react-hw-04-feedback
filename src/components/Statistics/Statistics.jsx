import { Span } from './Statistics.styled';
import { Paragraph } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <Paragraph>
        Good: <Span>{good}</Span>
      </Paragraph>
      <Paragraph>
        Neutral: <Span>{neutral}</Span>
      </Paragraph>
      <Paragraph>
        Bad: <Span>{bad}</Span>
      </Paragraph>
      <Paragraph>
        Total: <Span>{total}</Span>
      </Paragraph>
      <Paragraph>
        Positive feedback: <Span>{positivePercentage}%</Span>
      </Paragraph>
    </>
  );
}
