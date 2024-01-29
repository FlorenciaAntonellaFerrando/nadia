import Swal from "sweetalert2";
import { rootApp } from "../../main";
import usersManager from "../managers/users-manager";
import loginPage from "../pages/login.html?raw";
import { Record } from "./record";



export const login = () => {
    //NO PUSISTE NI UN PUTO COMENTARIO ENTONCES YO TENGO QUE ADIVINAR QUE CARAJO HACE ESTA FUNCION
    //TOMA LOS DATOS DEL MAIL, NOMBRE USUARIO, PASS Y CONFIRMACION. 
    //COMPARA CONTRA USERSMANAGER Y RETORNA UN BOOL
    //TRUE -> LLAMA A ADMISSIONFORM
    //FALSE -> ADVERTENCIA DE ERROR
    rootApp.innerHTML = "";
    rootApp.innerHTML = loginPage;

    let email_address = document.querySelector("#email_address");
    let user_name = document.querySelector("#user_name");
    let password = document.querySelector("#password");
    let loginForm = document.querySelector("#loginForm");
    let linkRecord = document.querySelector("#linkRecord");
    
    loginForm.onsubmit = async (e) => {
        e.preventDefault();
        console.log(email_address.value);
        console.log(user_name.value);
        console.log(password.value);
        const status = await usersManager.loginUser(email_address.value, user_name.value, password.value);
        
        console.log(status);
        if (status) {
            window.location.href = "https://villamaipupilates.netlify.app/";
        } else {
            Swal.fire({
                title: "Email o Contraseña no válido",
            });
        }
    };

    linkRecord.onclick = () => {
        Record();
    };
};
