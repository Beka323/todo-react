type stateType = {
    id: string;
    task: string | number;
    isComplated: boolean;
    catagory: string;
};
type noturgentProps = {
    noturgent: stateType[];
};
export default function Noturgent({noturgent}:noturgentProps) {
  return (
    <div>
          <div>
          <p>not-urgent</p>
            {noturgent.map(task => (
                <div key={task.id}>
                    <p>{task.task}</p>
                </div>
            ))}
        </div>
    </div>
  )
}