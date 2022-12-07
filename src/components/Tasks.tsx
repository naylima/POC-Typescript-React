function Tasks <ListType> ({
    list, render
} : {
    list: ListType[];
    render: (task: ListType) => React.ReactNode;
}) {
    return(
        <ul>
        {list.map((task) => {
            return render(task)
        })}
        </ul>
    )
}

export default Tasks;