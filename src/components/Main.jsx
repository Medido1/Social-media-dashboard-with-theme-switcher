import { useState } from "react";
import DashboardCard from "./DashboardCard";
import {dashboard} from '../../data';

function Main() {
  const [dashboardData, setDasboradData] = useState(dashboard);
  
  return (
    <main className='flex flex-col items-center p-4 -mt-12'>
      <div className="flex flex-col gap-4 items-center">
        {dashboardData.map(card => {
          return <DashboardCard key={card.id} card = {card}/>
        })}
      </div>
    </main>
  )
}

export default Main;