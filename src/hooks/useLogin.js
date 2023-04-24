import {useState} from 'react'

const useLogin = (users) => {
    const [login, setLogin] = useState({name: '', email: '', password: '', balance:''});
    const [indexFound, setIndexFound] = useState(0);

    const setLogOn = (name, nip) =>{
        const found = users.find(element => element.password == nip && element.name == name);
        setIndexFound(users.findIndex(element => element.password == nip && element.name == name));
        console.log(users);
        console.log(found);
        console.log(indexFound);
        setLogin(found);

        return found;
    }

    const setLogOut = () =>{
        setLogin({name: '', email: '', password: '', balance:''});
    }

    return[
        login,
        setLogOn,
        setLogOut,
        indexFound
    ]
}

export default useLogin
