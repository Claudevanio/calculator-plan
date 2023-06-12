import { createContext, useState, useEffect, useContext } from "react";
import Family from "../entities/family";

export const FamilyContext = createContext({});

export const useFamily = () => useContext(FamilyContext);

export function FamilyContextProvider({ children }) {
    const [family, setFamily] = useState({})
    const [members, setMembers] = useState([])
    const [idMembers, setIdMembers] = useState(1);

    const createFamily = (nameFamily) => {
        const familyModel = new Family(nameFamily);
        console.log(familyModel)
        setFamily(familyModel);
    }

    const hasThisFamilyMember = (id) => {
        for (let i = 0; i < members.length; i++) {
            if (members[i].id === id) {
                return true;
            }
        }
        return false;
    }




    useEffect(() => {
    }, []);

    return (
        <FamilyContext.Provider
            value={{
                family,
                members,
                setMembers,
                createFamily,
                hasThisFamilyMember,
                idMembers,
                setIdMembers
            }}
        >
            {children}
        </FamilyContext.Provider>
    );
}
