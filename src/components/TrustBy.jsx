import React from "react";
import { company_logos } from "../assets/assets";

const TrustBy = () => {
  return (
    <div>
      <h3 className="font-semibold text-center">Trusted by leading companies</h3>
      <div className="flex items-center justify-center flex-wrap gap-10 m-4">
        {company_logos.map((item , index)=>(
            <img src={item} alt="" className="max-h-5 sm:max-h-6 dark:drop-shadow-xl" />
        ))}
      </div>
    </div>
  );
};

export default TrustBy;
