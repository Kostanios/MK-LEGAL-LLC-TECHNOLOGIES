import React from 'react';
import partners from './partners.module.scss'
const Partners = () => {
    return (
        <div className={partners.container}>
            <div className={partners.locationLink}>
                <div className={partners.location}>
                    {`Оказываем юридические услуги юридическим лицам и индивидуальным предпринимателям. Специализируемся в области хозяйственного права, работаем на всей территории Республики Беларусь, а также за ее пределами, с бизнесом любого масштаба.`}
                </div>
                <div className={partners.link}><label>{`наши партнёры`}</label></div>
            </div>
            <div className={partners.partners}>
                <div className={partners.partnerContainer}>
                    <img src='partners/byArena.png' className={partners.partnerImg}/>
                </div>
                <div className={partners.partnerContainer}>
                    <img src='partners/titan.png' className={partners.partnerImg}/>
                </div>
                <div className={partners.partnerContainer}>
                    <img src='partners/favorit.png' className={partners.partnerImg}/>
                </div>
                <div className={partners.partnerContainer}>
                    <img src='partners/ALFA.png' className={partners.partnerImg}/>
                </div>
                <div className={partners.partnerContainer}>
                    <img src='partners/IBA.png' className={partners.partnerImg}/>
                </div>
            </div>
        </div> 
    )
}
export default Partners;