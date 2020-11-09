import React from 'react';
import skill from './skill.module.scss';
import { SkillsDB } from './const';
import { Triangle } from '../Svg/Triangle';
const Skill = () => {
    const cards = SkillsDB.map((e)=>{
        return <div className={skill.card}>
            <div className={skill.logo}>
                <e.logo/>
            </div>
            <p className={skill.text}>{e.text}</p>
        </div>
    })
    return (
        <div className={skill.container}>
            <div className={skill.header}></div>
            <div className={skill.cards}>
                {cards}
            </div>
            <div className={skill.labelCard}>
                <p className={skill.allSkills}>{`Юристы нашей компании готовы дать четкие, основанные на фактах, консультации, касающиеся и «типовой», и нестандартной ситуации, опираясь на сложившуюся служебную практику и многолетний опыт. Мы объективно оцениваем риски и тщательно анализируем каждый случай.`}</p>
                <div className={skill.label}><Triangle/></div>
            </div>
        </div>
    )
}
export default Skill;