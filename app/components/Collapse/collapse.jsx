const Collapse = ({title, content}) => {

    return (
        <>
        <div tabIndex={0} className="my-2 collapse collapse-arrow bg-white text-black border-collapse border focus:border-red-800 max-w-5xl m-auto">
            <div className="collapse-title">
                {title}
            </div>
            <div className="collapse-content"> 
                <p>{content}</p>
            </div>
        </div>
        </>
    )
}

export default Collapse;