"use client";
import { Dispatch, SetStateAction, useState } from "react";

type studentProps = {
    addStudent: boolean
    setAddStudent: Dispatch<SetStateAction<boolean>>
    student: boolean
    setStudent: Dispatch<SetStateAction<boolean>>
}

function Header({addStudent, setAddStudent, student, setStudent}: studentProps) {
    const openAdd = () => {
        setStudent(false)
        setAddStudent(true)
    }
    const Student = () => {
        setAddStudent(false)
        setStudent(true)
    }
    return (
        <>
            <nav>
                <div className="left-side">
                    <h2>Future - Academy</h2>
                </div>
                <div className="right-side">
                    <button onClick={openAdd}>Add New Student</button>
                    <button onClick={Student}>Students</button>
                </div>
            </nav>
        </>
    )
}

export default Header;