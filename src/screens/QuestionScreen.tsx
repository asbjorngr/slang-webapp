import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const questions = [
  {
    question: 'Når var sist gang du gjorde noe gøy? Hva gjorde du?',
    followup: 'Hva var den beste delen med hele greia?'
  },
  {
    question: 'Hva er det beste stedet å henge i byen akkurat nå?',
    followup: 'Hvorfor er det så bra?'
  },
  {
    question: 'Hva er en bra kveld for deg?',
    followup: 'Er det folka, stedet eller stemninga?'
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
    followup: 'Hvordan vil du beskrive ditt forhold til kino?'
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
    question: 'Hva er mest stress med å planlegge noe med venner nå for tida?',
    followup: 'Hva tror du voksne ikke skjønner om hvordan det er å være ung?'
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
    followup: 'Hva får deg til å tenke sånn?'
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
  const progress = `Spørsmål ${idx + 1} av ${questions.length}`;
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
      {/* Scrollable Content with Progress Bar */}
      <div className="screen-content stable-animate" style={{ 
        justifyContent: 'flex-start', 
        paddingTop: 'calc(var(--safe-area-top) + var(--space-lg))',
        paddingBottom: 'calc(120px + var(--safe-area-bottom))'
      }}>
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

        {/* Main content area - centered */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: 'var(--space-lg)',
          width: '100%'
        }}>
          <h1 className="screen-title" style={{ marginBottom: 0, maxWidth: '340px' }}>
            {question}
          </h1>
          <div className="card" style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center',
            maxWidth: '340px',
            width: '100%',
            textAlign: 'center'
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: 'var(--space-xs)' }}>
              Oppfølgingsspørsmål
            </div>
            <span style={{ fontSize: '1.1rem' }}>{followup}</span>
          </div>
        </div>
      </div>

      {/* Button positioned same as WelcomeScreen */}
      <div className="standard-button-container">
        <button 
          className="standard-button"
          onClick={handleNext}
        >
          {isLast ? 'Fortsett' : 'Neste spørsmål'}
        </button>
      </div>
    </div>
  );
};

export default QuestionScreen; 