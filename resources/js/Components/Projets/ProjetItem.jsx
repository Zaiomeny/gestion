import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link, useForm } from "@inertiajs/react";
import { Trash, Edit, LucideMessageSquareWarning, LoaderCircle } from "lucide-react";
import { useState } from "react";
export function ProjetItem({ projet, setToUpdate }) {
    const [confirmingProjetDeletion, setConfirmingProjetDeletion] = useState(false);

    const confirmProjetDeletion = () => {
        setConfirmingProjetDeletion(true)
    }
    const closeModal = () => {
        setConfirmingProjetDeletion(false)
    }
    const { delete: destroy, processing } = useForm();
    const handleDelete = (e) => {
        e.preventDefault(),
            destroy(route('projet.destroy', projet.id), {
                preserveScroll: true,
                onSuccess: () => closeModal(),
            })
    }

    return <>
        <tr>
            <td> {projet.nom_projet}</td>
            <td> {projet.budget} Ariary</td>
            <td className="text-center"> {projet.annee}</td>
            <td> {projet.date_du_debut}</td>
            <td>
                <div className="flex h-[28px] gap-1 w-full justify-end">
                    <Link
                        href={route('acteurs.index', projet.id)}>
                        <PrimaryButton className="mx-1 w-[120px] justify-between">
                        Acteur{(projet.acteurs_count > 0) ? 's' : ''}
                            <span className="bg-blue-600 dark:bg-blue-500 ml-1 rounded-sm border border-gray-200 text-white px-1 py-0 text-center">{projet.acteurs_count} </span>
                        </PrimaryButton>
                    </Link>
                    <button onClick={() => { setToUpdate(projet) }} className="dark:bg-blue-300 hover:bg-green-400 dark:hover:bg-blue-200 bg-gray-200/90 rounded-sm shadow-sm dark:text-green-800 bg-green-600 text-white px-1">
                        <Edit className="w-[18px] h-[18px]"/>
                    </button>
                    <button onClick={confirmProjetDeletion} className="dark:bg-blue-300 hover:bg-red-400 dark:hover:bg-blue-200 bg-gray-200/90 rounded-sm shadow-sm dark:text-red-900 bg-red-600 text-white px-1">
                        <Trash className="w-[18px] h-[18px]"/>
                    </button>
                </div>
            </td>

        </tr>
        <Modal show={confirmingProjetDeletion} onClose={closeModal} maxWidth="xs">
            <form onSubmit={handleDelete} className="p-4">
                <div className="flex justify-center items-center flex-col gap-3">
                    <LucideMessageSquareWarning className="text-red-600" />
                    <p className="text-gray-900 dark:text-white text-center">Cette action est irréversible !!! <br />Voulez-vous continuer ?</p>
                    <div className="flex flex-col gap-2 w-full">
                        <div onClick={closeModal} className="bg-green-500 border-none cursor-pointer text-white px-3 text-center uppercase py-1 text-xs font-semibold shadow-sm rounded-sm hover:bg-green-400">Annuler</div>
                        <DangerButton type="submit" className="justify-center">Supprimer {processing && <LoaderCircle />}</DangerButton>
                    </div>
                </div>
            </form>
        </Modal>
    </>
};