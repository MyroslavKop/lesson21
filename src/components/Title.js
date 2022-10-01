const Title = ({name, type, color = "black"}) => {
    const className = type === "bold" ? "bold" : "normal";
    return (
        <h1 className={className} style ={{color}}>{name}</h1>
    )
};

export default Title