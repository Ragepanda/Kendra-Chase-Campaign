import cityBackgroundImage from "../assets/city-background.png";
import homeImage1 from "../assets/home-photo-2.jpg";
import kendraHeadshot from "../assets/kendra-transparent.png";
import GeorgiaHouse165Map from "../components/GeorgiaHouse165Map";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      {/* Banner Area */}
      <section
        style={{ backgroundImage: `url(${cityBackgroundImage})` }}
        className={`bg-cover bg-center bg-brand-blue/25 bg-blend-overlay w-full flex justify-center items-end flex-wrap h-auto md:h-auto md:aspect-5/2 lg:aspect-3/1`}
      >
        <img
          className="w-120 max-h-full md:max-w-6/12 lg:w-auto"
          src={kendraHeadshot}
        />
        <div className="w-120 md:w-3/12 max-h-10/12 min-w-64 flex flex-col pb-4 self-center">
          <h3 className="rounded-lg border-2 border-white backdrop-blur-lg p-4 text-3xl lg:text-4xl xl:text-5xl text-gray-200 font-bold">
            Creating a Georgia that Works for the Many, Not the Few.
          </h3>
          <div className="w-full min-h-15 max-h-15 flex justify-around md:justify-between lg:justify-around pt-2">
            <a
              href="https://secure.actblue.com/donate/votekendraclark"
              className="w-5/12"
            >
              <button className="rounded-lg bg-brand-white text-brand-green hover:bg-brand-green hover:text-brand-white w-full min-w-30 h-full font-bold">
                Contribute
              </button>
            </a>
            <a
              href="https://www.mobilize.us/votekendraclark/event/836393/"
              className="w-5/12"
            >
              <button className="rounded-lg bg-brand-green text-brand-white hover:bg-brand-white hover:text-brand-green w-full min-w-30 h-full font-bold">
                Volunteer
              </button>
            </a>
          </div>
        </div>
      </section>
      {/*Info Cards */}
      <section className="flex flex-col flex-wrap gap-4 py-8 px-4 md:flex-row w-full justify-center align-middle">
        <div className="w-full md:w-11/24 md:min-w-11/24 p-4 px-8 bg-brand-white rounded-2xl flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-brand-orange pb-6">
            Meet Kendra
          </h2>
          <p className="text-xl">
            I'm running to create a system that values people over profit and
            compassion over punishment. Because no one should go bankrupt from
            medical bills. No one should have to work three jobs just to
            survive. And no one should have to beg for basic dignity.
          </p>
          <p className="text-xl pt-6">
            I'm not taking a dime from developers, corporate PACs, or SCAD. My
            loyalty is to you. I'll fight to cap rent hikes, lower healthcare
            costs and expand worker protections. It's time for a government that
            works for all Georgians. Let's build that future together.
          </p>
        </div>
        <img
          src={homeImage1}
          className="w-full h-auto md:w-11/24 md:min-w-11/24 object-cover object-[75%_50%] rounded-2xl"
        ></img>
        {/* <div className="bg-amber-200 w-full md:w-4/10 md:min-w-4/10"></div>
        <img
          src={stockImage2}
          className="w-full md:w-4/10 md:min-w-4/10 rounded-2xl"
        ></img> */}
      </section>
      <section
        style={{ backgroundImage: `url(${cityBackgroundImage})` }}
        className={`bg-cover bg-center w-full flex justify-center items-center gap-8 h-auto p-16 md:h-120 md:aspect-5/2 lg:aspect-3/1 lg:min-h-112`}
      >
        <div className="bg-brand-white max-w-full rounded-3xl p-8 flex flex-col gap-4">
          <h2 className="text-brand-green text-3xl font-extrabold">
            Contribute
          </h2>
          <p className="text-xl">
            Donate today and join the movement to create a Georgia that works
            for all!
          </p>
          <div className="flex gap-2 flex-wrap justify-center align-middle text-xl">
            <a
              className="w-5/12 h-15"
              href="https://secure.actblue.com/donate/votekendraclark?amount=25"
            >
              <button className="bg-brand-blue text-brand-white hover:bg-brand-white hover:text-brand-blue rounded-3xl w-full h-full hover:border-4 hover:border-brand-blue">
                $25
              </button>
            </a>
            <a
              className="w-5/12 h-15"
              href="https://secure.actblue.com/donate/votekendraclark?amount=50"
            >
              <button className="bg-brand-blue text-brand-white hover:bg-brand-white hover:text-brand-blue rounded-3xl w-full h-full hover:border-4 hover:border-brand-blue">
                $50
              </button>
            </a>
            <a
              className="w-5/12 h-15"
              href="https://secure.actblue.com/donate/votekendraclark?amount=100"
            >
              <button className="bg-brand-blue text-brand-white hover:bg-brand-white hover:text-brand-blue rounded-3xl w-full h-full hover:border-4 hover:border-brand-blue">
                $100
              </button>
            </a>
            <a
              className="w-5/12 h-15"
              href="https://secure.actblue.com/donate/votekendraclark?amount=250"
            >
              <button className="bg-brand-blue text-brand-white hover:bg-brand-white hover:text-brand-blue rounded-3xl w-full h-full hover:border-4 hover:border-brand-blue">
                $250
              </button>
            </a>
            <a
              className="w-10/12 h-15"
              href="https://secure.actblue.com/donate/votekendraclark"
            >
              <button className="bg-brand-white text-brand-blue hover:bg-brand-blue hover:text-brand-white px-1 w-full h-full rounded-3xl border-4 border-brand-blue">
                Other Amount
              </button>
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center p-8 w-full h-auto">
        <div className="w-11/12 min-h-50 md:h-100 bg-brand-liteblue rounded-t-2xl md:rounded-l-2xl md:rounded-t-none p-8 text-brand-white flex flex-col justify-center">
          <h2 className="font-bold text-4xl">The Fight for District 165</h2>
          <p className="pt-4 text-xl">
            <span className="font-bold">Are you in District 165?</span> Our
            district includes the Skidaway, Truman Parkway, Dutch Island, Carver
            Heights, West Savannah and Isle of Hope neighborhoods.
          </p>
        </div>
        <div className="w-11/12 min-h-100 h-100 rounded-2xl">
          <GeorgiaHouse165Map />
        </div>
      </section>
    </div>
  );
}

export default Home;
