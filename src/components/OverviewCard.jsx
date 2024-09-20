import upIcon from '../assets/images/icon-up.svg';
import downIcon from '../assets/images/icon-down.svg';

function OverviewCard({card, isDarkMode}) {
  return (
    <div className={
      `${isDarkMode ? 
        `bg-card_dark hover:bg-darkHover`: 
        `bg-card_light hover:bg-lightHover`} 
        cursor-pointer p-8 rounded-sm
      `}>
      <div className="flex justify-between items-center mb-6">
        <p className="font-color_light font-bold">{card.type}</p>
        <img src={card.icon} alt="social media icon" />
      </div>
      <div className="flex justify-between items-end">
        <p className={`${isDarkMode ? `text-white`: `text-black`} text-4xl font-bold`}>
          {card.number}
        </p>
        <div className="flex gap-2 items-center">
          <img 
            src={card.change > 0 ? upIcon : downIcon} 
            alt={`${card.change > 0 ? 'up' : 'down'} arrow icon`}
          />
          <p 
            className={`${card.change > 0 ? `color-up`: `color-down`} text-sm font-bold`}>
              {Math.abs(card.change)}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default OverviewCard;