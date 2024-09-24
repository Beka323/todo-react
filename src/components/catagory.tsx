import { useState, useEffect } from "react";
import Urgent from "./Urgent.tsx";
import Noturgent from "./Noturgent.tsx";

type stateType = {
    id: string;
    task: string | number;
    isComplated: boolean;
    catagory: string;
};
type stateProps = {
    state: stateType[];
};

export default function Catagory({ state }: stateProps) {
    const [urgent, setUrgent] = useState<stateType[]>([]);
    const [notUrgent, setNotUrgent] = useState<stateType[]>([]);
    const [current, setCurrent] = useState<boolean>(true);

    useEffect(() => {
        function selectCatagory(): void {
            const urgentTask = state.filter(
                state => state.catagory === "urgent"
            );
            const notUrgentTask = state.filter(
                state => state.catagory === "not-urgent"
            );
            setUrgent(urgentTask);
            setNotUrgent(notUrgentTask);
        }

        selectCatagory();
    }, [state]);

    return (
        <div>
            <h3>Catagory</h3>
            <div>
                <button onClick={() => setCurrent(true)}>urgent</button>
                <button onClick={() => setCurrent(false)}>Not-urgent</button>
            </div>
            <div>
                {current ? (
                    <Urgent urgent={urgent} />
                ) : (
                    <Noturgent noturgent={notUrgent} />
                )}
            </div>
        </div>
    );
}
