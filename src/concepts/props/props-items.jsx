const PropsItems = ({skills}) => {
    return (
        <div>
            <ul>
                {
                    skills.map((detail) => {
                        return (
                            <li key={detail.id}>
                                <span>
                                    {detail.developer}
                                </span>
                                <span>
                                    {detail.tech}
                                </span>
                                <span>
                                    {detail.level}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default PropsItems;