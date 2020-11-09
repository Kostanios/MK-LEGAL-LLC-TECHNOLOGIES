import React from 'react';
import guarantees from './guarantees.module.scss';
import { Triangle } from '../Svg/Triangle';
const Guarantees = () => {
    return <div className={guarantees.container}>
        <div className={guarantees.promises}>
            <div className={guarantees.sampleBlock}>
                <p className={guarantees.header}>{`Надежно защитим права и интересы`}</p>
                <p className={guarantees.text}>{`В своей практике, мы дотошно соблюдаем законность, учитываем сложившуюся правовую практику и правила юридической этики. Мы считаем, что в поддержке бизнеса важно учитывать конкретные проблемы клиента и строить сотрудничество по принципу тщательного изучения всех нюансов возникшей ситуации. Всегда честны и объективны.`}</p>
            </div>
            <div className={guarantees.sampleBlock}>
                <div className={guarantees.label}><Triangle/></div>
                <p className={guarantees.header}>{`Надежно защитим права и интересы`}</p>
                <p className={guarantees.text}>{`Заказав комплексные юридические услуги в ООО «МК-Правовые технологии», можно больше не платить зарплату штатному юристу, страховые отчисления и налоги с его доходов. Можно не оплачивать отпуск, больничные и не беспокоиться о нахождении работника на рабочем месте в нужный момент.`}</p>
            </div>
        </div>
        <div className={guarantees.longBlock}>
            <h1>{`Вы платите только за результат!`}</h1>
            <p>{`В своей практике, мы дотошно соблюдаем законность, учитываем сложившуюся правовую практику и правила юридической этики. Мы считаем, что в поддержке бизнеса важно учитывать конкретные проблемы клиента и строить сотрудничество по принципу тщательного изучения всех нюансов возникшей ситуации. Всегда честны и объективны.`}</p>
        </div>
    </div>
}

export default Guarantees;
