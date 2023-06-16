import { createContext, useState, useEffect, useContext } from "react";
import Family from "../entities/family";
import { Storage } from "../component/utils/Storage";

export const FamilyContext = createContext({});

export const useFamily = () => useContext(FamilyContext);

const generateId = () => Math.random() * 10_000_000;

export function FamilyContextProvider({ children }) {
  const [family, setFamily] = useState({});
  const [members, setMembers] = useState([
    { id: generateId() },
    { id: generateId() },
  ]);
  const [datas, setDatas] = useState([
    {
      stepper: "mediaBalance",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
    {
      stepper: "communicatingAboutMedia",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
    {
      stepper: "kindnessEmpathy",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
    {
      stepper: "digitalPrivacySafety",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
    {
      stepper: "screenFreeZones",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
    {
      stepper: "screenFreeTimes",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
    {
      stepper: "chosingGoodContent",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
    {
      stepper: "usingMediaTogether",
      text: [
        "Planning a screen-free activity to do together as a family every day.",
        "Tracking online activities and talking about which activities may be taking up too much time.",
        "Making a habit of turning off media that’s not being used by anyone.",
        "Participating in other activities available in our community.",
        "Having fewer apps on our devices.",
        "Setting lock-screen reminders.",
        "Filling our child's days with more play than media.",
        "Setting media time limits.",
        "Making sure screen time doesn't interfere with physical activity and healthy eating.",
        "Preventing unhealthy video gaming habits.",
        "Realizing when we turn to media to dull our own emotions, and finding healthier ways to cope.",
      ],
    },
  ]);
  const [activeStep, setActiveStep] = useState(2);
  const [validation, setValidation] = useState(false)

  const [idMembers, setIdMembers] = useState(1);
  const [countFamilyMembersComponent, setCountFamilyMembersComponent] =
    useState([{ id: generateId() }, { id: generateId() }]);
  const [isDisableNextButton, setIsDisableNextButton] = useState(false);

  const createFamily = (nameFamily) => {   
    const familyModel = new Family(nameFamily);
    setFamily(familyModel);
    console.log(family);
  };

  const hasThisFamilyMember = (id) => {
    return members.some((member) => member.id === id);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const stepFamilyValid = () => {
    debugger
    let hasEmptyNameMember;
   
    hasEmptyNameMember = members.some((member) => member.nameMember === "");
    if(activeStep === 12){     
      
      return  setValidation(true)
    }
    if(activeStep === 2 && !family.nameFamily && hasEmptyNameMember){
      
      return  setValidation(true)
    }
    return validation
  }

  const setLocalStorage = (data) => {
    debugger;
    if (data) {
      Storage.set("family", data);
    }
  };

  const getLocalStorage = () => {
    debugger;
    const family = Storage.get("family");
    if (family) {
      setFamily(family);

      const updatedMembers = family.familyMembers.map((member) => member);
      if (updatedMembers) setMembers(updatedMembers);
    }
  };


  const disableNextButton = () => {
    let hasEmptyNameMember;

    if (members && family) {
      hasEmptyNameMember = members.some((member) => member.nameMember === "");
    }

    if (hasEmptyNameMember) {
    }
  };

  //   // Adicione uma página em branco ao documento
  //   const page = pdfDoc.addPage();

  //   // Defina a fonte e o tamanho do texto
  //   const font = pdfDoc.embedFont(StandardFonts.Helvetica);
  //   const fontSize = 12;

  //   // Defina a posição inicial do texto
  //   let x = 50;
  //   let y = page.getSize().height - 50;

  //   // Escreva o nome do membro na página
  //   page.drawText(member.name, { x, y, font, fontSize });
  //   page.drawText(family.nameFamily, { x, y, font, fontSize });

  //   // page.drawText("Media Balance", { x, y, font, fontSize });
  //   // for (let index = 0; index <= member.mediaBalance.length; index++) {
  //   //   page.drawText(member.mediaBalance[index], { x, y, font, fontSize });
  //   // }

  //   // page.drawText("Communicating About Media", { x, y, font, fontSize });
  //   // for (
  //   //   let index = 0;
  //   //   index <= member.communicatingAboutMedia.length;
  //   //   index++
  //   // ) {
  //   //   page.drawText(member.communicatingAboutMedia[index], {
  //   //     x,
  //   //     y,
  //   //     font,
  //   //     fontSize,
  //   //   });
  //   // }

  //   // page.drawText("Kindness & Empathy", { x, y, font, fontSize });
  //   // for (let index = 0; index <= member.kindnessEmpathy.length; index++) {
  //   //   page.drawText(member.kindnessEmpathy[index], { x, y, font, fontSize });
  //   // }

  //   // page.drawText("Kindness & Empathy", { x, y, font, fontSize });
  //   // for (let index = 0; index <= member.kindnessEmpathy.length; index++) {
  //   //   page.drawText(member.kindnessEmpathy[index], { x, y, font, fontSize });
  //   // }

  //   // Salve o documento PDF como um ArrayBuffer
  //   const pdfBytes = await pdfDoc.save();

  //   // Crie um Blob a partir do ArrayBuffer
  //   const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

  //   // Faça o download do arquivo PDF
  //   const downloadLink = document.createElement("a");
  //   downloadLink.href = URL.createObjectURL(pdfBlob);
  //   downloadLink.download = "member.pdf";
  //   downloadLink.click();
  // };

  useEffect(() => {
    debugger;
    getLocalStorage();
  }, []);


  useEffect(() => {
    console.log(family);
    console.log(members);
  }, [activeStep]);

  useEffect(() => {
    stepFamilyValid()
  }, [family, members]);



  // useEffect(() => {
  //   debugger;
  //   disableNextButton();
  // }, []);


  return (
    <FamilyContext.Provider
      value={{
        family,
        members,
        idMembers,
        countFamilyMembersComponent,
        isDisableNextButton,
        datas,
        activeStep,
        validation,
        setIsDisableNextButton,
        setMembers,
        setFamily,
        createFamily,
        hasThisFamilyMember,
        setIdMembers,
        setCountFamilyMembersComponent,
        generateId,
        handleNext,
        handleBack,
        setActiveStep,
        stepFamilyValid,
        setLocalStorage
      }}
    >
      {children}
    </FamilyContext.Provider>
  );
}
