import { FC } from "react"
import { Circle } from "../Circle/Circle"
import { Cross } from "../Cross/Cross"

export const Filler: FC<Props> = ({ fillerValue }) => {
    return (
        <div>
            {fillerValue === 'none'
                ? <div></div>
                : fillerValue === 'circle'
                    ? <Circle />
                    : <Cross />}
        </div>
    )
}

type Props = {
    fillerValue: string
}