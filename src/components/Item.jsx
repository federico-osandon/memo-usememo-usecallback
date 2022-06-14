import { memo, useEffect } from "react"


const Item = memo(({id, name}) => {

    useEffect(() => {
        // console.log('Item: useEffect')
    })

    return (
        <li>{name}</li>
    )
})

export default Item