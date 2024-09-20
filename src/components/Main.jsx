import { useState } from "react";
import DashboardCard from "./DashboardCard";
import OverviewCard from "./OverviewCard";
import {dashboard, overview} from '../../data';

function Main({isDarkMode}) {
  const [dashboardData, setDasboradData] = useState(dashboard);
  const [overviewData, setOverview] = useState(overview);
  
  return (
    <main className='flex flex-col p-4 -mt-12'>
      <div className="flex flex-col gap-4 items-center">
        {dashboardData.map(card => {
          return <DashboardCard 
            key={card.id} 
            card = {card}
            isDarkMode = {isDarkMode}
            />
        })}
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-color_light font-bold mb-4">Overview - Today</h2>
        <div className="flex flex-col gap-4">
          {overviewData.map(card => {
            return <OverviewCard 
              key={card.id} 
              card={card}
              isDarkMode={isDarkMode}
              />
          })}
        </div>
      </div>
    </main>
  )
}

export default Main;