import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { ProjetForm } from "@/Components/Projets/ProjetForm";
import { ProjetItem } from "@/Components/Projets/ProjetItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from '@inertiajs/react';
import { useState } from "react";
import {Pagination} from "@/Components/Pagination";

export default function ProjetsIndex({ projets }) {
    const initialItemToUpdateState = {
        nom_projet: '',
        budget: '',
        date_du_debut: '',
        annee: new Date().getFullYear()
    }
    const [itemToUpdate, setItemToUpdate] = useState(initialItemToUpdateState);
    const setUpdate = (projet) => {
        setItemToUpdate((itemToUpdate) => projet)
        openModal()
    }
    const createNewProjet = () => {
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
        <Head title="Projets" />
        <div className="w-full">
            <div className="py-2 rounded-sm">
                <h1 className="text-indigo-gardiant font-semibold text-2xl">Liste de projets</h1>
            </div>
            <div className="dark:bg-gray-900 bg-gray-200/60 p-2 rounded-sm">
                <div className="py-2 flex justify-end">
                    <PrimaryButton onClick={createNewProjet}>Créer</PrimaryButton>
                </div>
                <table className="border-gray-400 w-full">
                    <thead>
                        <tr>
                            <th className="text-left">Nom du projet</th>
                            <th className="text-left">Budget brut</th>
                            <th className="text-left">Annee</th>
                            <th className="text-left">Début</th>
                            <th className="text-left" colSpan={3}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {projets.data.map(projet => (
                            <ProjetItem projet={projet} setToUpdate={setUpdate} key={projet.id} />
                        ))}
                    </tbody>
                </table>
                
            </div>
        </div>
        <Modal show={isOpen} onClose={closeModal} maxWidth="sm">
            <ProjetForm itemToUpdate={itemToUpdate} closeParentModal={closeModal}/>
        </Modal>
    </AuthenticatedLayout>);
};