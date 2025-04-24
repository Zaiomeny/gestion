import { Edit, Trash } from "lucide-react"
import Deletion from "../Deletion"
import { useState } from "react";

export function ActeurItem({ acteurs, setToUpdate }) {

    return <>
        {
            (acteurs.length > 0) ?
                acteurs.map((acteur) => <ActeurRow acteur={acteur} setToUpdate={setToUpdate} key={acteur.id} />)
                : (
                    <tr>
                        <td colSpan={8} className="text-center !font-extralight">Il y a rien à afficher pour l'instant ...</td>
                    </tr>
                )
        }
    </>
};

function ActeurRow({ acteur, setToUpdate }) {
    const [confirmingDeletion, setConfirmingDeletion] = useState(false);
    const confirmProjetDeletion = () => {
        setConfirmingDeletion(true)
    }
    console.log(confirmingDeletion)
    return <tr key={acteur.id}>
        <td>{acteur.nom_acteur}</td>
        <td>{acteur.prenom}</td>
        <td>{acteur.adresse}</td>
        <td>{acteur.telephone}</td>
        <td>{acteur.CIN}</td>
        <td>
            <div className="flex h-[30px] gap-1 w-full justify-end">
                <button onClick={() => { setToUpdate(acteur) }} className="dark:bg-gray-100/90 bg-gray-200/90  rounded-sm shadow-sm text-green-500 px-1">
                    <Edit />
                </button>
                <button onClick={confirmProjetDeletion} className="dark:bg-gray-100/90 bg-gray-200/90  rounded-sm shadow-sm text-red-600 px-1">
                    <Trash />
                </button>
            </div>
        </td>
        <Deletion route={route('acteur.destroy', { 'acteur_id': acteur.id })} openModal={confirmingDeletion} key={acteur.id}/>
    </tr>
}