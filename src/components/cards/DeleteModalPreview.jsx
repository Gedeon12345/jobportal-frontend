

const DeleteModalPreview = ({ handleClose, handleDeleteJob }) => {
    return (
        <div>
            <div className="">
                <h1>Are you sure you want to delete this job ?</h1>
                <div className="">
                    <button
                        onClick={handleDeleteJob} 
                        className="mr-6"
                    >
                        Yes
                    </button>
                    <button
                        onClick={handleClose} 
                        className=""
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModalPreview;