import { useState } from "react" 
interface stateProps {
    id: string;
    task: string | number;
    isComplated: boolean;
    catagory: string;
}

interface stateProps {
    dispatch: React.Dispatch<actionType>;
}
const enum REDUCER_ACTIONS {
    ADD,
    REMOVE,
    CHANGE_CATAGORY,
    CLEAR_All,
    DONE
}

export default function Tasklist({
    id,
    task,
    isComplated,
    catagory,
    dispatch
}: stateProps) {
    function deleteTask(id: string): void {
        dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: id });
    }
    const [isNotUrgent,setIsNotUrgent] = useState<boolean>(true)
    
    let complated = isComplated ? "complated" : "not-complated";
    let isUrgent = isNotUrgent ? "not-urgent" : "urgent"
    
    function handleCheckBoxChange(id: string) {
        dispatch({ type: REDUCER_ACTIONS.DONE, payload: id });
    }
    function handleCatagoryEvent(id: string) {
        dispatch({ type: REDUCER_ACTIONS.CHANGE_CATAGORY, payload: id });
        setIsNotUrgent(!isNotUrgent)
    }
    return (
        <div className="task">
            <div className="todo">
                <span>
                    <input
                    className="checked"
                        type="checkbox"
                        checked={isComplated}
                        onChange={() => handleCheckBoxChange(id)}
                    />
                    <label className={complated}>{task}</label>
                </span>
                <button onClick={() => deleteTask(id)}>&times;</button>
            </div>
            <p className={isUrgent} onClick={() => handleCatagoryEvent(id)}>{catagory}</p>
        </div>
    );
}
