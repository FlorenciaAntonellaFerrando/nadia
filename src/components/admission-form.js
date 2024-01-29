import { rootApp } from "../../main";
import usersManager from "../managers/users-manager";
import admissionFormPage from "../pages/admission-form.html?raw";
import { login } from "./login";
import Swal from "sweetalert2";

export const AdmissionForm = (email) => {

    rootApp.innerHTML = "";
    rootApp.innerHTML = admissionFormPage;
    let admissionFrom = document.querySelector('#formAdmission');


    admissionFrom.onsubmit = async (e) => {
        e.preventDefault();

        let radios = document.querySelectorAll('input[type="radio"]');
        
        let boolRadios = [];

        for (const radio of radios) {
            if (radio.checked) {
              boolRadios.push(radio.value);
            }
          }

        const status = usersManager.recordAdmission(email, boolRadios);

        console.log(status);
        if (status) {
            Swal.fire({
                title: "Bienvenido, registro completo!",
            });
            login();
        } else {
            Swal.fire({
                title: "Error en carga de datos",
            });
        }
    };

}