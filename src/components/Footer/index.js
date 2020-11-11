import React from 'react';
import footer from './footer.module.scss';
import { You, Inst, Vk, Odn, Facebook, Link ,Arrow } from '../Svg/Footer';
import { footerDB } from './const';

const Footer = () => {
    return <div className={footer.container}>
    <div className={footer.company}>
        <p className={footer.companyHeader}>{`ООО “МК-ПРАВОВЫЕ ТЕХНОЛОГИИ”`}</p>
        <div className={footer.unpRating}><label>{`УНП`}</label>{ footerDB.unp }</div>
        <div className={footer.unpRating}><label>{`Наш рейтинг`}</label>{ footerDB.rating }</div>
        <div className={footer.linkContainer}>
            <Vk/>
            <Odn/>
            <Link/>
            <Inst/>
            <You/>
            <Facebook/>
        </div>
        <div className={footer.arrowLink}><label>{`Карта сайта`}</label><Arrow/></div>
        <div className={footer.arrowLink}><label className={footer.politice}>{`Политика конфиденциальности`}</label><Arrow/></div>
    </div>
    <div className={footer.departmentContent}>
        <p className={footer.infoHeader}>{`Наши офисы`}</p>
        <div className={footer.separator}></div>
        <div className={footer.departmentsContainer}>
            <div className={footer.departmentContainer}>
                <p className={footer.department}>{`Контакты в Минске`}</p>
                <p className={footer.phone}>{`+375 (44) 755-01-01`}</p>
                <p className={footer.phone}>{`+375 (29) 550-01-01`}</p>
                <p className={footer.phone}>{`+375 (17) 374-40-60`}</p>
                <p className={footer.adress}>{`Адрес`}</p>
                <p className={footer.adressValue}>{`г. Минск, ул. Широкая, д. 3, пом. 146, оф. 4`}</p>
                <p className={footer.adress}>{`Телефон для связи резидентов Российской Федерации`}</p>
                <p className={footer.phone}>{`whatsapp +7 (989) 166 24 00`}</p>
                <p className={footer.mail}>{`info@jurisprudent.by`}</p>
            </div>
            <div className={footer.departmentGroup}>
                <div className={footer.departmentContainer}>
                    <p className={footer.department}>{`Отдел в Могилеве`}</p>
                    <p className={footer.adress}>{`Адрес`}</p>
                    <p className={footer.adressValue}>{`г. Могилев, ул. Космонавтов, д. 19, оф. 507`}</p>
                    <p className={footer.mail}>{`mogilev@jurisprudent.by`}</p>
                </div>
                <div className={footer.departmentContainer}>
                    <p className={footer.department}>{`Отдел в Бресте`}</p>
                    <p className={footer.adress}>{`Адрес`}</p>
                    <p className={footer.adressValue}>{`г. Брест, б-р Шевченко, д. 4, оф. 401`}</p>
                    <p className={footer.mail}>{`brest@jurisprudent.by`}</p>
                </div>
                <div className={footer.departmentContainer}>
                    <p className={footer.department}>{`Отдел в Витебске`}</p>
                    <p className={footer.adress}>{`Адрес`}</p>
                    <p className={footer.adressValue}>{`г. Витебск, ул.Гоголя, д. 14, оф. 614`}</p>
                    <p className={footer.mail}>{`vitebsk@jurisprudent.by`}</p>
                </div>
            </div>
            <div className={footer.departmentGroup}>
                <div className={footer.departmentContainer}>
                    <p className={footer.department}>{`Отдел в Гродно`}</p>
                    <p className={footer.adress}>{`Адрес`}</p>
                    <p className={footer.adressValue}>{`г. Гродно, ул. Карла Маркса, д. 31-1, оф. 1010`}</p>
                    <p className={footer.mail}>{`grodno@jurisprudent.by`}</p>
                </div>
                <div className={footer.departmentContainer }>
                    <p className={footer.department}>{`Отдел в Гомеле`}</p>
                    <p className={footer.adress}>{`Адрес`}</p>
                    <p className={footer.adressValue}>{`г. Гомель, пр. Ленина, д. 10, оф. 901`}</p>
                    <p className={footer.mail}>{`gomel@jurisprudent.by`}</p> 
                </div>
            </div>
        </div>
    </div>
    <div className={footer.timeContainer}>
        <p className={footer.infoHeader}>{`Время работы`}</p>
        <div className={footer.separator}></div>
            <p className={footer.timeHeader}>{`Прием посетителей`}</p>
            <p className={footer.time}>{`Ежедневно с 8.00 до 19.00 Выходной: суббота - воскресенье.`}</p>
            <p className={footer.timeHeader}>{`Прием звонков`}</p>
            <p className={footer.time}>{`Ежедневно с 8.00 до 22.00 Без выходных`}</p>
            <p className={footer.timeHeader}>{`Онлайн консультант`}</p>
            <p className={footer.time}>{`Круглосуточно 24/7 Без выходных`}</p>
    </div>
    </div>
}

export default Footer;