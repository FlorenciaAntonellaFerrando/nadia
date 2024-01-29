import { rootApp } from "../../main";
import usersManager from "../managers/users-manager";
import recordPage from "../pages/record.html?raw";
import { AdmissionForm } from "./admission-form";

export const Record = () => {
    //llama a la pag de registro y toma los datos de usuario
    //lo guarda en el server y devueve un true que llama a la funcion login
    rootApp.innerHTML = "";
    rootApp.innerHTML = recordPage;
    
    let name = document.querySelector("#name");
    let surname = document.querySelector("#surname");
    let brithdate = document.querySelector("#brithdate");
    let age = document.querySelector("#age");
    let address = document.querySelector("#address");
    let phoneNumber = document.querySelector("#phoneNumber");
    let email_address = document.querySelector("#email_address");
    let user_name = document.querySelector("#user_name");
    let password = document.querySelector("#password");
    let confirm_password = document.querySelector("#confirm_password");
    let formRecord = document.querySelector("#formRecord");

    formRecord.onsubmit = (e) => {
        e.preventDefault();
        const status = usersManager.recordUser(name.value, surname.value, brithdate.value, age.value, address.value, phoneNumber.value, email_address.value, user_name.value, password.value, confirm_password.value);
        //como recupero a este usuario para pasar como parametro al mismo. O pasar el id de ese usuario.
        if (status) {
            AdmissionForm(email_address.value);
        }
    }

}