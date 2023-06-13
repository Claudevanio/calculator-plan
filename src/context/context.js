import { createContext, useState, useEffect, useContext } from "react";
import Family from "../entities/family";

export const FamilyContext = createContext({});

export const useFamily = () => useContext(FamilyContext);

const generateId = () => Math.random() * 10_000_000

export function FamilyContextProvider({ children }) {
    const [family, setFamily] = useState({})
    const [members, setMembers] = useState([])
    const [idMembers, setIdMembers] = useState(1);
    const [countFamilyMembersComponent, setCountFamilyMembersComponent] = useState([{ internalId: generateId() }, { internalId: generateId() }]);

    const createFamily = (nameFamily) => {
        const familyModel = new Family(nameFamily);
        console.log(familyModel)
        setFamily(familyModel);
    }

    const hasThisFamilyMember = (id) => {
        return members.find((member) => member.id === id)
    }




    useEffect(() => {
    }, []);

    return (
        <FamilyContext.Provider
            value={{
                family,
                members,
                idMembers,
                countFamilyMembersComponent,
                setMembers,
                createFamily,
                hasThisFamilyMember,
                setIdMembers,
                setCountFamilyMembersComponent,
                generateId,
                setFamily
            }}
        >
            {children}
        </FamilyContext.Provider>
    );
}
