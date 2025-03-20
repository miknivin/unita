import Counter from './counter-item/counter-item';

const counterData = [
  {
    id: 1,
    countNum: 50,
    countSubtext: '+',
    countTitle: 'Professional Guides',
  },
  {
    id: 2,
    countNum: 30,
    countSubtext: 'K+',
    countTitle: 'Happy Customers',
  },
  {
    id: 3,
    countNum: 25,
    countSubtext: 'K+',
    countTitle: 'Traveling Experience',
  },
  {
    id: 4,
    countNum: 60,
    countSubtext: 'K+',
    countTitle: 'Tours Are Completed',
  },
];

const FunFactThree = () => {
  return (
    <div className="it-funfact-area it-funfact-4">
      <div className="container">
        <div className="it-funfact-wrap theme-bg">
          <div className="row">
            {counterData.map((item) => (
              <div
                key={item.id}
                className="col-xl-3 col-lg-3 col-md-3 col-sm-6"
              >
                <div className="it-funfact-item d-flex align-items-center">
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
  );
};
export default FunFactThree;
