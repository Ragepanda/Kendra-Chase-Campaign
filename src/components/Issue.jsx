import { useState } from "react";

function Issue({ issueId, title, paragraphs, proposals }) {
  const [showProposal, setShowProposal] = useState(false);
  return (
    <div className="flex flex-col  bg-brand-white rounded-2xl p-8 gap-8">
      <h1
        id={issueId}
        className="text-center text-5xl sm:text-7xl text-brand-blue font-bold"
      >
        {title}
      </h1>
      {paragraphs.map((paragraph) => (
        <p className="text-xl">{paragraph}</p>
      ))}
      {proposals.length > 0 ? (
        <button
          className="h-15 w-full md:w-2/3 fill-brand-white hover:fill-brand-green bg-brand-green hover:bg-brand-white text-brand-white hover:text-brand-green hover:border-4 hover:border-brand-green rounded-2xl self-center flex justify-between items-center px-12"
          onClick={() => {
            setShowProposal(!showProposal);
          }}
        >
          <span className="font-bold text-xl">My Proposals</span>
          {showProposal ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="28"
              width="28"
              viewBox="0 0 640 640"
            >
              <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 448 512"
            >
              <path d="M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
          )}
        </button>
      ) : (
        ""
      )}
      {showProposal ? (
        <ul className="list-[circle] text-xl marker:text-brand-blue px-8 self-start">
          {proposals.map((proposal) => (
            <li className="mb-2">{proposal}</li>
          ))}
          {/* <li className="mb-2">
            Allow cities to enact rent control policies to combat skyrocketing
            housing costs.
          </li>
          <li className="mb-2">
            End no-cause evictions and impose stricter penalties for predatory
            landlords.
          </li>
          <li className="mb-2">
            Invest in high-quality, state-funded affordable housing with
            long-term stability for families.
          </li>
          <li className="mb-2">
            Create stronger regulations to keep our housing livable, clean, and
            safe.
          </li>
          <li className="mb-2">
            Make it easier to rent by reducing income requirements to qualify
            for an apartment, ending application fees, and limiting security
            deposits.
          </li>
          <li className="mb-2">
            Prevent private equity firms and exploitive businesses from buying
            up homes.
          </li>
          <li className="mb-2">
            Give renters a seven-day curing period if they are late on rent.
          </li>
          <li className="mb-2">
            Support land trusts, co-ops, flexible zoning, and audit housing
            programs for equity and access.
          </li>
          <li className="mb-2">
            Require community benefit agreements and stop public land giveaways
            without inclusive input.
          </li>
          <li className="mb-2">
            Ensure ADA-compliant housing and infrastructure to support disabled
            residents.
          </li> */}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default Issue;
