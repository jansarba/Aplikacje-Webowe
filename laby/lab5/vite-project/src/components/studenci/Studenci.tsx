interface Student {
    imie: string,
    nazwisko: string,
    rocznik: number,
}

export const Studenci = () => {
    const Students: Student[] = [
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
    ]
    return (
        Students.map((student) => (
            <tr>
                <th>{student.imie}</th>
                <td>{student.nazwisko}</td>
                <td>{student.rocznik}</td>
            </tr>
        ))
    )
}