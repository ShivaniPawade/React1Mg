import React, { useState } from 'react'
import '../hrManagement/Employees.css'
import { Delete, Edit, View, callCompleted, callDeclined, callDispatched, callRequest } from '../../assets'
import { IoEye } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
import NavbarCards from '../layout/NavbarCards';
import DownloadButton from '../commonComponents/DownloadButton';
import NormalPagination from '../commonComponents/NormalPagination';
const HrManagement = () => {
    const [employeeData, setemployeeData] = useState([
        {
            sno: 1, name: "Mr. Aditya V", empno: "1MG-5489", type: "Driver", site: "Gurgaon", spoc: "10-11-2023", vehicalno: "BH05DS2145", paramedic: "Sandeep C", icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 2, name: "Mr. Aditya V", empno: "1MG-5489", type: "Driver", site: "Gurgaon", spoc: "10-11-2023", vehicalno: "BH05DS2145", paramedic: "Sandeep C", icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 3, name: "Mr. Aditya V", empno: "1MG-5489", type: "Driver", site: "Gurgaon", spoc: "10-11-2023", vehicalno: "BH05DS2145", paramedic: "Sandeep C", icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 4, name: "Mr. Aditya V", empno: "1MG-5489", type: "Driver", site: "Gurgaon", spoc: "10-11-2023", vehicalno: "BH05DS2145", paramedic: "Sandeep C", icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 5, name: "Mr. Aditya V", empno: "1MG-5489", type: "Driver", site: "Gurgaon", spoc: "10-11-2023", vehicalno: "BH05DS2145", paramedic: "Sandeep C", icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 6, name: "Mr. Aditya V", empno: "1MG-5489", type: "Driver", site: "Gurgaon", spoc: "10-11-2023", vehicalno: "BH05DS2145", paramedic: "Sandeep C", icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 7, name: "Mr. Aditya V", empno: "1MG-5489", type: "Driver", site: "Gurgaon", spoc: "10-11-2023", vehicalno: "BH05DS2145", paramedic: "Sandeep C", icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 8, name: "Mr. Aditya V", empno: "1MG-5489", type: "Driver", site: "Gurgaon", spoc: "10-11-2023", vehicalno: "BH05DS2145", paramedic: "Sandeep C", icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 9, name: "Mr. Aditya V", empno: "1MG-5489", type: "Driver", site: "Gurgaon", spoc: "10-11-2023", vehicalno: "BH05DS2145", paramedic: "Sandeep C", icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
        {
            sno: 10, name: "Mr. Aditya V", empno: "1MG-5489", type: "Driver", site: "Gurgaon", spoc: "10-11-2023", vehicalno: "BH05DS2145", paramedic: "Sandeep C", icon1: <IoEye />, icon2: <BiEditAlt />, imageUrl: Delete
        },
    ])
    const [cards, setcards] = useState([
        {

            icon: callRequest,
            title: "Total Employees",
            value: 2400,
            share: 9.5,
        },
        {
            icon: callDispatched,
            title: "Total Active",
            value: 2100,
            share: 9.5,
        },
        {
            icon: callCompleted,
            title: "Total on Leave",
            value: 2050,
            share: 9.5,
        },
        {
            icon: callDeclined,
            title: "Total Standby",
            value: 150,
            share: 9.5,
        }

    ])
    return (
        <>
            <div className="d-flex justify-content-between pb-3">
                {
                    cards.map((item) => {
                        return (<div className="">
                            <NavbarCards item={item} />
                        </div>)
                    })
                }
            </div>
            <div className='common-border w-100 h-100 py-3 px-4 '>

                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex  gap-4'>
                        <h2 className='employee-list mb-0'>Employee List</h2>
                        <DownloadButton />
                    </div>
                    <button className='button-text add-employee '>Add Employee</button>
                </div>
                {/* ------ table ------ */}
                <table className='my-3'>
                    <thead>
                        <tr>
                            <th >S. No</th>
                            <th>Name</th>
                            <th>EMP No.</th>
                            <th>Type</th>
                            <th>Site</th>
                            <th>SPOC</th>
                            <th>Vehical Number</th>
                            <th>Paramedic</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeeData.map((employee) => {
                            return (
                                <tr key={employee.sno}>
                                    <td>{employee.sno}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.empno}</td>
                                    <td>{employee.type}</td>
                                    <td>{employee.site}</td>
                                    <td>{employee.spoc}</td>
                                    <td className='text-success'>{employee.vehicalno}</td>
                                    <td>{employee.paramedic}</td>
                                    <td><div className='d-flex align-items-center justify-content-center gap-1'><button className='eye'>{employee.icon1}</button><button className='edit'>{employee.icon2}</button>
                                        <button className='delete'><img className='img-delete' src={employee.imageUrl}></img></button></div></td>
                                </tr>
                            )
                        })}

                    </tbody>

                </table>
                <div className='me-auto'>                    
                <NormalPagination/>
                </div>
            </div>
        </>
    )
}

export default HrManagement