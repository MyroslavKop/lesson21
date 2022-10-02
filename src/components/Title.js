const Title = ({title, type, color = "black"}) => {
    const className = type === "bold" ? "bold" : "normal";
    return (
        <h1 className={className} style ={{color}}>{title}</h1>
    )
};

export default Title