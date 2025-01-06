import { useState } from "react"
import { Dodawanie } from "./Dodawanie"

export interface Student {
    imie: string,
    nazwisko: string,
    rocznik: number,
}

export const StudentManager = () => {
    const [students, setStudents] = useState<Student[]>([
        {
            imie: "marcin", 
            nazwisko: "marciniak",
            rocznik: 2000
        },
        {
            imie: "grzegorz", 
            nazwisko: "grzegorzewski",
            rocznik: 2002
        },
        {
            imie: "jan", 
            nazwisko: "jankowski",
            rocznik: 1444
        },
    ])

    const handleAddStudent = (newStudent: Student) => {
        setStudents((prevStudents) => [...prevStudents, newStudent]);
      };
    
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", maxHeight: "50vh", overflow: "auto"}}>
        <table>
            <tr>
                <th>Imie</th>
                <th>Nazwisko</th>
                <th>Rocznik</th>
            </tr>
            {students.map((student: Student) => {
                return (
                    <tr>
                        <td>{student.imie}</td>
                        <td>{student.nazwisko}</td>
                        <td>{student.rocznik}</td>
                    </tr>
                )
            })}
        </table>
        <div style={{position: "fixed", bottom: 0, display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Dodawanie onClick={handleAddStudent}/>
        </div>
        </div>
    )
}