import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PlayerSkillField from './PlayerSkillField';

type PlayerSkill = {
    value: number;
    Skill: {
        id: number;
        name: string;
        Specialization: {
            name: string;
        } | null;
    };
};

export default function PlayerSkillContainer({ skills }: { skills: PlayerSkill[] }) {
    const [search, setSearch] = useState('');

    return (
        <>
            <Row className='mb-3'>
                <Col>
                    <Form.Control className='theme-element' placeholder='Procurar'
                        value={search} onChange={ev => setSearch(ev.currentTarget.value)} />
                </Col>
            </Row>
            <Row className='mb-3 mx-1 text-center justify-content-center'>
                {skills.map(skill => {
                    if (skill.Skill.name.toLowerCase().includes(search.toLowerCase())) return (
                        <PlayerSkillField key={skill.Skill.id} value={skill.value}
                            skill={skill.Skill} />
                    );
                    return null;
                })}
            </Row>
        </>
    );
}