import Counter from './counter-item/counter-item';

const counterData = [
  {
    id: 1,
    countIcon: 'flaticon-journey',
    countNum: 835,
    countSubtext: '+',
    countTitle: 'Happy Traveler',
  },
  {
    id: 2,
    countIcon: 'flaticon-camping',
    countNum: 70,
    countSubtext: 'K',
    countTitle: 'Tent Sites',
  },
  {
    id: 3,
    countIcon: 'flaticon-travel',
    countNum: 78,
    countSubtext: '%',
    countTitle: 'Satisfaction Rate',
  },
  {
    id: 4,
    countIcon: 'flaticon-luggage',
    countNum: 7,
    countSubtext: '+',
    countTitle: 'Year Of Service',
  },
];

const FunFactTwo = () => {
  return (
    <div
      className="it-funfact-area it-funfact-2 it-funfact-2-bg pt-120 pb-120"
      style={{
        backgroundImage: `url('/assets/img/home-2/funfact/fun-fact-bg.jpg')`,
      }}
    >
      <div className="container">
        <div className="it-funfact-wrap">
          <div className="row justify-content-xl-center">
            {counterData.map((item) => (
              <div
                key={item.id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
              >
                <div className="it-funfact-item d-flex align-items-center justify-content-center">
                  <div className="it-funfact-content d-flex">
                    <div className="it-funfact-icon">
                      <i className={item.countIcon}></i>
                    </div>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FunFactTwo;
