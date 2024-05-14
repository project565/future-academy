"use client"
import { Dispatch, MutableRefObject, SetStateAction } from "react";

type studentProps = {
    student: boolean
    studentArray: never[]
    setStudentArray: Dispatch<SetStateAction<never[]>>
}

function Student({student, studentArray, setStudentArray}: studentProps) {
    const deleteStudent = (index: number) => {
        const newStudent = [...studentArray]
        newStudent.splice(index, 1)
        setStudentArray([newStudent])
    }
    return (
        <div className={student? "student-section" : "student-section closeStudent"}>
            <h2>Students information</h2>
            <hr />
            <div className="student-box">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {studentArray.map((student, index) => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <tr key={index}>
                                        <th>{student.studentName}</th>
                                        <th>{student.studetnAge}</th>
                                        <th>{student.studentAddress}</th>
                                        <th>
                                            <button>EDIT</button>
                                            <button onClick={() => deleteStudent(index)}>DELETE</button>
                                        </th>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student;