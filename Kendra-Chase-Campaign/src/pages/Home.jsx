import cityBackgroundImage from "../assets/city-background.png";
import stockImage1 from "../assets/sample-image1.jpeg";
import stockImage2 from "../assets/sample-image2.jpg";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      {/* Banner Area */}
      <section
        style={{ backgroundImage: `url(${cityBackgroundImage})` }}
        className={`bg-cover bg-center min-w-full flex justify-center items-center h-180 md:h-120 md:aspect-5/2 lg:aspect-3/1 lg:min-h-112`}
      >
        <div className="w-80 max-h-10/12 flex flex-col">
          <h3 className="rounded-lg border-2 border-white backdrop-blur-lg p-4 text-3xl text-gray-200 font-bold">
            Phasellus tristique metus nec nulla congue condimentum. Etiam rutrum
            scelerisque ipsum. Nullam tristique ante et mollis tincidunt.
          </h3>
          <div className="w-full min-h-15 max-h-15 flex justify-between pt-2">
            <button className=" rounded-lg bg-brand-blue text-brand-white hover:bg-brand-white hover:text-brand-blue w-5/12">
              Contribute
            </button>
            <button className="rounded-lg bg-brand-green text-brand-white hover:bg-brand-white hover:text-brand-green w-5/12">
              Volunteer
            </button>
          </div>
        </div>
      </section>
      {/*Info Cards */}
      <section className="flex flex-col flex-wrap gap-4 py-8 md:flex-row w-full justify-center align-middle">
        <img
          src={stockImage1}
          className="w-full md:w-4/10 md:min-w-4/10 rounded-2xl"
        ></img>
        <div className="bg-amber-200 w-full md:w-4/10 md:min-w-4/10"></div>
        <div className="bg-amber-200 w-full md:w-4/10 md:min-w-4/10"></div>
        <img
          src={stockImage2}
          className="w-full md:w-4/10 md:min-w-4/10 rounded-2xl"
        ></img>
      </section>
      {}
      <section
        style={{ backgroundImage: `url(${cityBackgroundImage})` }}
        className={`bg-cover bg-center w-full flex justify-center items-center gap-8 h-auto p-16 md:h-120 md:aspect-5/2 lg:aspect-3/1 lg:min-h-112`}
      >
        <div className="bg-brand-white max-w-full rounded-3xl p-8 flex flex-col gap-4">
          <h2 className="text-brand-green text-3xl font-extrabold">
            Contribute
          </h2>
          <p className="text-xl">
            We are a people-powered campaign, which means we refuse corporate
            PAC money. We’re relying on grassroots supporters like you so we can
            fight for the Green New Savannah we all deserve!
          </p>
          <div className="flex gap-2 flex-wrap justify-center align-middle text-xl">
            <button className="bg-brand-blue text-brand-white hover:bg-brand-white hover:text-brand-blue w-5/12 h-15 rounded-3xl hover:border-4 hover:border-brand-blue">
              $30
            </button>
            <button className="bg-brand-blue text-brand-white hover:bg-brand-white hover:text-brand-blue w-5/12 h-15 rounded-3xl hover:border-4 hover:border-brand-blue">
              $60
            </button>
            <button className="bg-brand-blue text-brand-white hover:bg-brand-white hover:text-brand-blue w-5/12 h-15 rounded-3xl hover:border-4 hover:border-brand-blue">
              $120
            </button>
            <button className="bg-brand-blue text-brand-white hover:bg-brand-white hover:text-brand-blue w-5/12 h-15 rounded-3xl hover:border-4 hover:border-brand-blue">
              $250
            </button>
            <button className="bg-brand-white text-brand-blue hover:bg-brand-blue hover:text-brand-white w-10/12 h-15 px-1 rounded-3xl border-4 border-brand-blue">
              Other Amount
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
