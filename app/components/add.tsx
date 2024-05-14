"use client";

import { Dispatch, MutableRefObject, SetStateAction } from "react";

type studentProps = {
    addStudent: boolean
    inputAge: MutableRefObject<null>
    inputAddress: MutableRefObject<null>
    inputName: MutableRefObject<null>
    studentArray: never[]
    setStudentArray:  Dispatch<SetStateAction<never[]>>
}

function Add({addStudent, inputName, inputAge, inputAddress, studentArray, setStudentArray}: studentProps) {
    
    const addToStudentArray = () => {
        const newStudentArray = {
            studentName: inputName.current?.value,
            studetnAge : inputAge.current?.value,
            studentAddress: inputAddress.current?.value,
        }
        setStudentArray([...studentArray, newStudentArray])
        inputName.current.value = ""
        inputAge.current.value = ""
        inputAddress.current.value = ""
    }

    return (
        <div className={addStudent? "add-section open" : "add-section"}>
        <div className="input-container">
            <h2>Add New Student</h2>
            <div className="input-box">
            <input ref={inputName} type="text" placeholder="Name"/>
            <input ref={inputAge} type="text" placeholder="Age"/>
            <input ref={inputAddress} type="text" placeholder="Address"/>
            <button onClick={addToStudentArray}>Add</button>
            </div>
        </div>
        </div>
    )
}

export default Add;