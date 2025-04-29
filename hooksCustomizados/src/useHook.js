import { useState } from "react";

export function useHook(init = 1) {
    const [count, setCount] = useState(init);

    const handlePlus = () => {
        setCount(count + 1)
        console.log(count)
    }

    const handleMinus = () => {
        setCount(count - 1)
        console.log(count)
    }

    return {
        handlePlus,
        handleMinus,
        count
    }
}
//importante aqui é armazenar a informação que será reultilizada e retorna-la no return
//quando usar o usecontext? quando for reultilizar o valor.
//quando usar o usehook? quando for reultilizar a função.