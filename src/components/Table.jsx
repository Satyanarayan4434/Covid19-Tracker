import React, { useEffect, useState } from "react";



export const Table = () => {
  const [data, setData] = useState([]);
  let getCovidData = async () => {
    let response = await fetch(
      "https://api.rootnet.in/covid19-in/stats/latest"
    );
    let result = await response.json();
    setData(result.data.regional);
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                State name
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3 text-green-400">
                Recoverd
              </th>
              <th scope="col" className="px-6 py-3 text-red-500">
                Deths
              </th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.loc}
                </th>
                <td className="px-6 py-4">{data.totalConfirmed}</td>
                <td className="px-6 py-4 text-green-400">{data.discharged}</td>
                <td className="px-6 py-4 text-red-500">{data.deaths}</td>
                
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
