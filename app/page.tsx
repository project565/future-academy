"use client"
import Image from "next/image";
import styles from "./page.module.css"
import Link from "next/link";
import { useRef, useState } from "react";
import Header from "./components/header";
import Add from "./components/add";
import Student from "./components/students";

export default function Home() {
  const [addStudent, setAddStudent] = useState(false)
  const [student, setStudent] = useState(true)
  const [studentArray, setStudentArray] = useState([])
  const inputName = useRef(null)
  const inputAge = useRef(null)
  const inputAddress = useRef(null)
  return (
    <main>
      <Header addStudent={addStudent} setAddStudent={setAddStudent} student={student} setStudent={setStudent} />
      <Add studentArray={studentArray} setStudentArray={setStudentArray} inputName={inputName} inputAge={inputAge} inputAddress={inputAddress} addStudent={addStudent} />
      <Student studentArray={studentArray} setStudentArray={setStudentArray} student={student}/>
    </main>
  );
}
