import { useHook } from "../../useHook";

export default function Buttons() {
    const {count, handleMinus, handlePlus} = useHook(1); // aqui o valor inicial é 1, mas poderia ser qualquer valor, o importante é que ele seja reultilizado

    return (
        <>
            <button onClick={handlePlus}>+</button>
            {count}
            <button onClick={handleMinus}>-</button>
        </>
    )
}