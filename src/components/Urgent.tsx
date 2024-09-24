
type stateType = {
    id: string;
    task: string | number;
    isComplated: boolean;
    catagory: string;
};
type urgentProps = {
    urgent: stateType[];
};
function Urgent({ urgent }: urgentProps) {
    return (
        <div>
            <p>Urgent</p>
            {urgent.map(task => (
                <div key={task.id}>
                    <p>{task.task}</p>
                </div>
            ))}
        </div>
    );
}
export default Urgent