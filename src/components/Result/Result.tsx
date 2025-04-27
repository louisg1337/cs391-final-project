// Edward Marecos ▼

interface ResultProps {
    isCorrect: boolean;     // if the users answer was right
    actualValue: number;    // the actual population of the second country
}

export default function Result({ isCorrect, actualValue}: ResultProps) {

    return (
      <div>
          {isCorrect ? (
              <p> correct </p>
          ) : (
              <p> wrong  the right value was { actualValue }</p>
          )}
      </div>
    );
}