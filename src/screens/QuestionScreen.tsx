import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import chatIcon from '../assets/ChatCircleText.svg';

const questions = [
  {
    question: 'Når var sist gang du gjorde noe gøy? Hva gjorde du?',
    followup: 'Hva gjorde det så bra?'
  },
  {
    question: 'Hva er det beste stedet å henge i byen akkurat nå?',
    followup: 'Hva er bra med det?'
  },
  {
    question: 'Hva er en bra kveld for deg?',
    followup: 'Er det folkene, stedet, stemningen – eller noe annet?'
  },
  {
    question: 'Du har 200 kr til å finne på noe. Hva bruker du det på?',
    followup: 'Andre ting?'
  },
  {
    question: 'Hva er det mest minneverdige du har sett det siste året?',
    followup: 'Det kan være film, serie, TikTok – hva som helst'
  },
  {
    question: 'Hva er det første du tenker når du hører ordet kino?',
    followup: 'Hvorfor akkurat de tingene?'
  },
  {
    question: 'Hvordan er en skikkelig bra kinokveld?',
    followup: 'Hva liker du å gjøre før og etter en tur på kino?'
  },
  {
    question: 'Hva kan få deg til å droppe kino, selv når du vet at det går noe bra?',
    followup: 'Hvorfor er det sånn?'
  },
  {
    question: 'Hvem eller hva bestemmer når du og vennene dine skal finne på noe?',
    followup: 'Andre ting?'
  },
  {
    question: 'Hva er det mest stressende med å planlegge noe med venner nå for tida?',
    followup: 'Hva tror du voksne ikke forstår om hvordan det er å være ung?'
  },
  {
    question: 'Hva skal til for at alle i gjengen blir med på noe?',
    followup: 'Hva skjer hvis du eller noen andre foreslår kino?'
  },
  {
    question: 'Hva tenker du om å dra på kino alene?',
    followup: 'Hvorfor tenker du sånn?'
  },
  {
    question: 'Hvis Trondheim kino var en person på fest, hvordan hadde hen oppført seg?',
    followup: 'Hvorfor tenker du sånn?'
  },
  {
    question: 'Hva synes du Trondheim kino gjør bra – og hva kunne de gjort annerledes?',
    followup: 'Hvordan kan Trondheim kino bli mer relevant for deg?'
  },
  {
    question: 'Hva kan Trondheim kino gjøre for å få oppmerksomheten din?',
    followup: 'Hvordan nå fram liksom?'
  },
  {
    question: 'Vi vil at flere skal besøke Trondheim kino. Du er sjef. Hva gjør du?',
    followup: 'Andre ting?'
  }
];

const QuestionScreen: React.FC = () => {
  const navigate = useNavigate();
  const { number } = useParams<{ number: string }>();
  const idx = Math.max(0, Math.min(questions.length - 1, Number(number) - 1));
  const isLast = idx === questions.length - 1;
  const progress = `${idx + 1}/${questions.length}`;
  const { question, followup } = questions[idx];

  const handleNext = () => {
    if (isLast) {
      navigate('/completed');
    } else {
      navigate(`/questions/${idx + 2}`);
    }
  };

  return (
    <div className="screen-container">
      {/* Header with only back button */}
      <div className="screen-header">
        <span className="back-button" onClick={() => navigate(-1)}>&larr;</span>
      </div>

      {/* Scrollable Content with Progress Bar */}
      <div className="screen-content content-animate" style={{ justifyContent: 'flex-start', paddingTop: 'calc(var(--header-height) + var(--space-lg))' }}>
        {/* Progress Bar and Number above question */}
        <div className="progress-container" style={{ marginBottom: 'var(--space-xl)' }}>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((idx + 1) / questions.length) * 100}%` }}
            />
          </div>
          <div className="progress-text">{progress}</div>
        </div>

        <h1 style={{ textAlign: 'center', marginBottom: 'var(--space-lg)', maxWidth: '340px' }}>
          {question}
        </h1>
        <div className="card" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          maxWidth: '340px',
          width: '100%'
        }}>
          <img src={chatIcon} alt="Chat icon" style={{ 
            marginRight: 10, 
            width: 20, 
            height: 20, 
            flexShrink: 0 
          }} />
          <span>{followup}</span>
        </div>
      </div>

      {/* Fixed Footer with Button */}
      <div className="screen-footer">
        <button onClick={handleNext}>
          {isLast ? 'Fortsett' : 'Neste spørsmål'}
        </button>
      </div>
    </div>
  );
};

export default QuestionScreen; 