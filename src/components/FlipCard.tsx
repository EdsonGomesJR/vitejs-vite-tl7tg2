import logoImg from '../assets/logo-nlw-esports.svg';

export function FlipCard() {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={logoImg} alt="Avatar" className="w-[300px] h-[300px]" />
        </div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
}
