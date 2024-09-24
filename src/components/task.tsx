import { ChangeEvent } from "react";
type taskProps = {
    task: string;
    setTask: React.Dispatch<React.SetStateAction<string>>;
    dispatch: React.Dispatch<actionType>;
};
const enum REDUCER_ACTIONS {
    ADD,
    REMOVE,
    CHANGE_CATAGORY
}
export default function Task({ task, setTask, dispatch }: taskProps) {
    function addTask(): void {
        if (task.trim() !== "") {
            dispatch({ type: REDUCER_ACTIONS.ADD, payload: task });
        }
        setTask('')
    }
    return (
        <div className="input-element">
          <div className="form">
              <input
                type="text"
                value={task}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setTask(e.target.value)
                }
                placeholder="Eg:- Go To School"
            />
            <button onClick={addTask}>Add</button>
          </div>
        </div>
    );
}
