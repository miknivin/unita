import Counter from './counter-item/counter-item';

const counterData = [
  {
    id: 1,
    countNum: 56,
    countSubtext: '',
    countTitle: 'COUNTRIES VISITED',
  },
  {
    id: 2,
    countNum: 60,
    countSubtext: '',
    countTitle: 'FLIGHTS TAKEN',
  },
  {
    id: 3,
    countNum: 100,
    countSubtext: '',
    countTitle: 'DAYS TRAVELING',
  },
  {
    id: 4,
    countNum: 23,
    countSubtext: '+',
    countTitle: 'NEW FRIENDS',
  },
];

const FunFactFour = () => {
  return (
    <div
      className="it-funfact-area it-funfact-5 it-funfact-5-overlay it-funfact-5-bg p-relative pt-110 pb-110"
      style={{
        backgroundImage: `url('/assets/img/home-5/funfact/fun-fact-5-bg.jpg.jpg')`,
      }}
    >
      <div className="it-funfact-5-wrap z-index">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="it-funfact-5-title-box mb-60">
                <h3 className="it-section-title text-white">
                  My Traveling Achievements Dream big,{' '}
                  <span className="it-transparent-title">Live big</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="it-funfact-wrap">
            <div className="row">
              {counterData.map((item) => (
                <div key={item.id} className="col-xl-3 col-md-3 col-sm-4">
                  <div className="it-funfact-item">
                    <div className="it-funfact-text">
                      <h3 className="it-funfact-number">
                        <Counter
                          start={0}
                          end={item.countNum}
                          duration={2}
                          counterSubText={item.countSubtext}
                        />
                      </h3>
                      <p>{item.countTitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FunFactFour;
