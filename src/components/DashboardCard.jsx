import upIcon from '../assets/images/icon-up.svg';
import downIcon from '../assets/images/icon-down.svg';

function DashboardCard({card, isDarkMode}) {
  return (
    <div 
      className={`${card.borderTop} flex flex-col items-center gap-8 
      w-90vw rounded-sm pt-8 pb-6 max-w-72 ${isDarkMode ? `bg-card_dark` : `bg-card_light`}`}>
      <div className="flex items-center gap-2">
        <img src={card.icon} alt="social media icon"/>
        <p className="font-color_light text-sm font-bold">@nathanf</p>
      </div>
      <div className='flex flex-col items-center'>
        <p className={`text-5xl font-extrabold ${isDarkMode ? `text-white`: `text-black`}`}>
          {card.number}
        </p>
        <p className="font-color_light text-xs tracking-5 uppercase">{card.type}</p>
      </div>
      <div className="flex items-center gap-2">
        <img 
          src={card.change > 0 ? upIcon : downIcon} 
          alt={`${card.change > 0 ? 'up' : 'down'} arrow icon`}
        />
        <p className={`${card.change > 0 ? `color-up` : `color-down`} text-xs font-bold`}>
              {Math.abs(card.change)} today
        </p>
      </div>
    </div>
  )
}

export default DashboardCard;