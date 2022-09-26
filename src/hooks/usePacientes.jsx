import { useContext } from 'react'
import PacientesContext from '../context/pacientesProvider'

const usePacientes = () =>{
    return useContext(PacientesContext)  
}   

export default usePacientes
