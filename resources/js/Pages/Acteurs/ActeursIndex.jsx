import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import { ActeurForm } from "@/Components/Acteurs/ActeurForm";
import { ActeurItem } from "@/Components/Acteurs/ActeurItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Projector } from "lucide-react";
import { useState } from "react";

export default function ActeursIndex({ projet, acteurs }) {
    const initialItemToUpdateState = {
        'nom_acteur': '',
        'prenom': '',
        'adresse': '',
        'telephone': '',
        'CIN': '',
        'projet_id': projet.id,
    }
    const [itemToUpdate, setItemToUpdate] = useState(initialItemToUpdateState);
    const setUpdate = (acteur) => {
        setItemToUpdate((itemToUpdate) => acteur)
        openModal()
    }
    const createNewActeur = () => {
        setItemToUpdate((itemToUpdate) => initialItemToUpdateState)
        openModal()
    }
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    return (<AuthenticatedLayout>
        <Head title="Acteurs" />
        <div className="grid gap-3 w-full grid-cols-1">
            <div>
                <div className="flex bg-gray-100 dark:bg-gray-900/30">
                    <div className="bg-gray-200/30 dark:bg-gray-900 dark:text-slate-100 p-1 rounded-sm">
                        <Projector className="w-[18px]" />
                    </div>
                    <div className="bg-white/40 dark:bg-gray-900/40 px-2">
                        <p>
                            <span className="font-semibold">Projet : </span>
                            {projet.nom_projet}
                        </p>
                        <p>
                            <span className="font-semibold">Budget : </span>
                            {projet.budget} Ariary
                        </p>

                    </div>
                    <div className="bg-white/40 dark:bg-gray-900/40 px-2 border-l-4 border-gray-400/30 dark:border-gray-900">
                        <p>
                            <span className="font-semibold">Année : </span>
                            {projet.annee}
                        </p>
                        <p>
                            <span className="font-semibold">Début : </span>
                            {new Date(projet.date_du_debut).toDateString('fr')}
                        </p>
                    </div>
                </div>
            </div>
            <div className="dark:bg-gray-900 bg-gray-200/60 p-2 rounded-sm">
                <div className="flex justify-end">
                    <PrimaryButton onClick={createNewActeur}>Récruter</PrimaryButton>
                </div>
                <table className="border-gray-400 w-full mt-2">
                    <thead>
                        <tr>
                            <th className="text-left">Nom</th>
                            <th className="text-left">Prénom</th>
                            <th className="text-left">Adresse</th>
                            <th className="text-left">Téléphone</th>
                            <th className="text-left">CIN</th>
                            <th className="text-left" colSpan={3}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <ActeurItem acteurs={acteurs.data} setToUpdate={setUpdate} />
                    </tbody>
                </table>
            </div>
        </div>
        <Modal show={isOpen} onClose={closeModal} maxWidth="sm">
            <ActeurForm itemToUpdate={itemToUpdate} closeParentModal={closeModal} />
        </Modal>
    </AuthenticatedLayout>);
};