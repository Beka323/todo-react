import { useReducer, useState } from "react";
import Task from "./task.tsx";
import Tasklist from "./tasklist.tsx";
import Catagory from "./catagory.tsx";
import { nanoid } from "nanoid";
type stateType = {
    id: string;
    task: string | number;
    isComplated: boolean;
    catagory: string;
};
const enum REDUCER_ACTIONS {
    ADD,
    REMOVE,
    CHANGE_CATAGORY,
    CLEAR_All,
    DONE
}

type actionType = {
    type: REDUCER_ACTIONS;
    payload?: string | number;
};

const initialState: stateType[] = [];

function reducer(state: stateType[], action: actionType): stateType[] {
    switch (action.type) {
        case REDUCER_ACTIONS.ADD:
            return [
                ...state,
                {
                    id: nanoid(),
                    task: action.payload ?? "",
                    isComplated: false,
                    catagory: "not-urgent"
                }
            ];
        case REDUCER_ACTIONS.REMOVE:
            let removedTask = state.filter(
                tasks => tasks.id !== action.payload
            );
            return removedTask;
        case REDUCER_ACTIONS.CLEAR_All:
            return [];
        case REDUCER_ACTIONS.CHANGE_CATAGORY:
            let changeCatagory = state.map(task => {
                if (action.payload === task.id) {
                    return {
                        ...task,
                        catagory:
                            task.catagory === "not-urgent"
                                ? "urgent"
                                : "not-urgent"
                    };
                }
                return task;
            });
            return changeCatagory;
        case REDUCER_ACTIONS.DONE:
            return state.map(task => {
                if (task.id === action.payload) {
                    return {
                        ...task,
                        isComplated: task.isComplated ? false : true
                    };
                }
                return task;
            });
        default:
            return state;
    }
}

export default function Todo() {
    const [task, setTask] = useState<string>("");
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <Task task={task} setTask={setTask} dispatch={dispatch} />
            <button
                className="clear-all"
                onClick={() => dispatch({ type: REDUCER_ACTIONS.CLEAR_All })}
            >
                clear All
            </button>
            <div className="task-list">
                {state.length === 0 ? (
                    <p className="message">No Task Listed</p>
                ) : (
                    <div>
                        {state.map((todo: stateType) => (
                            <Tasklist
                                {...todo}
                                dispatch={dispatch}
                                key={todo.id}
                            />
                        ))}
                    </div>
                )}
            </div>
            <Catagory state={state} />
        </>
    );
}
