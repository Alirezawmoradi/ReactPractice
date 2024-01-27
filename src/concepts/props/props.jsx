import PropsItems from "./props-items.jsx";

const skills = [
    {
        id: 0,
        tech: 'React',
        level: 'junior',
        developer: 'Alireza Moradi',
    },
    {
        id: 1,
        tech: 'flutter',
        level: 'mid-level',
        developer: 'Hamidreza Kamalzadeh',
    },
    {
        id: 2,
        tech: 'C#',
        level: 'senior',
        developer: 'Kamyab Valipour',
    }

]

const Props = () => {
    return (
        <PropsItems skills={skills}/>
    )
}
export default Props;