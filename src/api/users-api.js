// Obtener todos los usuarios - Método GET
const getUsers = async () => {
    const resp = await fetch("http://localhost:3000/users");
    const data = await resp.json();
    console.log(data);
    return data;
    
}

// Registrar un usuario - Método POST
const recordUser = async (user) => {
    const resp = await fetch("http://localhost:3000/users", {
        method: "POST",  // Indicamos que va a hacer una petición http POST
        body: JSON.stringify(user), // En body pasamos los datos que vamos a enviar al la base de datos y lo trasformamos a JSON
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await resp.json();
    console.log(data);
    return data;
}

// Registrar RESPUESTAS - Método POST
const recordAdmission = async (admission) => {
    const resp = await fetch("http://localhost:3000/admission", {
        method: "POST",  // Indicamos que va a hacer una petición http POST
        body: JSON.stringify(admission), // En body pasamos los datos que vamos a enviar al la base de datos y lo trasformamos a JSON
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const data = await resp.json();
    console.log(data);
    return data;
}

export default {
    getUsers,
    recordUser,
    recordAdmission
}