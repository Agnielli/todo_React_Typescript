import React from "react"

interface Props {
    subs: Array<{
        nick: string,
        subMonths: number,
        description? : string,
        avatar: string
    }>
}


const List = ({subs}: Props) => {
    return (
      <ul>
        {subs.map(sub => (
          <li key={sub.nick}>
            <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
            <h4>{sub.nick} ({sub.subMonths} meses)</h4>
            <p>{sub.description?.substring(0, 100)}</p>
          </li>
        ))}
      </ul>
    )
}

export default List